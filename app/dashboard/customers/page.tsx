import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Customers',
};

const page = () => {
  return (
    <div className='text-cyan-600'>Customers page</div>
  )
}

export default page