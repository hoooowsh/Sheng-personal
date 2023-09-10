const firestoreService = require("./../firestoreService");
const Comment = require("../Model/commentModel");

class CommentDAO {
  /**
   * Get comemnt using userId, thoughtId, commentId keys
   * @param {String} userId - userId to search user in database
   * @param {String} objId - objId to search thought in database
   * @param {String} objName - obj name
   * @param {String} commentId - commentId to search comment in database
   * @returns Comment object if exist, or null if does not exist
   */
  async getCommentById(userId, objId, objName, commentId) {
    const data = await firestoreService.getDocumentL3(
      "Users",
      userId,
      objName,
      objId,
      "Comments",
      commentId
    );
    return data ? Comment.fromFirestore(data) : null;
  }

  /**
   * Get all comments as a list
   * @param {String} userId - user id
   * @param {String} objId - obj id
   * @param {String} objName - obj name
   * @returns List of all comments
   */
  async getCommentList(userId, objId, objName) {
    const result = await firestoreService.getCollectionL3(
      "Users",
      userId,
      objName,
      objId,
      "Comments",
      "commentList"
    );
    return result;
  }

  /**
   * Add comment using userId, thoughtId, and Comment object
   * @param {String} userId - user Id as a search key in database
   * @param {String} objId - thoughtId to search thought in database
   * @param {String} objName - obj name
   * @param {Cooment} comment - a Comment Object
   * @returns The comment ID that stored in database
   */
  async addComment(userId, objId, objName, comment) {
    const commentId = await firestoreService.addDocumentL3(
      "Users",
      userId,
      objName,
      objId,
      "Comments",
      null,
      comment.toFirestore()
    );
    return commentId;
  }

  /**
   * Delete comment using userId, thoughtId, and commentId
   * @param {String} userId - user id
   * @param {String} objId - thoughtId to search thought in database
   * @param {String} objName - obj name
   * @param {String} commentId - comment id
   * @returns Void
   */
  async deleteComment(userId, objId, objName, commentId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      objName,
      objId,
      "Comments",
      commentId
    );
    return;
  }
}

module.exports = new CommentDAO();
