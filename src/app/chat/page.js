'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function Chatpage() {
  const [unreadMessageCount, setUnreadMessageCount] = useState(null)
  const Sparams = useSearchParams()
  const search = Sparams.get('user')
  console.log("userinfo", JSON.parse(search))
  let data = []
  data.push(JSON.parse(search))
  return (
    <div>
      <div>
        <section>
          <h2>Messages</h2>
          {unreadMessageCount && <p>You have {unreadMessageCount} new {unreadMessageCount > 1 ? "messages" : "message"} </p>}
        </section>
        <section>
    {data?.map((user) => {
       return <div className='usersContainer'>
        <div className='user h-[100px] flex gap-3 bg-gradient-to-r from-[#1faed942] to-[#eab308] rounded-3xl ' >
          <div className='profilePic '>
            <img src='' alt='profile-pic'/>
          </div>
          <div>
          <h3>{user.username}</h3>
          </div>
        
        </div>
        </div>
    })}
        </section>
        <section>

        </section>

      </div>
    </div>
  )
}
