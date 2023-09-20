class TechNote {
  /**
   * TechNote model constructor
   * @param {String} title - the title of the techNote
   * @param {String} topic - the topic of the techNote
   * @param {String} content - the content of the techNote
   * @param {String} date - date for storing date
   */
  constructor(title, topic, content, date) {
    this.title = title;
    this.topic = topic;
    this.content = content;
    this.date = date;
  }

  /**
   * Helper function to return data, get technote data using id
   * @param {Object} data - technote object get from database
   * @returns Tech object
   */
  static fromFirestore(data) {
    return new TechNote(data.title, data.topic, data.content, data.date);
  }

  /**
   * Helper function to create TechNote instance in database
   * @returns An object that has all docs for a TechNote instance in database
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

module.exports = TechNote;
