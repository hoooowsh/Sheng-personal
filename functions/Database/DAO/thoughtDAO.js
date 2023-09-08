const firestoreService = require("./../firestoreService");
const Thouhgt = require("../Model/thoughtModel");

class ThoughtDAO {
  /**
   * Get thought using userId, thoughtId as keys
   * @param {String} userId - userId to search user in database
   * @param {String} thoughtId - thoughtId to search thought in database
   * @returns Thouhgt object if exist, or null if does not exist
   */
  async getThoughtById(userId, thoughtId) {
    const data = await firestoreService.getDocumentL2(
      "Users",
      userId,
      "Thoughts",
      thoughtId
    );
    return data ? Thouhgt.fromFirestore(data) : null;
  }

  /**
   * Get all thoughts as a list
   * @param {String} userId - user id
   * @returns List of all thoughts
   */
  async getThoughtList(userId) {
    const result = await firestoreService.getCollectionL2(
      "Users",
      userId,
      "Thoughts",
      "thoughtList"
    );
    return result;
  }

  /**
   * Add thought using userId and Thought object
   * @param {String} userId - user Id as a search key in database
   * @param {Thought} thought - a Thought Object
   * @returns The thought ID that stored in database
   */
  async addThought(userId, thought) {
    const thoughtId = await firestoreService.addDocumentL2(
      "Users",
      userId,
      "Thoughts",
      null,
      thought.toFirestore()
    );
    return thoughtId;
  }

  /**
   * Delete thought using userId and thoughtId
   * @param {String} userId - user id
   * @param {String} thoughtId - thought id
   * @returns Void
   */
  async deleteThought(userId, thoughtId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      "Thoughts",
      thoughtId
    );
    return;
  }
}

module.exports = new ThoughtDAO();
