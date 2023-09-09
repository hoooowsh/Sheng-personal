class Comment {
  /**
   * Comment model constructor
   * @param {String} ownerId - commenter Id
   * @param {String} ownerName - commenter NAME
   * @param {Date} date - date for storing date
   * @param {String} content - comment content
   */
  constructor(ownerId, ownerName, content, date, isAnonymous) {
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.content = content;
    this.date = date;
    this.isAnonymous = isAnonymous;
  }

  /**
   * Helper function to return data, get comment data using id
   * @param {Object} data - comment object get from database
   * @returns Comment object
   */
  static fromFirestore(data) {
    return new Comment(
      data.ownerId,
      data.ownerName,
      data.date,
      data.content,
      data.isAnonymous
    );
  }

  /**
   * Helper function to create comment instance in database
   * @returns An object that has all docs for a comment instance in database
   */
  toFirestore() {
    return {
      ownerId: this.ownerId,
      ownerName: this.ownerName,
      content: this.content,
      date: this.date,
      isAnonymous: this.isAnonymous,
    };
  }
}
module.exports = Comment;
