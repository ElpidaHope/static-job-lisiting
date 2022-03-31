import '../styles/Job.css';

import { nanoid } from 'nanoid';

const Job = ({job}) => {
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
        <button>{job.role}</button>
        <button>{job.level}</button>
        {job.tools.map(tool => (<button key={nanoid()}>{tool}</button>))}
        {job.languages.map(language => (<button key={nanoid()}>{language}</button>))}
      </div>
    </div>
  )
}

export default Job