import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

const ApplyJobPage = ({applyJobSubmit}) => {
    const [candidateName, setCandidateName] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [resume, setResume] = useState('');
 
  const navigate = useNavigate();

  const submitJobForm = (e)=>{
    e.preventDefault()
    const newApplication ={
        candidateName,
        experience,
        location,
        about,
        resume,
        github,
        linkedin
    }
    applyJobSubmit(newApplication);
    toast.success(`Yor application was successfully submitted.`)
    return navigate('/jobs')
    
  };

  return (
    <section className="bg-indigo-50">
    <div className="container m-auto max-w-2xl py-24">
      <div 
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitJobForm}>
          <h2 className="text-3xl text-center font-semibold mb-6">Apply Job</h2>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Experience
            </label>
            <select
              id="experience"
              name="experience"
              className="border rounded w-full py-2 px-3"
              required
              value={experience}
              onChange={(e)=>setExperience(e.target.value)}
            >
              <option value="0-1 Years">0-1 Years</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
              >Name
              </label>
            
            <input
              type="text"
              id="candidateName"
              name="candidateName"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Beautiful Apartment In Miami"
              required
              value={candidateName}
              onChange={(e)=>setCandidateName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
              >About
              </label>
            
            <textarea
              id="about"
              name="about"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
              value={about}
              onChange={(e)=>setAbout(e.target.value)}
            ></textarea>
          </div>

          

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Company Location'
              required  
              value={location}
              onChange={(e)=>setLocation(e.target.value)}         
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              LinkedIn
            </label>
            <input
              type='text'
              id='linkedin'
              name='linkedin'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='linkedin url'
              required  
              value={linkedin}
              onChange={(e)=>setLinkedin(e.target.value)}         
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Github
            </label>
            <input
              type='text'
              id='github'
              name='github'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='github url'
              required  
              value={github}
              onChange={(e)=>setGithub(e.target.value)}         
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Resume
            </label>
            <input
              type='text'
              id='resume'
              name='resume'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='resume link'
              required  
              value={resume}
              onChange={(e)=>setResume(e.target.value)}         
            />
          </div>



          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
  )
}

export default ApplyJobPage