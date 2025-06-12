'use client'

import React, { useState } from 'react'

const SubscriptionComponent = () => {
    const [email, setEmail] = useState<string>("");

  return (
    <div className="flex gap-1">
              <input 
              type="email" 
              placeholder="Enter email address" 
              className="bg-[#efefef] p-2 outline-none"
              onChange={(e)=>setEmail(e.target.value)}
              />
              <button 
              className="border-white border-1 text-center disabled:text-white h-10.5 w-39 enabled:cursor-pointer bg-[#efefef] disabled:bg-transparent hover:bg-[#1e2c20] hover:text-white hover:border-white"
              disabled={email.trim() == ''}
              >
                Subscribe
              </button>
            </div>
  )
}

export default SubscriptionComponent