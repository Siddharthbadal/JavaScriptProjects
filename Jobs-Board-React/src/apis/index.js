
import jobs from './jobs.json' assert { type: 'json' };
import applications from './applications.json' assert { type: 'json' };


export default () => ({
  jobs: jobs,
  applications: applications
  
});