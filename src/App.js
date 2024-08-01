import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import HomePage from './components/Home/HomePage';
import './index.css'
import ProfilePage from './components/Profile/ProfilePage';
import ProfileEditForm from './components/Profile/ProfileEditForm';
/* import DateSetupForm from './components/DateSetup/DateSetupForm';
import MessagingPage from './components/Messaging/MessagingPage';
import NotificationsPage from './components/Notifications/NotificationsPage';
import AdminPanel from './components/Admin/AdminPanel'; */
// Add imports for other components as needed

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path= "/profile" element ={<ProfilePage/>}/>
            <Route path= "/update-profile" element ={<ProfileEditForm/>}/>
          </Routes>          
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
