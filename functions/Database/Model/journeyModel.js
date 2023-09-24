class Journey {
  /**
   * Journey model constructor
   * @param {String} title - the title of Journey
   * @param {String} content - the content of Journey
   * @param {String} date - date for storing date
   */
  constructor(title, content, date) {
    this.title = title;
    this.content = content;
    this.date = date;
  }

  /**
   * Helper function to return data, get Journey data using id
   * @param {Object} data - Journey object get from database
   * @returns Journey object
   */
  static fromFirestore(data) {
    return new Journey(data.title, data.content, data.date);
  }

  /**
   * Helper function to create Journey instance in database
   * @returns An object that has all docs for a Journey instance in database
   */
  toFirestore() {
    return {
      title: this.title,
      content: this.content,
      date: this.date,
    };
  }
}

module.exports = Journey;
