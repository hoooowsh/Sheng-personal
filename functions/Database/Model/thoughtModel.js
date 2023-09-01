class Thought {
  // User schema constructor
  constructor(id, ownerId, ownerEmail, content, date, comment) {
    this.id = id;
    this.ownerId = ownerId;
    this.ownerEmail = ownerEmail;
    this.content = content;
    this.date = date;
    this.comment = comment;
  }

  // using this to return data, get user data using id
  static fromData(thoughtId, data) {
    return new Thought(thoughtId, data.name, data.email, data.isAdmin);
  }

  // using this to return data, get user data using id
  static fromDataNoId(data) {
    return {
      ownerEmail: data.ownerEmail,
      content: data.content,
      date: data.date,
      comment: data.comment,
    };
  }

  // used for creating database entry
  toData() {
    return {
      ownerId: this.ownerId,
      ownerEmail: this.ownerEmail,
      content: this.content,
      date: this.date,
      comment: this.comment,
    };
  }
}
module.exports = Thought;
