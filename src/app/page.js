"use client";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";
import { jobs } from '@/data/jobs'




export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = jobs.filter((job)=>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div>
      <Navbar />
      <SearchBar searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <JobCard jobs={filteredJobs} />

    </div>
  );
}
