import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const LogementsContext = createContext();

function LogementsProvider({ children }) {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
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