class Comment {
  /**
   * Comment model constructor
   * @param {String} ownerId - commenter Id
   * @param {String} ownerName - commenter NAME
   * @param {Date} date - date for storing date
   * @param {String} content - comment content
   */
  constructor(ownerId, ownerName, date, content) {
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.date = date;
    this.content = content;
  }

  /**
   * Helper function to return data, get comment data using id
   * @param {Object} data - comment object get from database
   * @returns Comment object
   */
  static fromFirestore(data) {
    return new Comment(data.ownerId, data.ownerName, data.date, data.content);
  }

  /**
   * Helper function to create comment instance in database
   * @returns An object that has all docs for a comment instance in database
   */
  toFirestore() {
    return {
      ownerId: this.ownerId,
      ownerName: this.ownerName,
      date: this.date,
      content: this.content,
    };
  }
}
module.exports = Comment;
