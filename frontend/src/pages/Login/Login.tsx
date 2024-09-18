import styles from './Login.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className={styles.loginContainer}>
        <img src='/assets/logo_trisog.png' alt="logo" className={styles.loginLogo}/>
        <h1 className={styles.loginTitle}>Sign In!</h1>
        <form>
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
            Sign in with Google
        </button>
        <button className={`${styles.facebookButton} w-100 mb-2`}>
            <FaFacebook className='me-2' />
            Sign in with Facebook
        </button>
        <div className='text-center mt-3'>
            Don't have an account yet? <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Login
