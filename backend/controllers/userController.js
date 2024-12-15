import pkg from 'firebase-admin';
const { auth } = pkg;

export async function register({email, password, rol}) {

  const userRecord = await auth().createUser({ email, password });

  await auth().setCustomUserClaims(userRecord.uid, { rol });
  return userRecord;
}

export async function login({email}) {
  const user = await auth().getUserByEmail(email);
  return user;
  
}