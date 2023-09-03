class User {
  /**
   * User model constructor
   * @param {String} id - user id, should get from firebase auth
   * @param {String} name - user name, should get it from google OAuth
   * @param {String} email - user name, should get from google OAuth
   * @param {Boolean} isAdmin - to tell if the user is Admin or not
   */
  constructor(id, name, email, isAdmin) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  /**
   * Helper function to get data from database for User
   * @param {String} userId - search key for user, used in both firebase Auth and firestore
   * @param {Object} data - user object get from database
   * @returns User object
   */
  static fromFirestore(userId, data) {
    return new User(userId, data.name, data.email, data.isAdmin);
  }

  /**
   * Helper function to create user instance in database
   * @returns An object that has all docs for a user instance in database
   */
  toFirestore() {
    return {
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    };
  }
}
module.exports = User;
