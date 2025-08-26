// Context API in React
// first step create a context folder
// second step create a context file
// third step wrap App with context file in main.jsx
// as we can see when we wrapped app in usercontext then we will see usercontext on the screen, this is because now usercontext is the parent of app and app is the child of usercontext, therefore all the contents of usercontext will be visible on the screen
// to change this, we can pass children i.e. app as a prop to usercontext itself, and then we can see app on the screen, or the contents of the app will be visible on the screen and also we need to return children i.e. app in usercontext itself
// next step is to make a provider
// provider is a component that provides the context to its children
// we can make a provider by using Datacontext and then wrapping app with Datacontext.Provider in the usercontext file
// we will need to export Datacontext from the usercontext file
// we can pass value as a prop to Datacontext.Provider
// we can use useContext hook to access the value in any component
// we need to import useContext hook from react
// we need to import DataContext from the usercontext file
// we need to import Datacontext from the usercontext file
// also we need to pass the value as a prop to Datacontext
 
import React, { useContext } from 'react'
import { DataContext } from './Context/UserContext'
 
const App = () => {
  const data=useContext(DataContext)
  console.log(data)
  return (
    <div>Hey {data}</div>
  )
}

export default App




// learning router in react
//first step wrap App with BrowserRouter in main.jsx
//second step create Routes and Route components in App.jsx
//third step create pages for each route in pages folder
// make sure to import pages in App.jsx and also to import BrowserRouter in main.jsx, and also to import Routes and Route in App.jsx 

//for linking a route to an element, use a tag and set the path of the route as the href attribute of the a tag

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import Navbar from './Components/Navbar'

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//     </>
//   )
// }

// export default App


//api calling using axios

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Card from './Card'

// const App = () => {
//   const [response, setResponse] = useState([])
//   const getData = async() => {
//     const api = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
//     console.log(api.data)
//     setResponse(api.data)
//   }
//   useEffect(() => {
//     getData()
//   }, [])
  

//   return (
//     <div
//     className='flex flex-col items-center justify-center p-4'>
//       <button
//        onClick={()=>{
//         getData()
//        }}
//        className='p-2 bg-blue-500 text-white rounded-md'>
//         Get Data
//       </button>


//       <div
//       className='p-4 mt-4 gap-5 flex flex-wrap'>

//         {response.map((item)=>{
//           return(
//             <Card
//             key={item.id}
//             name={item.author}
//             profilePic={item.download_url}
//             />
//           )
//         })}

//       </div>
//     </div>
//   )
// }

// export default App




//Making multiple cards using components and props
// import Navbar from './Components/Navbar'
// import BodyCard from './BodyCard'
// import Footer from './Components/Footer'
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <BodyCard/>
//       <Footer/>
//     </div>
//   )
// }
// export default App


// Learning how to make components in react
//made a navbar, footer and body of a website using components
// import React from 'react';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Body from './Components/Body';

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Body/>
//     <Footer/>
//     </>
//   );
// };

// export default App







// making a form in react

// import React, { useState } from 'react'


// const App = () => {
//   const [username, setUsername] = useState("")
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username)
//     }
//   return (
//     <form onSubmit={(e)=>{
//         handleSubmit(e)
//     }} 
//     className='flex flex-col items-center justify-center m-8 p-8 bg-gray-900 rounded-lg gap-4'>

//         <input 
//         onChange={(e)=>{
//             setUsername(e.target.value)
//         }}
//         value={username} 
//         className='px-2 py-2 bg-blue-100 text-black rounded-md text-xl w-full' 
//         type="text" 
//         placeholder='Enter your name'/>

//         <div className='flex gap-4 w-full'>

//           <input className='px-2 py-2 bg-blue-800 text-white rounded-md text-lg w-full' type="submit" />

//           <button 
//           type="button" 
//           onClick={() => setUsername("")} 
//           className='px-2 py-2 bg-red-600 text-white rounded-md text-lg w-full'>
//             Clear
//             </button>

//         </div>
//     </form>
//   )
// }

// export default App


// as we can see adding value={username} to input tag will make it a controlled component, by controlled component we mean that the value of the input tag is controlled by the state, by state we mean the value of the variable, so if we want to change the value of the input tag we need to change the value of the variable


// if we remove value={username} from input tag then it will become an uncontrolled component, by uncontrolled component we mean that the value of the input tag is not controlled by the state, so we cannot change the value of the input tag using useState

// this is a very crucial concept in react, as we can see that the value of the input tag is controlled by the state, so we can use useState to control the value of the input tag,if we dont use value={username} then there can be multiple issues like browser DOM will have its own value and react will have its own value and both will be different, so it will create confusion and we will not be able to control the value of the input tag

// we saw that when we removed value={username} then the input tag was not getting updated when we pressed clear button, so we need to use useState to control the value of the input tag

//two way binding is a concept where the value of the input tag is controlled by the state, so we can use useState to control the value of the input tag and onChange event to update the value of the input tag, and react also knows when the value of the input tag is updated then it will update the state



//implementing a counter in react and learning state


// import React, { useState } from 'react'

// const App = () => {
//     const [A, setA] = useState(1)
//     const abc= ()=>{
//         let i = A;
//         const interval = setInterval(() => {
//             if (i < 10) {
//                 setA(i);
//                 i++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, 1000);
//     }
//   return (
//     <div>
//         <h1>{A}</h1>
//         <button onClick={abc} >Start Countdown</button>
//     </div>
//   )
// }

// export default App

//hooks-speical type of functions, can be used for state management, dom manipulation
// const [first, setfirst] = useState(second)
// first is readable variable, setfirst is writable var, second is the value we are assigning initially  

// index is the parent of main and main is the parent of app 
// when we import index.css to main then all the elements in app will have the css properties of index.css 