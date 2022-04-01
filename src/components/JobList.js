import Job from './Job';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const JobList = () => {
  const {jobs, filteringData, isFiltering} = useContext(GlobalContext)
  const usedData = isFiltering ? filteringData : jobs
 
  return (
    <div className='job-list'>
      {usedData.map(job => <Job job={job} key={job.id}/>)}
    </div>
  )
}

export default JobList;