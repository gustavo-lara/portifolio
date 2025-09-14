import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App