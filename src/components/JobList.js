import Job from './Job';
import { companyData } from '../data';
const JobList = () => {

 
  return (
    <div className='job-list'>
      {companyData.map(job => <Job job={job} key={job.id}/>)}
    </div>
  )
}

export default JobList