import React, { useContext } from 'react'

function Footer() {

  let footerComponent

  let data = new Date().getFullYear()

  {
    footerComponent = (
      <>
        <div className="flex justify-center bg-sky-200 text-teal-700">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia Generation Giovana | Copyright: {data}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;