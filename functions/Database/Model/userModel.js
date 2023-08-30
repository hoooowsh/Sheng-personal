class User {
  // User schema constructor
  constructor(id, name, email, isAdmin) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  // using this to return data, get user data using id
  static fromData(userId, data) {
    console.log(userId, data);
    return new User(userId, data.name, data.email, data.isAdmin);
  }

  // used for creating database entry
  toData() {
    return {
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    };
  }
}
module.exports = User;
