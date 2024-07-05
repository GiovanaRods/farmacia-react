import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {

    let navbarComponent

    {
      navbarComponent = (
        <div className='w-full bg-sky-200 text-teal-700 font-bold flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/produtos' className='hover:underline'>Produtos</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;