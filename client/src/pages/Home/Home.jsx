import About from "../About/About"
import Contact from "../Contact/Contact"
import Resume from "../Resume/Resume"
import Profile from "./Profile"

const Home = () => {
  return (
    <div className="m-5">
      <Profile />
      <About />
      <Resume />
      <Contact />
    </div>
  )
}

export default Home
