import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';
import { updateProfile } from '@firebase/auth';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from '../../hooks/useSignInWithGoogle';
import { useSignInWithFacebook } from '../../hooks/useSignInWithFacebook';

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [signUpWithGoogle] = useSignInWithGoogle(auth);
  const [signUpWithFacebook] = useSignInWithFacebook(auth);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      toast.warning('All fields are required.');
      return;
    }

    try{
      const userCredential = await createUserWithEmailAndPassword(email, password);

      if(userCredential) {
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });
      }

      toast.success('Registration successfully!');

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

    }catch(error){
      toast.error('Error during registration. Please try again.')
    }
  }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className={styles.loginContainer}>
        <img src='/assets/logo_trisog.png' alt="logo" className={styles.loginLogo}/>
        <h1 className={styles.loginTitle}>Join us and explore the world!</h1>
        <form onSubmit={handleRegister}>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label htmlFor='firstName' className='form-label'>First Name:</label>
              <input 
                type='text' 
                className='form-control' 
                id='firstName' 
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name:</label>
              <input 
                type='text' 
                className='form-control' 
                id='lastName' 
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
          </div>
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
            <button 
              type='submit' 
              className={`w-100 ${styles.loginButton}`}>
                Register
            </button>
        </form>
        <div className={styles.divider}><span>or</span></div>
        <button onClick={signUpWithGoogle} className={`${styles.googleButton} w-100 mb-2`}>
            <FaGoogle className='me-2' />
            Sign up with Google
        </button>
        <button onClick={signUpWithFacebook} className={`${styles.facebookButton} w-100 mb-2`}>
            <FaFacebook className='me-2' />
            Sign up with Facebook
        </button>
        <div className='text-center mt-3'>
            Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
