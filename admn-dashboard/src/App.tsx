import DashboardWrapper from "./DashboardWrapper"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Dashboard from "./pages/Dashboard"
import Sales from "./pages/Sales";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";

function App() {

  return (
    <Router>
      <DashboardWrapper>
        <Routes>
          <Route path = "/dashboard" element={<Dashboard />} />
          <Route path = "/messages" element={<Messages />} />
          <Route path = "/sales" element={<Sales />} />
          <Route path = "/analytics" element={<Analytics /> } />
          <Route path="/products" element={<Products />} />
        </Routes>
      </DashboardWrapper>
    </Router>
  )
}

export default App
