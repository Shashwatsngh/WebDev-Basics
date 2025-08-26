//learnt how to use props in react, passing props to components and then using them in components {props.name}


import React from 'react'

const Card = (props) => {
  return (
        <div className='h-70 w-55 bg-blue-200 flex flex-col items-center justify-center p-2 gap-2 border-2 bg-slate-100'>
            <img className='h-23 w-23 rounded-full border-1' src={props.profilePic} alt="" />
            <h1 className='text-xl font-bold'>{props.name},{props.age}</h1>
            
            <h2 className='text-l font-semibold'>{props.profession}</h2>
            <p className='text-sm text-black'>
                {props.email}
            </p>
            <button className='p-2 bg-fuchsia-300 hover:bg-indigo-400 transition-colors rounded-md'>Add Friend</button>
        </div>
  )
}

export default Card