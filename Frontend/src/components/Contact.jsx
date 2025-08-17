import React from 'react'

const Contact = () => {
  return (
    <div className="w-full p-8 mt-28 min-h-[80vh]">
      <div className="heading pl-[6rem]">
        

        <h1 className="text-[7rem] uppercase font-bold text-start text-gray-500 mb-4">
          <span className='text-gray-500'>Contact</span> Me
        </h1>
        <div className="w-24 h-1 bg-blue-600 mt-4"></div>
        </div>

        <div className="w-full flex justify-center items-center">
          <form
            method="post"
            className="flex flex-col p-6 gap-6 bg-gray-600 rounded-2xl shadow-lg max-w-4xl w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 rounded-md outline-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 rounded-md outline-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-3 rounded-md outline-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

    </div>
  )
}

export default Contact
