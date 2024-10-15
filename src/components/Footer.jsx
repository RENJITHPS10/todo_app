import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faList, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
    return (
        <>
          <div className=' flex flex-col '>
                <div className='flex justify-center mt-auto'>
                    <div className='border-2 bg-purple-950 py-4 px-6 rounded-lg border-purple-600'>
                        <button className='hover:bg-slate-800 p-2 rounded-lg me-5'> <FontAwesomeIcon icon={faList} className='fa-2xl text-white ' /></button>
                        <button className='hover:bg-slate-800 p-2 rounded-lg me-5'>   <FontAwesomeIcon icon={faSquare} className='fa-2xl text-white' /></button>
                        <button className='hover:bg-slate-800 p-2 rounded-lg me-5'><FontAwesomeIcon icon={faSquareCheck} className='fa-2xl text-white' /></button>
                        <button className='hover:bg-slate-800 p-2 rounded-lg me-5'><FontAwesomeIcon icon={faPlus} className='fa-2xl text-white' /></button>
                        <button className='hover:bg-slate-800 p-2 rounded-lg me-5'>  <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-2xl text-white' /></button>
                    </div>
                </div>
          </div>

        </>
    )
}

export default Footer
