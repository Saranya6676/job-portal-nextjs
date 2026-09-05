"use client";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";
import { jobs } from '@/data/jobs'
import Filter from "@/components/Filter";




export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [experience, setExperience] = useState("all")
  const [jobType, setJobType] = useState("")
  const [location, setLocation] = useState("all");
  const [freshness, setFreshness] = useState("all");

  const filteredJobs = jobs.filter((job) =>{
  const matchesSearch  =  job.title.toLowerCase().includes(searchTerm.toLowerCase())
  const matchesExperience =  experience == "all" ||  job.experience === experience
  const matchesLocation =  location == "all" || job.location === location

  return matchesSearch && matchesExperience && matchesLocation
})


  return (
    <div>
      <Navbar />
      <SearchBar searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <div className="flex">
        <Filter experience={experience} setExperience={setExperience}
          jobType={jobType}
          setJobType={setJobType}
          location={location}
          setLocation={setLocation}
          freshness={freshness}
          setFreshness={setFreshness}
        />
      <JobCard jobs={filteredJobs} />
      </div>


    </div>
  );
}
