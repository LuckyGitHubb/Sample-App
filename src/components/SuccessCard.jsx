import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import plans from '../data/plan';

function SuccessCard() {
    const navigate = useNavigate();
    const {state} = useLocation()
    console.log('selectedData: ',state)
    useEffect(()=>{
        if(!state){
          navigate('/')
        }
    },[state,navigate])
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='shadow bg-white p-5 rounded-xl'>
                <div className='mb-4'>
                    <img className='w-24' src="/images/check.png" alt="" srcset="" />
                    <h1 className='font-bold text-xl'>Success!  </h1>
                    <p className='text-gray-600'>{state?.selectedData?.name || ''} have successfully signed Up</p>
                </div>
                <div className='mb-4'>
                    <h1 className='font-bold text-xl'>Premium</h1>
                    <p className='text-gray-600'>$50.00</p>
                </div>
                <div className='mb-4'>
                    <ul>
                    {plans.filter((item)=>item.name === state?.selectedData?.myData)
                    .map((plans,index)=>(
                        plans.features.map((e,i)=>(
                            <li className='mb-2 flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-green-600">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
</svg>

                                {e}
                            </li>
                        ))
                    ))
                    }
                    </ul>
                </div>
                <div className='mb-4'>
                    <h1 className='font-bold text-xl'>{state?.selectedData?.name || '-'}</h1>
                    <p className='text-gray-600'>{state?.selectedData?.email || '-'}</p>
                </div>
                <div>
                    <button onClick={()=>navigate('/')}
                    className='bg-black text-white p-4 rounded-xl flex items-center gap-2
                    hover:bg-gray-900 transition-300 ease-in-out cursor-pointer'>
                        Back To Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SuccessCard