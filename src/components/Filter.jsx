const Filter = ({ experience,
    setExperience,
    jobType,
    setJobType,
    location,
    setLocation,
    freshness,
    setFreshness,
    workmode,
    setWorkmode,
}) => {
    return (
        <>
            <div className="flex flex-col gap-5 w-[200px] mx-4 my-4 py-4 px-4 ">
                <h3>Experience</h3>
                <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-[200px]  border border-gray-300">
                    <option value="all">all</option>
                    <option value="0-2 Years">0-2 Years</option>
                    <option value="1-4 Years">1-4 Years</option>
                    <option value="2-5 Years">2-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                </select>
                <h3>Job Type</h3>

                <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-[200px]  border border-gray-300">Job Type
                    <option value="all">All Job Types </option>
                    <option value="Full Time">Full Time</option>
                    <option value="internship">INTERSHIP</option>

                </select>
                <h3>work mode</h3>
                <select value={workmode} onChange={(e) => setWorkmode(e.target.value)} className="w-[200px]  border border-gray-300">Work Mode
                    <option value="all">All  </option>
                    <option value="Work from office">Work from office</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>


                </select>
                <h3>Location</h3>
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-[200px]  border border-gray-300">Job Type
                    <option value="all">All Locations</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                </select>
                <h3>Freshness</h3>

                <select value={freshness} onChange={(e) => setFreshness(e.target.value)} className="w-[200px]  border border-gray-300">Job Type
                    <option value="all">all</option>
                    <option value="30 days">Last 30 days</option>
                    <option value="15 days">Last 15 days</option>
                    <option value="7 days">Last 7 days</option>
                    <option value="3 days">Last 3 days</option>
                    <option value="1 days">Last 1 days</option>
                </select>


            </div>

        </>
    )

}

export default Filter