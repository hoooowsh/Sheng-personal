class User {
  // User schema constructor
  constructor(id, firstName, lastName, email, salt) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.salt = salt;
  }

  // using this to return data, get user data using id
  static fromData(id, data) {
    return new User(id, data.firstName, data.lastName, data.email);
  }

  // used for creating database entry
  toData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      salt: this.salt,
    };
  }
}
module.exports = User;
