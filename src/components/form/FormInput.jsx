// rfce
import React from 'react'

function FormInput({register, name, type="text", placeholder, errors}) {
  return (
    <div>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full border rounded-lg border-gray-400 p-1 px-4"
      />
      {errors[name] && (
        <p className='text-sm text-red-500'>{errors[name].message}</p>
      )}
    </div>
  )
}

export default FormInput