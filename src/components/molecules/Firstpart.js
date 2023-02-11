import React from 'react'
import FirstInput from './FirstInput'
import Header from './Header'

const Firstpart = () => {
  return (
    <div className='bg-style px-10 md:px-20 py-8 md:py-10 pb-8 md:pb-24'>
      <Header />
      <h1 className='md:w-2/4 my-10 md:mt-24 m-auto md:p-4 md:leading-14 text-white text-4xl md:text-xxl text-center font-semibold'>Turn your best customers into <span className='loyal-text'>Loyal fans</span></h1>
      <p className='md:w-3/5 text-white m-auto text-center'>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Join the waiting list now to be among the first to experience the future of customer loyalty.</p>
      <FirstInput/>
    </div>
  )
}

export default Firstpart
