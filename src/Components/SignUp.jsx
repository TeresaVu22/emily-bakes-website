import React from 'react'
import Sign from '../../public/signup.avif'

const SingUp = () => {
  return (
    <div className="relative h-screen">
      {/* Image */}
      <img src={Sign} alt="Sign" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Form container */}
      <div className="relative max-w-md w-full mx-auto bg-transparent p-8 opacity-90 rounded-lg"
           style={{ top: '47%', transform: 'translateY(-50%)' }}>
           <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Sign Up</div>
        <form action="" className="space-y-6">
        <div className='flex flex-row gap-10'>
            <div>
                <input type="text" placeholder='Last Name' className="w-full p-2 border border-gray-300 rounded mt-3" />
            </div>
          <div>
            <input type="text" placeholder='First Name' className="w-full p-2 border border-gray-300 rounded mt-3" />
          </div>
        </div>
          <div>
            <input type="text" placeholder='Email' className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <input type="password" placeholder='Password' className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <input type="password" placeholder='Confirm Password' className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingUp;