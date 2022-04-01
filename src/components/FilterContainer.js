import iconClose from '../images/icon-remove.svg';

import '../styles/FilterContainer.css';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { nanoid } from 'nanoid';

const FilterContainer = () => {
  const { filters, clearFilter } = useContext(GlobalContext);
  return (
    <div className='filter-container'>
      <div className='all-filters'>
        {filters.map(filter => (
          <div className='each-filter' key={nanoid()}>
            <p>{filter}</p>
            <img src={iconClose} alt=""/>
          </div>
        ))}
      </div>
      <p onClick={() => clearFilter()}>Clear</p>
    </div>
  )
}

export default FilterContainer;