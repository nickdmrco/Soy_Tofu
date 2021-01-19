import Navbar from './components/Navbar'
import About from './About'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <a name="about"></a>
      <About></About>

      {/* <a name="menu"></a> */}
      {/* menu component goes here */}

      {/* <a name="contact"></a> */}
      {/* contact component goes here */}
      
      <Footer></Footer>
    </>
  )
}

export default App