class Leetcode {
  /**
   * Leetcode model constructor
   * @param {String} title - the title of Leetcode
   * @param {String} topic - the topic of the Leetcode
   * @param {String} content - the content of Leetcode
   * @param {String} date - date for storing date
   */
  constructor(title, topic, content, date) {
    this.title = title;
    this.topic = topic;
    this.content = content;
    this.date = date;
  }

  /**
   * Helper function to return data, get Leetcode data using id
   * @param {Object} data - Leetcode object get from database
   * @returns Leetcode object
   */
  static fromFirestore(data) {
    return new Leetcode(data.title, data.topic, data.content, data.date);
  }

  /**
   * Helper function to create Leetcode instance in database
   * @returns An object that has all docs for a Leetcode instance in database
   */
  toFirestore() {
    return {
      title: this.title,
      topic: this.topic,
      content: this.content,
      date: this.date,
    };
  }
}

module.exports = Leetcode;
