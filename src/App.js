import FilterContainer from './components/FilterContainer';
import JobList from './components/JobList';

import bgMobile from './images/bg-header-mobile.svg';
import bgDesktop from './images/bg-header-desktop.svg';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="header">
        <img src={bgMobile} alt="" id='mobile'/>
        <img src={bgDesktop} alt="" id='desktop'/>
      </div>
      <div className="container">
        <div className="content">
          <FilterContainer />
          <div style={{height: '80px', width: '100%'}}></div>
          <JobList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
