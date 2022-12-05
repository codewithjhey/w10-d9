import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favourites from "./components/Favourites"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar subtitle="Find Your Dream Job!" />
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
