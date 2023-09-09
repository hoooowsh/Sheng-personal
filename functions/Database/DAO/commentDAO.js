const firestoreService = require("./../firestoreService");
const Comment = require("../Model/commentModel");

class CommentDAO {
  /**
   * Get comemnt using userId, thoughtId, commentId keys
   * @param {String} userId - userId to search user in database
   * @param {String} thoughtId - thoughtId to search thought in database
   * @param {String} commentId - commentId to search comment in database
   * @returns Comment object if exist, or null if does not exist
   */
  async getCommentById(userId, thoughtId, commentId) {
    const data = await firestoreService.getDocumentL3(
      "Users",
      userId,
      "Thoughts",
      thoughtId,
      "Comments",
      commentId
    );
    return data ? Comment.fromFirestore(data) : null;
  }

  /**
   * Get all comments as a list
   * @param {String} userId - user id
   * @param {String} thoughtId - thought id
   * @returns List of all comments
   */
  async getCommentList(userId, thoughtId) {
    const result = await firestoreService.getCollectionL3(
      "Users",
      userId,
      "Thoughts",
      thoughtId,
      "Comments",
      "commentList"
    );
    return result;
  }

  /**
   * Add comment using userId, thoughtId, and Comment object
   * @param {String} userId - user Id as a search key in database
   * @param {String} thoughtId - thought Id as a search key in database
   * @param {Cooment} comment - a Comment Object
   * @returns The comment ID that stored in database
   */
  async addComment(userId, thoughtId, comment) {
    const commentId = await firestoreService.addDocumentL3(
      "Users",
      userId,
      "Thoughts",
      thoughtId,
      "Comments",
      null,
      comment.toFirestore()
    );
    return commentId;
  }

  /**
   * Delete comment using userId, thoughtId, and commentId
   * @param {String} userId - user id
   * @param {String} thoughtId - thought id
   * @param {String} commentId - comment id
   * @returns Void
   */
  async deleteComment(userId, thoughtId, commentId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      "Thoughts",
      thoughtId,
      "Comments",
      commentId
    );
    return;
  }
}

module.exports = new CommentDAO();
