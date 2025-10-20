
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Logement from "./pages/Logement"
import Error from "./pages/Error";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default App
