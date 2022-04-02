import React, { createContext, useReducer } from "react";
import { companyData } from '../data';

import AppReducer from "./AppReducer";

const initialState = {
  companyData: companyData,
  filters: [],
  isFiltering: false,
  filteringData: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const addFilter = (value) => {
    dispatch({
      type: 'ADD_FILTER',
      payload: value
    })
  }

  const clearFilter = () => {
    dispatch({
      type: 'CLEAR_FILTER'
    })
  }

  const getFilteredData = () => {
    dispatch({
      type: 'GET_FILTERED_DATA',
    })
  }

  const removeFilter = (id) => {
    dispatch({
      type: 'REMOVE_FILTER',
      payload: id
    })
  }

  const getDataRemove = () => {
    dispatch({
      type: 'GET_DATA_REMOVE_FILTER'
    })
  }

  
  return (
    <GlobalContext.Provider value={
      {
        jobs: state.companyData,
        filteringData: state.filteringData,
        isFiltering : state.isFiltering,
        filters: state.filters,
        addFilter,
        clearFilter,
        getFilteredData,
        removeFilter,
        getDataRemove
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

