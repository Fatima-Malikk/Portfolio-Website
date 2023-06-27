import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Navbar from "./sections/navbar/Navbar"
import Services from "./sections/services/Services";
import Portfolio from "./sections/projects/Projects";
import Tech from "./sections/techstack/Techstack"

const App = () => {
  return (
    <main>
        <Navbar/>
        <About/>
        <Tech/>
        <Services/>
        <Portfolio/>
        <Contact/>
        
    </main>
  )
}

export default App







