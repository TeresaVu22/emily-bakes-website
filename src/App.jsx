import NavBar from "./components/NavBar"
import Cake1 from '../public/cake1.jpg'
import Cake2 from '../public/cake2.jpg'
import Cake3 from '../public/cake3.jpg'
import Login from "./components/Login"
import SingUp from "./components/SignUp"
function App() {
  return (
    <>
      <NavBar />
      {/* <Login />
      <SingUp /> */}
      <div>
        <div className=" h-dvh gap-16 flex justify-center items-center font-slim text-4xl">
          <img src={Cake1} className=" h-4/5" alt="Cake1" />
            <div className=" flex flex-col gap-10 justify-center items-center px-10 h-full">
              <div className="font-script text-6xl flex justify-center items-center">
                Customizable Cakes
              </div>
              <div className="font-script flex text-center justify-center items-center">
                Founded in 2003 by Emily Boudreaux.
              </div>
              <div className=" font-script text-3xl flex flex-col justify-center items-center">
                <div>
                1234 Magnolia Street
                </div>
                <div>
                  Houston, TX 77002
                </div>
                <div>
                  (713) 555-7890
                </div>
              </div>
              <div className='px-4 pt-2 cursor-pointer text-black-500 
                        hover:scale-105 duration-200 hover:text-red-500 z-10 font-updock border border-black rounded-xl'>
                          Make a Cake
              </div>
            </div>
          <img src={Cake2} alt="Cake2" className=" h-4/5" />
        </div>
      </div>
    </>
  )
}

export default App
