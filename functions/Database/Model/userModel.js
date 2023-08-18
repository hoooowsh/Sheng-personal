class User {
  // User schema constructor
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // using this to return data, get user data using id
  static fromData(id, data) {
    return new User(id, data.firstName, data.lastName, data.email);
  }

  toData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
  }
}
module.exports = User;
