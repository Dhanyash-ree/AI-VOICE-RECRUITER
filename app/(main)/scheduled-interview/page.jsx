"use client"
import React, { useEffect, useState } from 'react'

import { supabase } from '@/services/supabaseClient'
import InterviewCard from '../dashboard/_components/InterviewCard'
import { Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useUser } from '@/app/provider'

function  ScheduledInterview() { 

    const {user}=useUser()
    const [interviewList,setInterviewList]=useState()
    useEffect(()=>{
user&&GetIterviewList()
    },[user])

    const GetIterviewList=async()=>{
            const result= await supabase.from('interview')
            .select('jobPosition,duration,interview_id,interview-feedback(userEmail)')
            .eq('userEmail',user?.email)
            .order('id',{ascending:false})  
            console.log(result)
            setInterviewList(result.data);
    } 
  return (
    <div className='mt-5 '> 
        <h2 className='font-bold text-2xl'>Interview List With Candidate Feedback</h2>

         {interviewList?.length==0&& 
       <div className='p-5 flex flex-col items-center mt-5 gap-3'> 
           <div><Video className='h-10 w-10 text-primary'/></div> 
            <h2>You Have No Interview Created!!</h2>
            <Button>+ Create New Interview </Button>
        </div>
        }
        {interviewList&&
        <div className='grid grid-cols-2  xl:grid-cols-3 gap-5 mt-5 '> 
          {interviewList?.map((interview,index)=>(
            <InterviewCard interview={interview} key={index} 
            viewDetail={true}/>
          ))}
          </div>}
    </div>
  )
}

export default  ScheduledInterview