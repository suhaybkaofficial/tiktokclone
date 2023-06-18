"use client"
import Posts from '@/components/Posts'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function Home() {
  const {data:session,status} = useSession()
  if(!session){
    redirect("/login")
  }
  return (
    <main className=" min-h-screen w-full max-w-lg  mx-auto">
      <Posts />
    </main>
  )
}
