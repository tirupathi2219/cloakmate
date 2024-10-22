'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Chatpage() {
  const [unreadMessageCount, setUnreadMessageCount] = useState(null)

  const user = useSelector((state) => {
    console.log('13:::', state)
    return state.user.userData
  })

  return (
    <div>
      <div>
        <section>
          <h2>Messages</h2>
          {unreadMessageCount && <p>You have {unreadMessageCount} new {unreadMessageCount > 1 ? "messages" : "message"} </p>}
        </section>
        <section>
          <div className='usersContainer'>
            <div className='user h-[100px] flex gap-3 bg-gradient-to-r from-[#1faed942] to-[#eab308] rounded-3xl ' >
              <div className='profilePic '>
                <img src='' alt='profile-pic' />
              </div>
              <div>
                <h3>{user?.username}</h3>
              </div>

            </div>
          </div>

        </section>
        <section>

        </section>

      </div>
    </div>
  )
}
