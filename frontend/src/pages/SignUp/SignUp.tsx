import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className={styles.loginContainer}>
        <img src='/assets/logo_trisog.png' alt="logo" className={styles.loginLogo}/>
        <h1 className={styles.loginTitle}>Sign Up!</h1>
        <form>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label htmlFor='firstName' className='form-label'>First Name:</label>
              <input type='text' className='form-control' id='firstName' placeholder='First name'/>
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name:</label>
              <input type='text' className='form-control' id='lastName' placeholder='Last name'/>
            </div>
          </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>E-mail:</label>
                <input type='email' className='form-control' id='email' placeholder='Insert your email'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input type='password' className='form-control' id='password' placeholder='**********'/>
            </div>
            <button type='submit' className={`w-100 ${styles.loginButton}`}>Login</button>
        </form>
        <div className={styles.divider}><span>or</span></div>
        <button className={`${styles.googleButton} w-100 mb-2`}>
            <FaGoogle className='me-2' />
            Sign up with Google
        </button>
        <button className={`${styles.facebookButton} w-100 mb-2`}>
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
