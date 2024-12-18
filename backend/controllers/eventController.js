import admin from 'firebase-admin';

export async function createEvent(eventData) {
  const docRef = admin.firestore().collection('events').doc();
  await docRef.set(eventData);
  return docRef.id;
}

export async function updateEvent(eventId, updatedData) {
  await admin.firestore().collection('events').doc(eventId).update(updatedData);
}

export async function getEvent(eventId) {
  const doc = await admin.firestore().collection('events').doc(eventId).get();
  return doc.exists ? doc.data() : null;
}

export async function getEvents() {
  const doc = await admin.firestore().collection('events').get();
  const events = doc.docs.map(doc => ({id: doc.id, ...doc.data()}));
  return events;
}

export async function deleteEvent(eventId) {
  await admin.firestore().collection('events').doc(eventId).delete();
}

export async function getMyEvents(email) {
  const snapshot = await admin.firestore().collection('events').where('participants', 'array-contains', email).get();
  const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return events;
}

export async function suscribe(eventId, email) {
  await admin.firestore().collection('events').doc(eventId).update({
    participants: admin.firestore.FieldValue.arrayUnion(email)
  });
}
