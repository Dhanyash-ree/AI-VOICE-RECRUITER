import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
  return (
    <div className="grid grid-cols-2 gap-4">
    <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-500 rounded-lg p-5'>
    <Video className='p-3 bg-blue-50 rounded-lg h-12 w-12  '/>
    <h2 className='font-bold'>Create New Interview </h2>
    <p className='text-gray-300'>Create AI Interviews And Schedule Them With Candidates</p>
    </Link>
      <div className='bg-white border border-gray-500 rounded-lg p-5'>
    <Phone className='p-3 bg-blue-50 rounded-lg h-12 w-12  '/>
    <h2 className='font-bold'>Create Phone Screaning Call </h2>
    <p className='text-gray-300'>Schedule Phone Screening With Candidates</p>
    </div>
    </div>
  )
}

export default CreateOptions