/**
 * Helper function to tell if the email is admin email or not
 * @param {String} email - email
 * @returns boolean
 */
const isAdmin = (email) => {
  if (email === process.env.ADMIN_EMAIL) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isAdmin };
