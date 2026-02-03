import React from 'react'



const Header = ({onClick,onChange,value}) => {




  return (
    <div className='flex flex-col bg-gray-400 items-center justify-center h-[250px]'>
               <div className='font-bold'>
                <h1 className='text-[50px]'>Popular Anime</h1>
               </div>


               <div className='flex gap-4  p-[20px] w-[1000px] items-center justify-center'> 

                        <a  className='border px-4 rounded-2xl bg-white py-2' href="">Popular</a>
                        <div className=''>
                         <input type="text" placeholder='Search for an anime...' className='border p-3 w-[400px] rounded-2xl bg-white' onChange={onChange} value={value} />
                        <button onClick={onClick}  className='border px-4 rounded-2xl bg-white py-3'>Search</button>

                        </div>

                        <a  className='border px-4 rounded-2xl bg-white py-2' href="">Airing</a>
                        <a  className='border px-4 rounded-2xl bg-white py-2' href="">Upcoming</a>
                   
               </div>
    </div>
  )
}

export default Header
