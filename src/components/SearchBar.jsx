"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { jobs } from '@/data/jobs';

const SearchBar = ({searchTerm,setSearchTerm}) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const FilterJobs = jobs.filter((jobsData) => 
//         jobsData.title.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   console.log(FilterJobs,"fetched jobs")

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm bg-white">
                <FaSearch className="text-gray-500 text-lg" />

                <input
                    type="text"
                    placeholder="Search jobs, companies or skills..."
                    className="w-full ml-3 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;