import About from "./About"
import Aroadmap from "./Aroadmap"
import Cantract from "./Cantract"
import Des_L2 from "./Des_L2"
import Description from "./Description"
import Home from "./Home"
import Layout from "./Layout/Layout"
import Partners from "./Partners"
import SilderBar from "./SilderBar"

 

function App() {
  
  return (
   <div>
   <Layout>
    <Home/>
    <Description/>
    <About/>
    <Cantract/>
    <SilderBar/>
    <Des_L2/>
    <Partners/>
    <Aroadmap/>
   </Layout>
   </div>
  )
}

export default App
