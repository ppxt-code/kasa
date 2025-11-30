import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const LogementsContext = createContext();

const base = import.meta.env.PROD ? '/kasa' : ''; // github pages
function LogementsProvider({ children }) {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch(`${base}/logements.json`)// github pages fetch('/logements.json')
      .then(res => res.json())
      .then(data => setLogements(data))
      .catch(console.error);
  }, []);

  return (
    <LogementsContext.Provider value={{ logements }}>
      {children}
    </LogementsContext.Provider>
  );
}
export default LogementsProvider