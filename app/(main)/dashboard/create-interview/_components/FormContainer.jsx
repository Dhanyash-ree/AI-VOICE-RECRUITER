import React, { useEffect,useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/Constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function FormContainer({onHandleInputChange, GoToNext}) { 
  const [interviewType,setInterviewType]=useState([]);
  useEffect(()=>{
    if(interviewType){
      onHandleInputChange('type',interviewType)
    }
  },[interviewType])  

  const AddInterviewType=(type)=>{
    const data= interviewType.includes(type);
    if(!data){
      setInterviewType(prev=>[...prev,type])
    }else{
      const result= interviewType.filter(item=>item!=type)
      setInterviewType(result);
    }
  }
  return (
    <div className='p-5 bg-white rounded-xl'>
    <div>
        <h2 className='text-sm font-medium'>Job Name</h2>    
        <Input placeholder='eg. FullStack Developer' className='mt-5' 
        onChange={(event)=>onHandleInputChange('jobPosition',event.target.value)}/>
    </div>
    <div className='mt-5'>
        <h2 className='text-sm font-medium'>Job Description</h2>    
       <Textarea placeholder='Enter Detailed Job Discription' className='h-[120px] mt-5' onChange={(event)=>onHandleInputChange('jobDescription',event.target.value)} />
    </div>
    <div className='mt-5 font-medium'>
        <h2 className='text-sm'>Select Interview Duration</h2>    
        <Select onValueChange={(value)=>onHandleInputChange('duration',value)}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Duration" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5 Min">5 min</SelectItem>
    <SelectItem value="15 Min">15 min </SelectItem>
    <SelectItem value="30 Min">30 min</SelectItem>
    <SelectItem value="45 Min">45 min</SelectItem>
    <SelectItem value="60 Min">60 min</SelectItem>
  </SelectContent>
</Select>
       
    </div>
     <div className='mt-5'>
        <h2 className='text-sm font-medium '>Interview Type</h2>    
       <div className='flex gap-3 mt-3 flex-wrap'>
        {InterviewType.map((type,index)=>(
          <div key={index} className={`flex items-center cursor-pointer 
          gap-2 p-1 px-2 border rounded-xl border-gray-300
           hover:bg-secondary font-bold ${interviewType.includes(type.title)&&'bg-blue-400 text-primary'}`} onClick={()=>AddInterviewType(type.title)}>
            <type.icon className='h-4 w-4 ' />
            <span >{type.title}</span>
          </div>
        ))}
       </div>
    </div>
    <div className='mt-7 flex justify-end' onClick={()=>GoToNext()}>
<Button>Generate Questions <ArrowRight/></Button>
</div>
    </div>
  )
}

export default FormContainer