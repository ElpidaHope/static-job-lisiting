import iconClose from '../images/icon-remove.svg';

import '../styles/FilterContainer.css';

const FilterContainer = () => {
  return (
    <div className='filter-container'>
      <div className='all-filters'>
        <div className='each-filter'>
          <p>Frontend</p>
          <img src={iconClose} alt="" />
        </div>
        <div className='each-filter'>
          <p>CSS</p>
          <img src={iconClose} alt="" />
        </div>
        <div className='each-filter'>
          <p>JavaScript</p>
          <img src={iconClose} alt="" />
        </div>
      </div>
      <p>Clear</p>
    </div>
  )
}

export default FilterContainer;