const firebase = require("firebase-admin");
const {
  header,
  validationResult,
  ValidationChain,
  body,
} = require("express-validator");

const errorResponses = {
  "Missing Authorization Header": { statusCode: 403 },
  "Authorization token is not bearer": { statusCode: 403 },
  "Could not validate Firebase Token": { statusCode: 400 },
  "The device has already been registered": { statusCode: 401 },
  "The phone number has not been verified": { statusCode: 409 },
  "Missing Required Paramater": { statusCode: 412 }, // Note: Here you might need to append the missing parameter to the error message
  "Could not validate 2FA access token": { statusCode: 417 },
};

/**
 * Validates a Firebase token and returns the corresponsing User ID if it exists,
 * otherwise it throws an error. Refer to: https://firebase.google.com/docs/auth/admin/verify-id-tokens
 * @param {string} token - The Firebase token to be validated.
 * @returns Decoded firebase auth token.
 */
async function ValidateIDToken(token) {
  let decodedToken = await firebase
    .auth()
    .verifyIdToken(token)
    .catch((err) => {
      console.error(`${err.code} -  ${err.message}`);
      throw err;
    });
  return decodedToken;
}

/**
 * Throws an error if the email is not verified or the token could not be validated using Firebase Admin SDK.
 * @param {string} value - The bearer token containing the string `bearer`. Token must be extracted.
 * @param {Request} req - The request object passed by express validator
 */
async function VerifyFirebaseToken(value, { req }) {
  const token = value.split(" ")[1];
  const { uid, email } = await ValidateIDToken(token);

  // If the result is 0 here we throw and error for invalid token
  if (!uid || !email) {
    throw new Error("Could not validate Firebase Token");
  }
  return true;
}

//Base validation chain for checking if authorization bearer header exists with Firebase auth token
const BaseAuthorizationHeaderValidator = () => {
  return header("authorization")
    .trim()
    .exists()
    .withMessage("Missing Authorization Header")
    .bail()
    .contains("Bearer")
    .withMessage("Authorization token is not bearer")
    .bail();
};

/**
 * An error handler function for express validator. Collects error that occured during
 * the request processing stage and prepares a JSON response. Each case statement switches
 * through the error message and assigns the response an error code on a case by case basis.
 * @param {Response} res - The response body of the request that must be modified to set reponse code.
 * @param {Request} req - The request object passed by express validator
 * @param {function} next- The next function called (the main request handler) if there are no errors.
 */
const AuthValidate = async (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const message = errors.array()[0].msg;
  const responseConfig = errorResponses[message] || { statusCode: 400 }; // Default to 400 if error message is not recognized

  res.status(responseConfig.statusCode).json({
    error: message,
  });
};

/**
 * Basic Firebase validator to be used.
 * @returns
 */
const FirebaseTokenValidator = () => {
  return [BaseAuthorizationHeaderValidator().custom(VerifyFirebaseToken)];
};

module.exports = {
  BaseAuthorizationHeaderValidator,
  AuthValidate,
  FirebaseTokenValidator,
};
