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
   * @returns Void
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
   * @returns Void
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
   * Second level get document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @returns The document or null if it does not exist
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

  /**
   * Second level add document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {Object} data - data object for adding to database
   * @returns The id of the new created document
   */
  async addDocumentL2(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2 = null,
    data
  ) {
    let docRef;
    if (documentIdL2) {
      docRef = await db
        .collection(collectionL1)
        .doc(documentIdL1)
        .collection(collectionL2)
        .doc(documentIdL2);
      await docRef.set(data);
    } else {
      docRef = await db
        .collection(collectionL1)
        .doc(documentIdL1)
        .collection(collectionL2)
        .add(data);
    }
    return docRef.id;
  },

  /**
   * Second level update document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {Object} data - data object for adding to database
   * @returns Void
   */
  async setDocumentL2(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    data
  ) {
    await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .set(data);
    return;
  },

  /**
   * Second level delete document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @returns Void
   */
  async deleteDocumentL2(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2
  ) {
    await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .delete();
    return;
  },

  /**
   * Second level get the whole collection
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} condition - condition for switch statement
   * @returns A list of objects
   */
  async getCollectionL2(collectionL1, documentIdL1, collectionL2, condition) {
    const collectionVal = db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2);
    const snapshot = await collectionVal.get();
    if (snapshot.empty) {
      return null;
    }
    let result = [];
    switch (condition) {
      case "thoughtList":
        console.log("hjjj");
        snapshot.forEach((doc) => {
          const data = doc.data();
          result.push({
            id: doc.id,
            title: data.title,
            date: data.date,
          });
        });
        return result;
      default:
        return snapshot;
    }
  },

  /**
   * Third level get document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {String} collectionL3 - third level collection name
   * @param {String} documentIdL3 - third level document id
   * @returns The document or null if it does not exist
   */
  async getDocumentL3(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    collectionL3,
    documentIdL3
  ) {
    const doc = await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .collection(collectionL3)
      .doc(documentIdL3)
      .get();
    return doc.exists ? doc.data() : null;
  },

  /**
   * Third level add document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {String} collectionL3 - third level collection name
   * @param {String} documentIdL3 - third level document id
   * @param {Object} data - data object for adding to database
   * @returns The id of the new created document
   */
  async addDocumentL3(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    collectionL3,
    documentIdL3 = null,
    data
  ) {
    let docRef;
    if (documentIdL2) {
      docRef = await db
        .collection(collectionL1)
        .doc(documentIdL1)
        .collection(collectionL2)
        .doc(documentIdL2)
        .collection(collectionL3)
        .doc(documentIdL3);
      await docRef.set(data);
    } else {
      docRef = await db
        .collection(collectionL1)
        .doc(documentIdL1)
        .collection(collectionL2)
        .doc(documentIdL2)
        .collection(collectionL3)
        .add(data);
    }
    return docRef.id;
  },

  /**
   * Third level update document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {String} collectionL3 - third level collection name
   * @param {String} documentIdL3 - third level document id
   * @param {String} data - data object for adding to database
   * @returns Void
   */
  async setDocumentL3(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    collectionL3,
    documentIdL3,
    data
  ) {
    await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .collection(collectionL3)
      .doc(documentIdL3)
      .set(data);
    return;
  },

  /**
   * Third level delete document content helper function for general use cases
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {String} collectionL3 - third level collection name
   * @param {String} documentIdL3 - third level document id
   * @returns Void
   */
  async deleteDocumentL3(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    collectionL3,
    documentIdL3
  ) {
    await db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .collection(collectionL3)
      .doc(documentIdL3)
      .delete();
    return;
  },

  /**
   * Third level get the whole collection
   * @param {String} collectionL1 - first level collection name
   * @param {String} documentIdL1 - first level document id
   * @param {String} collectionL2 - second level collection name
   * @param {String} documentIdL2 - second level document id
   * @param {String} collectionL3 - third level collection name
   * @param {String} condition  - condition for switch statement
   * @returns A list of objects
   */
  async getCollectionL3(
    collectionL1,
    documentIdL1,
    collectionL2,
    documentIdL2,
    collectionL3,
    condition
  ) {
    const collectionVal = db
      .collection(collectionL1)
      .doc(documentIdL1)
      .collection(collectionL2)
      .doc(documentIdL2)
      .collection(collectionL3);
    const snapshot = await collectionVal.get();
    if (snapshot.empty) {
      return null;
    }
    let result = [];
    switch (condition) {
      case "commentList":
        snapshot.forEach((doc) => {
          const data = doc.data();
          result.push({
            id: doc.id,
            ownerId: data.ownerId,
            ownerName: data.ownerName,
            content: data.content,
            date: data.date,
          });
        });
        return result;
      default:
        return snapshot;
    }
  },
};
