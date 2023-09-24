const firestoreService = require("./../firestoreService");
const Journey = require("../Model/journeyModel");

class JourneyDAO {
  /**
   * Get Journey using userId, JourneyId as keys
   * @param {String} userId  - userId to search user in database
   * @param {String} journeyId - leetcodeId to search Journey in database
   * @returns Journey object if exist, or null if does not exist
   */
  async getJourneyById(userId, journeyId) {
    const data = await firestoreService.getDocumentL2(
      "Users",
      userId,
      "Journeys",
      journeyId
    );
    return data ? Journey.fromFirestore(data) : null;
  }

  /**
   * Get all Journeys as a list
   * @param {String} userId - user id
   * @returns List of all Leetcode notes
   */
  async getJourneyList(userId) {
    const result = await firestoreService.getCollectionL2(
      "Users",
      userId,
      "Journeys",
      "journeyList"
    );
    return result;
  }

  /**
   * Add Journey using userId and Journey object
   * @param {String} userId - user Id as a search key in database
   * @param {Journey} journey - a Journey Object
   * @returns The Journey ID that stored in database
   */
  async addJourney(userId, journey) {
    const journeyId = await firestoreService.addDocumentL2(
      "Users",
      userId,
      "Journeys",
      null,
      journey.toFirestore()
    );
    return journeyId;
  }

  /**
   * Delete Journey using userId and JourneyId
   * @param {String} userId - user id
   * @param {String} journeyId - journey id
   * @returns Void
   */
  async deleteJourney(userId, journeyId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      "Journeys",
      journeyId
    );
    return;
  }
}

module.exports = new JourneyDAO();
