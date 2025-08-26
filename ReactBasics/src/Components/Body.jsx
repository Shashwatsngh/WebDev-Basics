import React from 'react'

const Body = () => {
    const submitHandler = (e) => {
        console.log("Submitted")
    }
  return (
    <div className='relative min-h-screen w-full'>
  
  <div 
    className='absolute inset-0 bg-cover bg-center'
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1755838692094-49a97b9fb9ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D")',
      filter: 'blur(1px)',
      zIndex: -1
    }}>
    </div>
  
  <div className='relative z-10 flex flex-col items-center justify-center p-4 min-h-screen'>

    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        submitHandler(e)
    }}
    className='flex flex-col items-center justify-center p-8 bg-white/90 text-black gap-4 rounded-lg shadow-lg w-full max-w-md'>

      <h1 className='text-2xl font-bold'>Login</h1>

      <input type="text" 
      placeholder='Enter your name' 
      className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
      
      <input type="email" 
      placeholder='Enter your email' className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>

      <input type="password" 
      placeholder='Enter your password' 
      className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>

      <button className='w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors'>
        Submit
      </button>
    </form>
  </div>
</div>
  )
}

export default Body