
"use client"

import { jobs } from "@/data/jobs"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SavedJobs() {
    const [savedJobs, setSavedJobs] = useState([]) 

    console.log(jobs)

    // get the saving job id  
    useEffect(() => {
        const Savedjobid = JSON.parse(localStorage.getItem("saveJobs") || "[]").map(Number)
        const filteredJobs = jobs.filter((job) => Savedjobid.includes(Number(job.id)))
        setSavedJobs(filteredJobs)


    }, [])
    console.log(savedJobs,"test")
    return (
        <>
            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">
                    Saved Jobs
                </h1>

                {savedJobs.length === 0 ? (
                    <p className="text-gray-500">
                        You haven't saved any jobs yet.
                    </p>
                ) : (
                    <div className="grid gap-4">
                        {savedJobs.map((job) => (
                            <div
                                key={job.id}
                                className="border rounded-lg p-5"
                            >
                                <h2 className="text-xl font-semibold">
                                    {job.title}
                                </h2>

                                <p className="text-gray-600 mt-1">
                                    {job.company}
                                </p>

                                <p className="text-gray-500 mt-2">
                                    {job.location} · {job.experience}
                                </p>

                                <Link
                                    href={`/jobs/${job.id}`}
                                    className="inline-block mt-4 text-blue-600 hover:underline"
                                >
                                    View Job
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}