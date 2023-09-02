class Thought {
  // User schema constructor
  constructor(ownerId, ownerEmail, title, content, date, comment) {
    this.ownerId = ownerId;
    this.ownerEmail = ownerEmail;
    this.title = title;
    this.content = content;
    this.date = date;
    this.comment = comment;
  }

  // using this to return data, get user data using id
  static fromData(data) {
    return new Thought(data.name, data.email, data.isAdmin);
  }

  // using this to return data, get user data using id
  static fromDataNoId(data) {
    return {
      ownerEmail: data.ownerEmail,
      title: data.title,
      content: data.content,
      date: data.date,
      comment: data.comment,
    };
  }

  // used for creating database entry
  toData() {
    console.log("22");
    return {
      ownerId: this.ownerId,
      ownerEmail: this.ownerEmail,
      title: this.title,
      content: this.content,
      date: this.date,
      comment: this.comment,
    };
  }
}
module.exports = Thought;
