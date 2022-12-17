import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./component/Auth"
import { Dashboard } from "./component/Dashboard"

function App() {
  return (
    
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Auth />} />
      //     <Route path="/dashboard" element={<Dashboard />} />
      //   </Routes>
      // </BrowserRouter>
      <Dashboard/>
 
  )
}

export default App