import { useState, useCallback } from 'react';
import { Auth, AuthError, FacebookAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';

type SignInWithPopupHook = [
  () => Promise<UserCredential | undefined>,
  UserCredential | undefined,
  boolean,
  AuthError | undefined
];

export const useSignInWithFacebook = (auth: Auth): SignInWithPopupHook => {
  const [error, setError] = useState<AuthError>();
  const [loggedInUser, setLoggedInUser] = useState<UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);

  const doSignInWithFacebook = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const provider = new FacebookAuthProvider();
      const user = await signInWithPopup(auth, provider);
      setLoggedInUser(user);
      return user;
    } catch (err) {
      setError(err as AuthError);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  return [doSignInWithFacebook, loggedInUser, loading, error];
};