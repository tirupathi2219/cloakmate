'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function Chatpage(props) {
  const [unreadMessageCount, setUnreadMessageCount] = useState(null)
  const Sparams = useSearchParams()
  const search = Sparams.get('user')
  console.log("userinfo", JSON.parse(search))

  return (
    <div>
      <div>
        <section>
          <h2>Messages</h2>
          {unreadMessageCount && <p>You have {unreadMessageCount} new {unreadMessageCount > 1 ? "messages" : "message"} </p>}
        </section>
        <section>

        </section>
        <section>

        </section>

      </div>
    </div>
  )
}
