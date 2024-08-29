import JobListingSingle from "./JobListingSingle";

import { useState, useEffect } from "react";
import Spinner from "./Spinner";


const JobListing = ({ isHome = false}) => {
  // const recentJobs = isHome ? jobs.slice(0,3): jobs;
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async () =>{
      // vite config file proxy
      const apiUrl = '/api/jobs'
      const pageUrl = isHome ? `${apiUrl}?_limit=3` : apiUrl;
      try{
        const res = await fetch(pageUrl);
        const data = await res.json();
        setTimeout(()=>{
          setJobs(data);
        },300)

      } catch (error){
          alert("Error fetching data", error)
      } finally{
        setLoading(false)
      }
    }
    fetchJobs();
  }, [])


  
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'All Jobs'}
      </h2>
      

      {loading ? (
              <Spinner  /> 
      ): (
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job)=>(
                <JobListingSingle key={job.id} job={job}  />
  
            ))}
            </div>
          
        )}
      
    </div>
  </section>
  )
}

export default JobListing