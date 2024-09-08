import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import HomePage from './components/Home/HomePage';
import './index.css'
import ProfilePage from './components/Profile/ProfilePage';
import ProfileEditForm from './components/Profile/ProfileEditForm';
import DateSetupForm from "./components/DateSetUp/DateSetupForm"
import DateDetailPage from './components/DateDetails/DateDetailPage';
import LandingPage from './components/Authentication/LandingPage';
import SignIn from './components/Authentication/Sign-in';
import SignUp from './components/Authentication/Sign-up';
import ContactUs from './components/Contact/ContactUs';
import CreateProfile from './components/Authentication/CreateProfile';
import TermsOfService from './components/Terms/TermsPage';
import OtpVerification from './components/Authentication/OtpVerification';
import CreatePro from './components/Authentication/CreatePro';
import ProtectedRoute from './components/Authentication/protectedRoute';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppContent = () => {
  const location = useLocation();
  const isExcludedPage = ['/','/sign-in', '/sign-up', '/create-profile', '/verifyOtp'].includes(location.pathname);

  return (
    <div className="app">
      {!isExcludedPage && <Header />}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/update-profile" element={<ProtectedRoute><ProfileEditForm /></ProtectedRoute>} />
          <Route path="/date-setup" element={<ProtectedRoute><DateSetupForm/></ProtectedRoute>} />
          <Route path="/date/:dateId" element={<ProtectedRoute><DateDetailPage /></ProtectedRoute>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/create-profile" element={<CreatePro/>} />
          <Route path="/contact" element={<ProtectedRoute><ContactUs/></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><TermsOfService/></ProtectedRoute>} />
          <Route path="/verify-otp" element={<OtpVerification/>}/>
        </Routes>
      </main>
      {!isExcludedPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
