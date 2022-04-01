import '../styles/Job.css';

import { nanoid } from 'nanoid';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Job = ({job}) => {
  const { addFilter, filters, getFilteredData } = useContext(GlobalContext);

  // const { role, level, languages, tools } = job
  // const containedData = [role, level, languages, tools ].flat();
  // console.log(containedData)
  
  const handleButtonClick = (e) => {
    addFilter(e.target.value)
    getFilteredData()
  }

  

  return (
    <div className={`job ${job.featured ? `feature-border` : null}`}>
      <img src={job.logo} alt="" />
      <div className="details">
        <div className="company">
          <p className="company-name">{job.company}</p>
          {job.new ? <p className="new">New!</p> : null}
          {job.featured ? <p className="featured">Featured</p> : null}
        </div>
        <h4 className="role">{job.position}</h4>
        <div className="timing">
          <small className='posted-at'>{job.postedAt}</small>
          <span>.</span>
          <small className='type'>{job.contract}</small>
          <span>.</span>
          <small className="location">{job.location}</small>
        </div>
      </div>
      <div className="tools">
        <button 
          value={job.role}
          onClick={handleButtonClick}>{job.role}</button>
        <button 
          value={job.level}
          onClick={handleButtonClick}>{job.level}</button>
        {job.tools.map(tool => (<button key={nanoid()} value={tool} onClick={handleButtonClick}>{tool}</button>))}
        {job.languages.map(language => (<button key={nanoid()} value={language} onClick={handleButtonClick}>{language}</button>))}

        <button onClick={() => getFilteredData()}>test</button>
      </div>
    </div>
  )
}

export default Job