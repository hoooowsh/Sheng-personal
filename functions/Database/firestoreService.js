const { db } = require("../Config/firebase");
// const db = admin.firestore();

module.exports = {
  /**
   * First level get document helper function for general use cases
   * @param {String} collection - the collection name, "Users" for exmaple
   * @param {String} documentId - document id, search key in database
   * @returns An object of doc content
   */
  async getDocument(collection, documentId) {
    const doc = await db.collection(collection).doc(documentId).get();
    return doc.exists ? doc.data() : null;
  },

  /**
   * First level update document content helper function for general use cases
   * @param {String} collection - the collection name, "Users" for exmaple
   * @param {String} documentId - document id, search key in database
   * @param {Object} data - data object for updating database
   * @returns None
   */
  async setDocument(collection, documentId, data) {
    await db.collection(collection).doc(documentId).set(data);
    return;
  },

  /**
   * First level add document content helper function for general use cases
   * @param {String} collection - the collection name, "Users" for exmaple
   * @param {String} documentId - document id, search key in databasem. Null if not given
   * @param {object} data - data object for adding to database
   * @returns The id of the new created document
   */
  async addDocument(collection, documentId = null, data) {
    let docRef;
    if (documentId) {
      docRef = await db.collection(collection).doc(documentId);
      await docRef.set(data);
    } else {
      docRef = await db.collection(collection).add(data);
    }
    return docRef.id;
  },

  /**
   * First level delete document content helper function for general use cases
   * @param {String} collection - the collection name, "Users" for exmaple
   * @param {String} documentId - document id, search key in databasem
   * @returns None
   */
  async deleteDocument(collection, documentId) {
    await db.collection(collection).doc(documentId).delete();
    return;
  },

  /**
   * First level query helper function to get data that satisfies the constriant
   * @param {String} collection - the collection name, "Users" for exmaple
   * @param {String} field - the field name for doing the comparison
   * @param {String} operator - the operator, > < =
   * @param {Number} value - value to compare with
   * @returns List of objects that satisfy the constriant
   */
  async queryCollection(collection, field, operator, value) {
    const snapshot = await db
      .collection(collection)
      .where(field, operator, value)
      .get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  /**
   * Seconde level get document helper function for general use cases
   * @param {String} collection - the collection name, "Thoughts" for exmaple
   * @param {String} documentId - document id, search key in database. Thoughts ID for example
   * @returns An object of doc content
   */
  async getDocumentL2(collectionL1, documentIdL1, collectionL2, documentIdL2) {
    const doc = await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .get();
    return doc.exists ? doc.data() : null;
  },
};
