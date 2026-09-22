import {jobs} from "@/data/jobs" 
import Link from "next/link"


export default async function JobDetail({ params }){
    const  {id} =  await params
    console.log(id) 

    const job = jobs.find((job)=> job.id === Number(id)) 
    console.log(job)
    return (
        <>
        <div> 
            { job ? (
            
            <h1>{job.title} </h1> ) : <p>no jobs was found</p>
         }
        </div> 
        <Link href="/">
        <button >Back to jobs</button> 
        </Link> 
        </>


    )
}