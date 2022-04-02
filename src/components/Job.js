import '../styles/Job.css';

import { nanoid } from 'nanoid';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Job = ({job}) => {
  const { addFilter, getFilteredData } = useContext(GlobalContext);
  const { logo, featured, company, position, postedAt, contract, location, role, level, tools, languages } = job
  
  const handleButtonClick = (e) => {
    addFilter(e.target.value)
    getFilteredData()
  } 

  return (
    <div className={`job ${featured ? `feature-border` : null}`}>
      <img src={logo} alt="" />
      <div className="details">
        <div className="company">
          <p className="company-name">{company}</p>
          {job.new ? <p className="new">New!</p> : null}
          {featured ? <p className="featured">Featured</p> : null}
        </div>
        <h4 className="role">{position}</h4>
        <div className="timing">
          <small className='posted-at'>{postedAt}</small>
          <span>.</span>
          <small className='type'>{contract}</small>
          <span>.</span>
          <small className="location">{location}</small>
        </div>
      </div>
      <div className="tools">
        <button 
          value={role}
          onClick={handleButtonClick}>{role}</button>
        <button 
          value={level}
          onClick={handleButtonClick}>{level}</button>
        {tools.map(tool => (<button key={nanoid()} value={tool} onClick={handleButtonClick}>{tool}</button>))}
        {languages.map(language => (<button key={nanoid()} value={language} onClick={handleButtonClick}>{language}</button>))}
      </div>
    </div>
  )
}

export default Job;