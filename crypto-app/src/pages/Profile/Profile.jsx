import React, {useState, useEffect, useContext} from 'react'
import './Profile.css'
import logo from '../../assets/logo.png' // Adjust path if needed
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'



const Profile = () => {
  const navigate = useNavigate();
  const { sessionUser } = useContext(UserContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: logo
  });

const handleLogout = () => {
    
    localStorage.removeItem('googleUser');
  
  setUser({
    name: '',
    email: '',
    avatar: logo})

    navigate('/');
  };
  

  useEffect(() => {
    
    const googleUser = JSON.parse(localStorage.getItem('googleUser'));
    if (googleUser) {
      setUser({
        name: googleUser.given_name || '',
        email: googleUser.email || '',
        avatar: googleUser.picture || logo
      });
    }
  }, []);

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="App Logo" className="profile-logo" />
      <div className="profile-title">My Profile</div>
      <div className="profile-info">
        <div className="profile-info-row">
          <span>Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="profile-info-row">
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile