import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';

import { useEmailPasswordSignIn } from '../../hooks/useSignInWithEmailAndPassword';
import { useSignInWithGoogle } from '../../hooks/useSignInWithGoogle';
import { useSignInWithFacebook } from '../../hooks/useSignInWithFacebook';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [signInWithEmailAndPassword, user, loading, error] = useEmailPasswordSignIn(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning('All fields are required.');
      return;
    }

    try {
      await signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    }catch(error) {
      toast.error('Error during login. Please try again.');
    }
  }

    useEffect(() => {
      if (user) {
        toast.success(`Welcome aboard, ${user.user.displayName}!`);
      }
    }, [user]);
  
    useEffect(() => {
      if (error) {
        toast.error('Error during login. Please try again.');
      }
    }, [error])

  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className={styles.loginContainer}>
        <img src='/assets/logo_trisog.png' alt="logo" className={styles.loginLogo}/>
        <h1 className={styles.loginTitle}>Ready for your next journey?</h1>
        <form onSubmit={handleSignIn}>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>E-mail:</label>
                <input 
                  type='email' 
                  className='form-control' 
                  id='email' 
                  placeholder='Insert your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input 
                  type='password' 
                  className='form-control' 
                  id='password' 
                  placeholder='**********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className={`w-100 ${styles.loginButton}`}>Login</button>
        </form>
        <div className={styles.divider}><span>or</span></div>
        <button onClick={signInWithGoogle} className={`${styles.googleButton} w-100 mb-2`}>
            <FaGoogle className='me-2' />
            Sign in with Google
        </button>
        <button onClick={signInWithFacebook} className={`${styles.facebookButton} w-100 mb-2`}>
            <FaFacebook className='me-2' />
            Sign in with Facebook
        </button>
        <div className='text-center mt-3'>
            Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
