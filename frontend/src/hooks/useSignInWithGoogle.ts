import { useState, useCallback } from 'react';
import { Auth, AuthError, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';

type SignInWithPopupHook = [
  () => Promise<UserCredential | undefined>,
  UserCredential | undefined,
  boolean,
  AuthError | undefined
];

export const useSignInWithGoogle = (auth: Auth): SignInWithPopupHook => {
  const [error, setError] = useState<AuthError>();
  const [loggedInUser, setLoggedInUser] = useState<UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);

  const doSignInWithGoogle = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);
      setLoggedInUser(user);
      return user;
    } catch (err) {
      setError(err as AuthError);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  return [doSignInWithGoogle, loggedInUser, loading, error];
};