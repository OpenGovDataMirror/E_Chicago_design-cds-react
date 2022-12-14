import React from 'react'

const Breadcrumb = () => {
  return (
    <>
      <nav aria-label='breadcrumb' role='navigation'>
        <ol className='breadcrumb mt-2'>
          <li className='breadcrumb-item'>
            <a href='#'>Home</a>
          </li>
          <li class='breadcrumb-item'>
            <a href='#'>Departments</a>
          </li>
          <li class='breadcrumb-item active' aria-current='page'>
            Assets, Information and Services
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
