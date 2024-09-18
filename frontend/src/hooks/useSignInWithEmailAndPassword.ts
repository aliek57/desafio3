import { useSignInWithEmailAndPassword as useSignInWithEmailAndPasswordFromFirebase } from 'react-firebase-hooks/auth';
import { Auth } from 'firebase/auth';
import { UserCredential, AuthError } from 'firebase/auth';

export const useEmailPasswordSignIn = (auth: Auth): [
  (email: string, password: string) => Promise<UserCredential | undefined>,
  UserCredential | undefined,
  boolean,
  AuthError | undefined
] => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPasswordFromFirebase(auth);

  return [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ];
};
