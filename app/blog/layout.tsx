import React from 'react'

const layout = ({children}) => {
  return (
    <div className='blog-layout text-center mt-4 bg-red-500'>
        <h1>Blog Header Section</h1>
        {children}
        <h1>Blog Footer Section</h1>
        </div>
  )
}

export default layout