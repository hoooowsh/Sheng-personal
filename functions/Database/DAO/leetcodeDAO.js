const firestoreService = require("./../firestoreService");
const Leetcode = require("../Model/leetcodeModel");

class LeetcodeDAO {
  /**
   * Get Leetcode using userId, LeetcodeId as keys
   * @param {String} userId  - userId to search user in database
   * @param {String} leetcodeId - leetcodeId to search Leetcode in database
   * @returns Leetcode object if exist, or null if does not exist
   */
  async getLeetcodeById(userId, leetcodeId) {
    const data = await firestoreService.getDocumentL2(
      "Users",
      userId,
      "Leetcodes",
      leetcodeId
    );
    return data ? Leetcode.fromFirestore(data) : null;
  }

  /**
   * Get all Leetcodes as a list
   * @param {String} userId - user id
   * @returns List of all Leetcode notes
   */
  async getLeetcodeList(userId) {
    const result = await firestoreService.getCollectionL2(
      "Users",
      userId,
      "Leetcodes",
      "leetcodeLists"
    );
    return result;
  }

  /**
   * Add leetcode using userId and Leetcode object
   * @param {String} userId - user Id as a search key in database
   * @param {Leetcode} leetcode - a Leetcode Object
   * @returns The Leetcode ID that stored in database
   */
  async addLeetcode(userId, leetcode) {
    const leetcodeId = await firestoreService.addDocumentL2(
      "Users",
      userId,
      "Leetcodes",
      null,
      leetcode.toFirestore()
    );
    return leetcodeId;
  }

  /**
   * Delete leetcode using userId and leetcodeId
   * @param {String} userId - user id
   * @param {String} leetcodeId - leetcode id
   * @returns Void
   */
  async deleteLeetcode(userId, leetcodeId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      "Leetcodes",
      leetcodeId
    );
    return;
  }
}

module.exports = new LeetcodeDAO();
