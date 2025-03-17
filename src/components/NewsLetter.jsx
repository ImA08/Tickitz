import React from 'react'

export function NewsLetter() {
  return (
    <div className="send-email flex flex-col items-center justify-center gap-12 bg-(--primary-color) w-full h-[538px]  border border-(--primary-color) rounded-3xl text-center md:my-20 md:h-85">
          <h2 className='text-5xl text-white'>Subscribe to our newsletter</h2>
          <form className="email-form flex flex-col gap-2.5 md:flex-row">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First name"
              className='border border-white rounded-xl w-57.5 h-15 indent-5 bg-(--primary-color) text-white placeholder:text-white'
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              className='border border-white rounded-xl w-57.5 h-15 indent-5 bg-(--primary-color) text-white placeholder:text-white'
            />
            <button type="submit" className='border border-(--primary-color) h-15 w-57.5 rounded-2xl bg-white text-(--primary-color) cursor-pointer'>Subscribe Now</button>
          </form>
        </div>
  )
}
