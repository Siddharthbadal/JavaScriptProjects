import Hero from "../components/Hero"
import HomeCard from "../components/HomeCard"
import JobListing from "../components/JobListing"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
     <Hero   />
     <HomeCard />
     <JobListing isHome={true}/>
     <ViewAllJobs  />
    </>
  )
}

export default HomePage