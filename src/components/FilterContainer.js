import iconClose from '../images/icon-remove.svg';

import '../styles/FilterContainer.css';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { nanoid } from 'nanoid';

const FilterContainer = () => {
  const { filters, clearFilter, removeFilter, getDataRemove } = useContext(GlobalContext);
  
  return (
    filters && filters.length>0 && <div className='filter-container'>
      <div className='all-filters'>
        {filters && filters.map((filter,index) => (
          <div className='each-filter' key={nanoid()}>
            <p>{filter}</p>
            <img src={iconClose} alt="" onClick={()=> {removeFilter(index); getDataRemove()}}/>
          </div>
        ))}
      </div>
      <p onClick={() => clearFilter()}>Clear</p>
    </div>
  )
}

export default FilterContainer;