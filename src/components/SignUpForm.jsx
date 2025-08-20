import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function SignUpForm() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState('')
    const[showPassword,setShowPassword] = useState('')
    const[showConfirmPassword,setShowConfirmPassword] = useState('')
    const[confirmPassword,setConfirmPassword] = useState("")
    const[terms,setTerms] = useState(false);
    const navigate = useNavigate()
    const {state} = useLocation();
    const [error,setError] = useState({})

    const validate = ()=>{
        let newErrors={}
        if(!name) newErrors.name = 'Name is required'
        if(!email) {newErrors.email = 'Email is required'}
        else if (!email.includes('@') || !email.endsWith('.com') ){newErrors.email='Email is not valid'}
        if(!password) {newErrors.password = 'Password is required'}
        else if(password.length < 6) {newErrors.password = 'Password must be at least 6 characters'}
        else if (/^\d+$/.test(password)) {
  newErrors.password = 'Password must contain only letters'
}
        if(!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required'
        if(password !== confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is not matched'
        }
        if(!terms) newErrors.terms = 'You must accept the terms'
        if(!state) newErrors.plan = 'Please select the plan first'
        setError(newErrors)
        console.log(Object.keys(newErrors).length === 0)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!validate()) return
        const myData = state.selectedPlan
        const data = {
            name,
            email,
            password,
            confirmPassword,
            terms,
            myData
        }
        navigate('/success',{state:{selectedData:data}})
    }
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='p-5 rounded shadow-lg bg-white'>
            {error.plan && <p className='text-red-500 text-sm'>{error.plan}</p>}
            <h2 className='font-bold mb-4 text-xl'>Sign Up</h2>
            <form onSubmit={handleSubmit} action="">
                <div className='mb-4'>
                  <label className='' htmlFor="name">Name</label>
                  <input className=' p-2 mt-1 w-full border rounded' type="text" onChange={(e)=>setName(e.target.value)}
                  name='name' value={name} placeholder='Enter Your Name' />
                  {error.name && <p className='text-red-500 text-sm'>{error.name}</p>}
                </div>
                <div className='mb-4'>
                  <label className='' htmlFor="email">Email</label>
                  <input className=' p-2 mt-1 w-full border rounded' type="email" onChange={(e)=>setEmail(e.target.value)}
                  name='text' value={email} placeholder='Enter Your Email' />
                  {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
                </div>
                <div className='mb-4'>
                  <label className='' htmlFor="password">Password</label>
                  <input className=' p-2 mt-1 w-full border rounded' 
                  type="password" onChange={(e)=>setPassword(e.target.value)}
                  name='password' value={password} placeholder='Enter Your Password'
                  />
                  {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
                </div>
                <div className='mb-4'>
                  <label className='' htmlFor="confirmPassword">Confirm Password</label>
                  <input className=' p-2 mt-1 w-full border rounded' 
                  type="password" onChange={(e)=>setConfirmPassword(e.target.value)}
                  name='confirmPassword' value={confirmPassword} placeholder='Enter Your Confirm Password' />
                  {error.confirmPassword && <p className='text-red-500 text-sm'>{error.confirmPassword}</p>}
                </div>
                <div className='mb-4 flex items-center gap-4'>
                  <label htmlFor="terms">Accept the terms</label>
                  <input className='p-2 mt-1 border rounded' 
                  type="checkbox" value={terms} onChange={(e)=>setTerms(e.target.checked)}
                  name='terms'/>
                  {error.terms && <p className='text-red-500 text-sm'>{error.terms}</p>}
                </div>
                <div>
                    <button type='submit' className='bg-black px-4 py-2 text-white rounded'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpForm
