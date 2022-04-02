import iconClose from '../images/icon-remove.svg';

import '../styles/FilterContainer.css';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { nanoid } from 'nanoid';

const FilterContainer = () => {
  const { filters, clearFilter, removeFilter, getDataRemove } = useContext(GlobalContext);
  const handleRemoveFilter = (index) => {
    removeFilter(index);
    getDataRemove()
  }
  
  return (
    filters.length>0 && <div className='filter-container'>
      <div className='all-filters'>
        {filters.map((filter,index) => (
          <div className='each-filter' key={nanoid()}>
            <p>{filter}</p>
            <img src={iconClose} alt="" onClick={handleRemoveFilter(index)}/>
          </div>
        ))}
      </div>
      <p onClick={() => clearFilter()}>Clear</p>
    </div>
  )
}

export default FilterContainer;