
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement"
import LogementProvider from "./components/LogementProvider"


function App() {

  return (
    <Routes>
      <Route path="/" element={<LogementProvider><Home /></LogementProvider>} />
      <Route path="/logement/:id" element={<LogementProvider><Logement /></LogementProvider>} />
    </Routes>
  )
}

export default App
