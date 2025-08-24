"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { supabase } from '@/services/supabaseClient'
import { Clock, Info, Loader2Icon, Video } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

function Interview() { 
    const {interview_id}=useParams()
    console.log(interview_id) 
    const [interviewData,setInterviewData]=useState()
    const [userName,setUserName]=useState()
    const [userEmail,setUserEmail]=useState()
    const [loading,setLoading]=useState(false)
    const{ interviewInfo,setInterviewInfo}=useContext(InterviewDataContext)
    const router=useRouter()
    useEffect(()=>{ 
        interview_id&&GetInterviewDetail();

    },[interview_id])
    const GetInterviewDetail=async()=>{
        try{
        setLoading(true)
        
let { data: interview, error } = await supabase
  .from('interview')
  .select('jobPosition,jobDescription,duration,type') 
  .eq('interview_id', interview_id) 
  setInterviewData(interview[0]) 
  setLoading(false) 
  if(interview?.length==0){
    toast('Incorrect Interview Link')
    return ;
  }
//   console.log(interview)
        }catch(e){
            toast('Incorrect Interview Link')
        }
    } 

    const onJoinInterview =async()=>{
        setLoading(true)
        let { data: interview, error } = await supabase
  .from('interview')
  .select('*') 
  .eq('interview_id', interview_id) 
  console.log(interview[0])
  setInterviewInfo(
    {
        userName:userName,
        userEmail:userEmail,
        interviewData:interview[0]
    }
  )
  router.push('/interview/'+interview_id+'/start') 
  setLoading(false)
    }
  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-16'>
        <div className='flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 mb-20 pb-15'>
             <Image src={'/logo.png'} alt='logo' width={200} height={100} className='w-[140px]'/>
            <h2 className='mt-3'>AI-Powered Interview Platform</h2>
            <Image src={'/interview.jpg'} alt='interview' width={500} height={500} className='w-[280px] my-6 '/>
            <h2 className='font-bold text-xl'>{interviewData?.jobPosition}</h2>
            <h2 className='flex gap-2 items-center  text-gray-500 mt-3'><Clock className='h-4 w-4'/>{interviewData?.duration}</h2> 
            <div className='w-full'>
                <h2>Enter Your Full Name</h2>
                <Input placeholder='e.g John Smith' onChange={(event)=>setUserName(event.target.value)}/>
            </div>
            <div className='w-full'>
                <h2>Enter Your Email</h2>
                <Input placeholder='e.g john@gmail.com' onChange={(event)=>setUserEmail(event.target.value)}/>
            </div>
            <div className='p-3 bg-blue-100 flex gap-4 rounded-lg mt-6' >
                <Info className='text-primary'/>
                <div >
                    <h2 className='font-bold'>Before You Begin </h2>
                    <ul>
                        <li className='text-primary text-sm'>- Test Your Internet Connection</li>
                        <li className='text-primary text-sm'>- For Better Experience Use Laptop or Desktop </li>
                        <li className='text-primary text-sm'>- Ensure your microphone and speakers are functioning correctly</li>
                    </ul>
                </div>

            </div>
            <Button className={'w-full font-bold mt-5'} disabled={loading || !userName} 
            onClick={()=>onJoinInterview()}><Video/> {loading && <Loader2Icon className='animate-spin'/>}Join Interview</Button>
        </div>
    </div>
  )
}

export default Interview