import React, { useContext, useState, useEffect, createContext } from 'react';
const UsersContext = createContext();

export function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const url = 'https://randomuser.me/api/?results=100&nat=gb';

  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setUsers(json.results);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
    
  return (
    <UsersContext.Provider
      value={{
        users
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
