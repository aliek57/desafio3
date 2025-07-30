import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from '../../hooks/useSignInWithGoogle';
import { useSignInWithFacebook } from '../../hooks/useSignInWithFacebook';

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signUpWithGoogle] = useSignInWithGoogle(auth);
  const [signUpWithFacebook] = useSignInWithFacebook(auth);

  const validateFields = () => {
    let valid = true;

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    if (!firstName.match(nameRegex)) {
      newErrors.firstName = 'Should not contain numbers or special characters.';
      valid = false;
    }

    if (!lastName.match(nameRegex)) {
      newErrors.lastName = 'Should not contain numbers or special characters.';
      valid = false;
    }

    if (!email.match(emailRegex)) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }

    if (!password.match(passwordRegex)) {
      newErrors.password = 'Password should contain at least 8 characters, one letter and one number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateFields();

    if (!isValid) {
      toast.warning('Please correctly fill the form before submitting.');
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
      setErrors({ firstName: '', lastName: '', email: '', password: '' });

    }catch(error){
      toast.error('Error during registration. Please try again.');
    }
  }

  const handleGoogle = async () => {
    try {
      const userCredential = await signUpWithGoogle();
  
      if (userCredential && !userCredential.user.displayName) {
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });
      }
  
      toast.success('Signed up with Google successfully!');
    } catch (error) {
      toast.error('Error signing up with Google. Please try again.');
    }
  }
  
  const handleFacebook = async () => {
    try {
      const userCredential = await signUpWithFacebook();
  
      if (userCredential && !userCredential.user.displayName) {
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });
      }
  
      toast.success('Signed up with Facebook successfully!');
    } catch (error) {
      toast.error('Error signing up with Facebook. Please try again.');
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
                className={`form-control ${errors.firstName && 'is-invalid'}`} 
                id='firstName' 
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
                }}/>
                <div className='invalid-feedback'>
                  {errors.firstName}
                </div>
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name:</label>
              <input 
                type='text' 
                className={`form-control ${errors.lastName && 'is-invalid'}`}
                id='lastName' 
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
                }}/>
                <div className='invalid-feedback'>
                  {errors.lastName}
                </div>
            </div>
          </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>E-mail:</label>
                <input 
                  type='email' 
                  className={`form-control ${errors.email && 'is-invalid'}`} 
                  id='email' 
                  placeholder='Insert your email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                  }}/>
                  <div className='invalid-feedback'>
                    {errors.email}
                  </div>
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input 
                  type='password' 
                  className={`form-control ${errors.password && 'is-invalid'}`} 
                  id='password' 
                  placeholder='**********'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
                  }}/>
                  <div className='invalid-feedback'>
                    {errors.password}
                  </div>
            </div>
            <button 
              type='submit' 
              className={`w-100 ${styles.loginButton}`}>
                Register
            </button>
        </form>
        <div className={styles.divider}><span>or</span></div>
        <button onClick={handleGoogle} className={`${styles.googleButton} w-100 mb-2`}>
            <FaGoogle className='me-2' />
            Sign up with Google
        </button>
        <button onClick={handleFacebook} className={`${styles.facebookButton} w-100 mb-2`}>
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
