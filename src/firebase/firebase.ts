import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1l6JyFyMfPzmIPfgcZcgdVBN9rO7CXt0",
  authDomain: "graphiql-f500a.firebaseapp.com",
  projectId: "graphiql-f500a",
  storageBucket: "graphiql-f500a.appspot.com",
  messagingSenderId: "135378545545",
  appId: "1:135378545545:web:521c1c189ed6944be7cf58",
  measurementId: "G-7CZFZLT4CT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function logout(): Promise<void> {
  signOut(auth);
}
