import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologis from './components/Technologis'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Contacts from './components/Contacts'



function App() {

  return (
    <>

      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

        <div className="fixed top-0 -z-10 h-full w-full"></div>

        <div className="w-full top-0 z-[-2] bg-neutral-950 
                  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

          <div className="container mx-auto px-4 sm:px-6 lg:px-10">

            <Navbar />
            <Hero />
            <About />
            <Technologis />
            <Experience />
            <Projects />
            <Testimonial />
            <Contacts />
          </div>
        </div>
      </div>


    </>
  )
}

export default App
