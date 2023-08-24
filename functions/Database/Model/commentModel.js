class Comment {
  // Comment schema constructor
  constructor(userId, userName, date, content) {
    this.userId = userId;
    this.userName = userName;
    this.date = date;
    this.content = content;
  }

  // using this to return data, get comment data using id
  static fromData(commentId, data) {
    return new Comment(commentId, data.userName, data.date, data.content);
  }

  // used for creating database entry
  toData() {
    return {
      userId: this.userId,
      userName: this.userName,
      date: this.date,
      content: this.content,
    };
  }
}
module.exports = Comment;
