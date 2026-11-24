"use client"

import { useEffect, useState } from "react"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";



export default function SaveJobButton({ jobId }) {

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => { 
   function syncSavedStatus() {
        const SavedJobs = JSON.parse(localStorage.getItem("saveJobs") || "[]").map(Number);
        setIsSaved((SavedJobs.includes(Number(jobId)))); 
   } 
    syncSavedStatus() 

    window.addEventListener("savedJobsChanged",syncSavedStatus)
       
    return(()=>{
        window.removeEventListener("savedJobsChanged",syncSavedStatus)
    })


    }, [jobId])

    function HandleSaveJob() {
        const SavedJobs = JSON.parse(localStorage.getItem("saveJobs") || "[]").map(Number)
        let updateJobs;

        if (SavedJobs.includes(Number(jobId))) {
            updateJobs = SavedJobs.filter((jobid) => jobid != jobId)
        }

        else {
            updateJobs = [...SavedJobs, Number(jobId)]
        }

        localStorage.setItem("saveJobs", JSON.stringify(updateJobs));
        setIsSaved(updateJobs.includes(Number(jobId)))

        window.dispatchEvent(new Event("savedJobsChanged")); 

    

    }

    // windows dispatch event send a notification  

    return (
        <>

            <button onClick={HandleSaveJob} className="rounded-sm px-6 border-gray-400 border flex items-center gap-2"> {isSaved ? <FaBookmark /> : <FaRegBookmark />} {isSaved ? "saved" : "Save Job"}

            </button>


        </>

    )
}