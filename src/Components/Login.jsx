import React from 'react'
import Flower from '../../public/Flower.jpg'

const Login = () => {
  return (
    <div className="relative h-screen">
      {/* Image */}
      <img src={Flower} alt="Flower" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Form container */}
      <div className="relative max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 opacity-90 rounded-lg"
           style={{ top: '50%', transform: 'translateY(-50%)' }}>
           <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Login</div>
        <form action="" className="space-y-6">
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <a href="" className="font-medium text-sm text-blue-500">Forgot Password?</a>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
          <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base'>Don't have an account?</p>
            <button className='text-blue-500 text-sm font-medium ml-2'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
