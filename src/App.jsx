import Navbar from "./Navbar"
import Hero from "./Hero"
import Vehicles from "./Vehicles"
import NewsLetter from "./Newsletter"
import Footer from "./Footer"
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Vehicles />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
