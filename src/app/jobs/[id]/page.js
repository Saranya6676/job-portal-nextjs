import { jobs } from "@/data/jobs"
import Link from "next/link"
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa"
import { GrLocationPin } from "react-icons/gr"
import { IoIosArrowForward } from "react-icons/io"
import { TbBriefcase2 } from "react-icons/tb"
import SaveJobButton from "@/components/SaveJobButton" 


export default async function JobDetail({ params }) {
  const { id } = await params
  console.log(id)

  const job = jobs.find((job) => job.id === Number(id))
  console.log(job)
  return (
    <>
      {/* <div> 
            { job ? (
            
            <h1>{job.title} </h1> ) : <p>no jobs was found</p>
         }
        </div>  */}
      <div className="min-h-screen  bg-gray-50">
        <Link href="/" className="flex max-w-4xl mx-auto   justify-start
          ">
          <button className="flex  justify-center items-center pt-4" ><IoIosArrowForward color="gray" />Back to jobs</button>
        </Link>

        <div className="flex max-w-4xl bg-white justify-self-center shadow-xl rounded-2xl gap-10 my-10 mx-20 p-6" >
          {job ? (
            <div className="">

              <div className="flex justify-between">
                <div className="text-3xl text-black font-bold">{job.title} </div>
                <div className="flex gap-4">
                  {/* <button className=" rounded-sm px-6 border-gray-400 border flex items-center gap-2"> <FaRegBookmark />Save Job</button> */} 
                  <SaveJobButton jobId={job.id}/>
                  <button className="bg-blue-700 rounded-sm text-white px-6">Apply now</button>

                </div>
              </div>
              <div className="text-gray-600 border-b border-gray-100 py-6 "> {job.company} </div>
              <div className="flex gap-3 border-b border-gray-100 py-6">
                <div className="flex justify-center  bg-gray-200  px-2 py-1 rounded-2xl items-center"> 📍 {job.location} </div>
                <div className="bg-gray-200  px-2 py-1 rounded-2xl">💼{job.type}</div>
                <div className="flex justify-center items-center bg-gray-200 rounded-2xl  px-2 py-1">⏱️{job.experience}</div>
              </div>
              <div className="text-2xl font-bold my-3 " >Description </div>
              <div className="border-b border-gray-100 py-6 text-gray-600"> {job.description}</div>
              <div className="text-2xl font-bold  my-3 "> Key Responsibilities</div>  <ul className="list-disc list-inside border-b border-gray-100 py-6 space-y-2">{(job.responsibilities|| []).map((responsibilities, index) => (<li key={index} className=" border-gray-100 text-gray-600 space-y-2  ">{responsibilities}</li>))}</ul>
              <div className="text-2xl font-bold  ">Job requirements</div>  <ul className="list-disc list-inside border-b border-gray-100 py-6 space-y-2">  {(job.requirements|| []).map((requirements, index) => (<li  key={index}className=" text-gray-600"> {requirements} </li>))} </ul>
              <div className="text-2xl font-bold my-3">Required Skills</div>
              <div className="flex gap-3 ">{job.skills.map((item, index) => (
                <div key={index}>
                  <button className=" rounded flex flex-col px-4 py-1 bg-blue-50 text-blue-500">{item}</button>
                </div>

              ))}</div>
            </div>) :
            <p>Jobs not found</p>

          }
        </div>
      </div>



    </>


  )
}