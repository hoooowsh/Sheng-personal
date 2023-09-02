class User {
  // User schema constructor
  constructor(id, name, email, isAdmin, thoughts = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
    this.thoughts = thoughts;
  }

  // using this to return data, get user data using id
  static fromData(userId, data) {
    console.log(userId, data);
    return new User(
      userId,
      data.name,
      data.email,
      data.isAdmin,
      data.thoughts || [] // Default to empty array if thoughts are not available
    );
  }

  // used for creating database entry
  toData() {
    return {
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
      thoughts: this.thoughts,
    };
  }
}
module.exports = User;
