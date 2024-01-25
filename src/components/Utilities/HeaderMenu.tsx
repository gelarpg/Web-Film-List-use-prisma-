import React from 'react'

const HeaderMenu = ({title}: {title: string}) => {
  return (
    <div className="">
        <div className="p-8">
            <h3 className='text-white text-3xl text-center'>{title}</h3>
        </div>
    </div>
  )
}

export default HeaderMenu