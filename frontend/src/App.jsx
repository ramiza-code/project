import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginUpPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from "lucide-react";
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';
import BottomNav from './components/BottomNav';
import Post from './components/Post';
import University from './components/University';
import Blog from './components/Blog';

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });
  if (isCheckingAuth && !authUser)
    return (
      <div className='"flex items-center justify-center h-screen'>
        <Loader className='"size-10 animate-spin' />

      </div>)
  return (
    <div data-theme={theme}>
      <NavBar />
      <Routes>
        <Route path='/' element={authUser ? <BottomNav /> : <Navigate to="/login" />} />
        <Route path='/chat' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ? <LoginUpPage /> : <Navigate to="/" />} />
        <Route path='/settings' element={<SettingPage />} />
        <Route path='/university' element={<University />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path='/post' element={authUser ? <Post /> : <Navigate to="/login" />} />
        <Route path="/blog" element={<Blog />} />


      </Routes>
      <BottomNav />
      <Toaster />
    </div>
  )
}

export default App
