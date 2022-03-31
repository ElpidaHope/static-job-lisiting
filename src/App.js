import FilterContainer from './components/FilterContainer';
import Job from './components/Job';
import JobList from './components/JobList';

import bgMobile from './images/bg-header-mobile.svg';
import bgDesktop from './images/bg-header-desktop.svg';

import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <img src={bgMobile} alt="" />
      </div>
      <div className="container">
        <div className="content">
          <FilterContainer />
          <div style={{height: '80px', width: '100%'}}></div>
          {/* <Job /> */}
          <JobList />
        </div>
      </div>
    </>
  );
}

export default App;
