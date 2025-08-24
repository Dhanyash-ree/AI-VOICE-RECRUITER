"use client"
import { useUser } from '@/app/provider'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import { Video } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard'

function LatestInterviews() {
    const [interviewList,setInterviewList]=useState([])
    const {user} =useUser();
    useEffect(()=>{
      user&&GetInterviewList()
    },[user])
 const GetInterviewList= async()=>{
      let { data: interview, error } = await supabase
  .from('interview')
  .select('*')
  .eq("userEmail",user?.email)
  .order('id',{ascending:false})
  .limit(6)
  console.log(interview);
  setInterviewList(interview)
} 


  return (
    <div className='my-5'>
        <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>
       {interviewList?.length==0&& 
       <div className='p-5 flex flex-col items-center mt-5 gap-3'> 
           <div><Video className='h-10 w-10 text-primary'/></div> 
            <h2>You Have No Interview Created!!</h2>
            <Button>+ Create New Interview </Button>
        </div>
        }
        {interviewList&&
        <div className='grid grid-cols-2  xl:grid-cols-3 gap-5 mt-5 '> 
          {interviewList.map((interview,index)=>(
            <InterviewCard interview={interview} key={index}/>
          ))}
          </div>}
    </div>
  )
}

export default LatestInterviews