import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login"
import SignUp from './pages/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage';
import AnotherErrorPage from './pages/AnotherErrorPage';
import ToursPackage from './pages/ToursPackage';
import TourDetails from './pages/TourDetails';
import { ProtectedRoute } from './pages/ProtectedRoute/ProtectedRoute';

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tours" element={<ProtectedRoute element={<ToursPackage/>} />} />
          <Route path="/tours/:id" element={<ProtectedRoute element={<TourDetails/>} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/error" element={<ErrorPage />}/>
          <Route path="/error2" element={<AnotherErrorPage />}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
          transition= {Bounce}
        />
      </>
  )
}

export default App
