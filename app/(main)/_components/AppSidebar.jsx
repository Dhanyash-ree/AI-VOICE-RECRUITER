"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Plus } from "lucide-react"
import { SidebarOptions } from "@/services/Constants"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function AppSidebar() {
    const path = usePathname()
  return (
 
    <Sidebar>
      <SidebarHeader className="flex items-center">
        <Image src= {'/logo.png'} alt='logo' width={200} height={200} className="h-[100px] w-[300px] object-cover"/>
       <Button className="w-full mt-5"><Plus/>Create New Interview</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
           <SidebarContent>
           <SidebarMenu>
              {SidebarOptions.map((option,index)=>(
               <SidebarMenuItem key={index}>
                 <SidebarMenuButton asChild className={`${path==option.path && 'bg-blue-100'}`}>
                   <Link href={option.path}>
                        <option.icon className={`${path==option.path && 'text-primary'}`}/>
                        <span className={`${path==option.path && 'text-primary'}`}>{option.name}</span>
                   </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
           </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}