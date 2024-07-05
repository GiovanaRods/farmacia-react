import React from 'react';
import homeLogo from '../../assets/doping.jpg'

function Home() {
    return (
        <>
        <div className="bg-sky-200 flex justify-center">
          <div className='container grid grid-cols-2 text-teal-700'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia Anabolis</h2>
              <p className='text-xl'>Farmácia de esteróides anabolizantes</p>
  
              <div className="flex justify-around gap-4">
              <button className='rounded font-bold bg-gray-100 text-teal-800 py-2 px-4'>Ver todos os produtos</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='rounded w-auto h-44 ' />
            </div>
          </div>
        </div>
        <h1 className='flex justify-center text-3xl text-cyan-950 font-bold'>Produtos Promocionais</h1>
      {/* <ListaProdutos/> */}
      </>
    );
}

export default Home;