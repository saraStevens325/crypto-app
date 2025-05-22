import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [sessionUser, setSessionUser] = useState(null);

  useEffect(() => {
    const googleUser = localStorage.getItem('googleUser');
    if (googleUser) {
      setSessionUser(JSON.parse(googleUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ sessionUser, setSessionUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;