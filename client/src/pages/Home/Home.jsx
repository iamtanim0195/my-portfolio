import About from "../About/About"
import Resume from "../Resume/Resume"
import Profile from "./Profile"

const Home = () => {
  return (
    <div className="m-5">
      <Profile />
      <About />
      <Resume />
    </div>
  )
}

export default Home
