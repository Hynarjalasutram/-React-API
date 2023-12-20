import Dashboard from "./components/Dashboard"
import Nav from "./components/Nav"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from "./components/Products"
import Customers from "./components/Customers"
import Income from "./components/Income"
import Promote from "./components/Promote"
import Help from "./components/Help"
import "./App.css"
let App=()=>{
  return(
    <div className="main">
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/income" element={<Income/>}/>
      <Route path="/promote" element={<Promote/>}/>
      <Route path="/help" element={<Help/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App