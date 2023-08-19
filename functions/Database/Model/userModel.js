class User {
  // User schema constructor
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // using this to return data, get user data using id
  static fromData(userId, data) {
    return new User(userId, data.firstName, data.lastName, data.email);
  }

  // used for creating database entry
  toData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
  }
}
module.exports = User;
