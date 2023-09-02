const firestoreService = require("./../firestoreService");
const Thouhgt = require("../Model/thoughtModel");

class ThoughtDAO {
  async getThoughtById(id) {
    const data = await firestoreService.getDocument("Thoughts", id);
    return data ? Thouhgt.fromDataNoId(data) : null;
  }

  // passing a thought document to this helper and save it to database
  async addThought(thought) {
    console.log("33", thought.toData());
    const thoughtId = await firestoreService.addDocument(
      "Thoughts",
      thought.toData()
    );
    return thoughtId;
  }

  // editing a user by id
  async editThought(user, id) {}

  async deleteThought(id) {
    await firestoreService.deleteDocument("Thoughts", id);
  }

  async getThoughtByOwnerEmail(ownerEmail) {
    const data = await firestoreService.queryCollection(
      "Thoughts",
      "ownerEmail",
      "==",
      ownerEmail
    );
    // If data is not empty, return the first user object
    if (data.length > 0) {
      return Thouhgt.fromData(data[0].id, data[0]);
    }
    return null;
  }
}

module.exports = new ThoughtDAO();
