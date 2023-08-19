const admin = require("firebase-admin");
const db = admin.firestore();

module.exports = {
  // get data
  async getDocument(collection, documentId) {
    const doc = await db.collection(collection).doc(documentId).get();
    return doc.exists ? doc.data() : null;
  },

  // update data
  async setDocument(collection, documentId, data) {
    await db.collection(collection).doc(documentId).set(data);
  },

  // add data
  async addDocument(collection, data, id) {
    console.log("wtf", collection, data, id);
    const docRef = await db.collection(collection).doc(id);
    await docRef.set(data);

    console.log("finish testing");
    return docRef.id;
  },

  // give query to get data that satisfy the constriant
  // queryCollection('Users', 'age', '>=', 21)
  async queryCollection(collection, field, operator, value) {
    const snapshot = await db
      .collection(collection)
      .where(field, operator, value)
      .get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};
