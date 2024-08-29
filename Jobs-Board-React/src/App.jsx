import { createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider,
        Route} 
from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage';
import JobPageSingle, {jobLoader} from './pages/JobPageSingle';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ApplyJobPage from './pages/ApplyJobPage'
import "./index.css"



const App = () => {
  // Add Job
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs', {
      method:'POST',
    headers:{
      'Content-Type':'application/json'
    },    
    body: JSON.stringify(newJob)
  })
  return;
  };
  
// Delete job
const deleteJob = async (id) =>{
  const res = await fetch(`/api/jobs/${id}`, {
    method:'DELETE',
  });
  console.log("deleted", id)
  return;
}

const updateJob = async (job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },    
    body: JSON.stringify(job)
  });
  return;
};

const applyJob = async (newApp) =>{
  const res = await fetch('/api/applications', {
    method:'POST',
  headers:{
    'Content-Type':'application/json'
  },    
  body: JSON.stringify(newApp)
})
return;
};


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPageSingle deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobsSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage  updateJobSubmit={updateJob}/>} loader={jobLoader}/>
        <Route path='/apply-job/:id' element={<ApplyJobPage  applyJobSubmit={applyJob}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
  
};

export default App