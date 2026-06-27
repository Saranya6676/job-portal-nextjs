import React from 'react'
import { jobs } from '@/data/jobs'
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaRegBookmark,
} from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";

const JobCard = () => {
    return (
        <div>
            <div>JobCard</div>
            <div className='shadow-xl/30  max-w-[450px]  mx-4 my-4 py-4 px-4 rounded-[8px]'>
                {jobs.map((job) => (
                    <div key={job.id}>
                        <div className='flex justify-between'>
                            <div className='w-[40px] h-[40px] bg-blue-700 flex justify-center items-center rounded-[8px]'><FaBriefcase color='white' size={20}/></div>
                            <div>
                            <div className='text-2xl'>{job.title}</div>
                            <div className='text-blue-700'>{job.company}</div>
                            </div>
                            <div><FaRegBookmark/></div>
                            </div>
                                <div className='flex justify-center items-center gap-6 py-4'>
                                    <div className='flex gap-3 items-center'><TbBriefcase2 />1-4 yrs</div>
                                    <div className='flex gap-3 items-center'><FaMapMarkerAlt/>location</div>
                                    <div className='bg-emerald-200 text-emerald-700 px-3 py-1 rounded-[6px]'>Full Time</div>


                                </div>
                                <div >
                                    <div className='flex gap-2 border-b-2 border-gray-200 pb-3'>
                                        <div className='flex flex-wrap gap-2  '>{job.skills.map((skils)=>(
                                            <div key={skils.id} className='border-2 border-gray-200 px-1 py-1 rounded-[4px]'>
                                                <div className='text-sm text-blue-700'>{skils}</div>
                                            </div>
                                        ))}</div></div>
                                    </div>
                                   <div className='flex justify-between items-center pt-3'> 
                                    <div className=''>{job.posted}</div>
                                    <button className='bg-blue-700 text-white px-3 py-2 rounded-[6px]'>Apply Now</button>
                                    </div>
                                    

                            </div>

                            ))

            }
                        </div>
                    </div>

                )
}

                export default JobCard