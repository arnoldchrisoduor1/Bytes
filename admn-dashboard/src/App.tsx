import DashboardWrapper from "./DashboardWrapper"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <Router>
      <DashboardWrapper>
        <Routes>
          <Route path = "/dashboard" element={<Dashboard />} />
          <Route path = "/messages" element={<Messages />} />
        </Routes>
      </DashboardWrapper>
    </Router>
  )
}

export default App
