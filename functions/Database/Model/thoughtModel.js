class Thought {
  /**
   * Thought model constructor
   * @param {String} title - the title of the thought
   * @param {String} content - the content of the thought
   * @param {Date} date - date for storing date
   */
  constructor(title, content, date) {
    this.title = title;
    this.content = content;
    this.date = date;
  }

  /**
   * Helper function to return data, get thought data using id
   * @param {Object} data - thought object get from database
   * @returns Thought object
   */
  static fromFirestore(data) {
    return new Thought(data.title, data.content, data.date);
  }

  /**
   * Helper function to create thought instance in database
   * @returns An object that has all docs for a thought instance in database
   */
  toFirestore() {
    return {
      title: this.title,
      content: this.content,
      date: this.date,
    };
  }
}
module.exports = Thought;
