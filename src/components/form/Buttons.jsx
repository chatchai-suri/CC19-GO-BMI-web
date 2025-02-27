//rafce
import React from 'react'
import { Loader } from 'lucide-react'

const Buttons = ({isSubmitting, label}) => {
  return (
    <button
    disabled={isSubmitting}
    className='bg-green-900 text-gray-100 px-4 py-1 rounded-md hover:cursor-pointer font-semibold'
    >
      {isSubmitting ? (
        <div className='flex gap-2'>
          <Loader className='animate-spin' />
          <p>Loading...</p>
        </div>
      ) : (
        <p>{label}</p>
      )}
    </button>
  )
}

export default Buttons