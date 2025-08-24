"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { supabase } from '@/services/supabaseClient';
import { useRouter } from 'next/navigation';

 
function Login() {  
 const router = useRouter()
    const signInWithGoogle=async()=>{
        const {error} = await supabase.auth.signInWithOAuth({
          provider:'google',
           options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
         
        }) 
        if(error){
          console.error('Error',error.message)
        }
    } 
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image src={'/logo.png'} alt='logo' width={400} height={100} className='w-[180px]' /> 
        
      
      <div className='flex flex-col items-center' >
        <Image src={'/login.png'} alt='login' width={600} height={400} className='w-[400px] h-[250px]  rounded-2xl' />
        <h1 className='text-2xl font-bold text-center mt-6'>Welcome to Hir<span className='text-orange-500'>AI</span> </h1>
        <p className='text-gray-500 text-center'>Sign in with Google Authentication</p>
        <Button className='mt-7 w-full' onClick={signInWithGoogle}>Sign In with Google</Button>
      </div>
      </div>
    </div>
  )
}
export default Login