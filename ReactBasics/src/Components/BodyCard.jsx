//learnt how to pass props to a component and how to parse a json and send the props to a component
//we can only send props from top to bottom
//example html->body->main->div

import React from 'react'
import Card from './Card'

const BodyCard = () => {
    const users=[
        {
          "id": 1,
          "name": "Sarah Johnson",
          "email": "sarah.johnson@example.com",
          "age": 28,
          "profession": "Software Engineer",
          "profilePic": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          "id": 2,
          "name": "Michael Chen",
          "email": "michael.chen@example.com",
          "age": 35,
          "profession": "Data Scientist",
          "profilePic": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          "id": 3,
          "name": "Emily Rodriguez",
          "email": "emily.rodriguez@example.com",
          "age": 31,
          "profession": "UX Designer",
          "profilePic": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        {
          "id": 4,
          "name": "David Kim",
          "email": "david.kim@example.com",
          "age": 42,
          "profession": "Product Manager",
          "profilePic": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          "id": 5,
          "name": "Priya Patel",
          "email": "priya.patel@example.com",
          "age": 27,
          "profession": "Marketing Specialist",
          "profilePic": "https://randomuser.me/api/portraits/women/33.jpg"
        }
      ]

  return (
    <div className=' w-full bg-slate-50'>
        <div className='p-10 mr-7 flex flex-wrap gap-5'>
            {users.map((user)=>{
               return <Card 
               key={user.id}
               name={user.name}
               email={user.email}
               age={user.age}
               profession={user.profession}
               profilePic={user.profilePic}
               />
            })}
        </div>
    </div>
  )
}

export default BodyCard