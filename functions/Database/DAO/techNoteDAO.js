const firestoreService = require("./../firestoreService");
const TechNote = require("../Model/techNoteModel");

class TechNoteDAO {
  /**
   * Get techNote using userId, techNoteId as keys
   * @param {String} userId  - userId to search user in database
   * @param {String} techNoteId - techNoteId to search thought in database
   * @returns TechNote object if exist, or null if does not exist
   */
  async getTechNoteById(userId, techNoteId) {
    const data = await firestoreService.getDocumentL2(
      "Users",
      userId,
      "TechNotes",
      techNoteId
    );
    return data ? TechNote.fromFirestore(data) : null;
  }

  /**
   * Get all techNotes as a list
   * @param {String} userId - user id
   * @returns List of all tech notes
   */
  async getTechNoteList(userId) {
    const result = await firestoreService.getCollectionL2(
      "Users",
      userId,
      "TechNotes",
      "techNoteList"
    );
    return result;
  }

  /**
   * Add techNote using userId and techNote object
   * @param {String} userId - user Id as a search key in database
   * @param {TechNote} techNote - a TechNote Object
   * @returns The techNote ID that stored in database
   */
  async addTechNote(userId, techNote) {
    const techNoteId = await firestoreService.addDocumentL2(
      "Users",
      userId,
      "TechNotes",
      null,
      techNote.toFirestore()
    );
    return techNoteId;
  }

  /**
   * Delete techNote using userId and techNoteId
   * @param {String} userId - user id
   * @param {String} techNoteId - techNote id
   * @returns Void
   */
  async deleteTechNote(userId, techNoteId) {
    await firestoreService.deleteDocumentL2(
      "Users",
      userId,
      "TechNotes",
      techNoteId
    );
    return;
  }
}

module.exports = new TechNoteDAO();
