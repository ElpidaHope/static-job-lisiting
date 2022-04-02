const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case 'ADD_FILTER':
      return {
        ...state,
        filters: [...state.filters, state.filters && state.filters.includes(action.payload) ? '' : action.payload].filter(filter => filter !== '')
      }
    case 'CLEAR_FILTER':
      return {
        ...state,
        filters: [],
        isFiltering: false
      }
    case 'GET_FILTERED_DATA':
      return {
        ...state,
        isFiltering: true,
        filteringData: [...state.companyData.filter(job => {
          const { role, level, languages, tools } = job
          const containedData = [role, level, languages, tools ].flat();
          const filtered = state.filters.every(filter => (
            containedData.includes(filter)
          ))
          return filtered && job
        })],
      }
    
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: state.filters.filter((filter,index) => index !== action.payload),
        isFiltering: true
      }

    case 'GET_DATA_REMOVE_FILTER':
      return {
        ...state,
        filteringData: [...state.companyData.filter(job => {
          const { role, level, languages, tools } = job
          const containedData = [role, level, languages, tools ].flat();
          const filtered = state.filters.every(filter => (
            containedData.includes(filter)
          ))
          return filtered && job
        })],
      }
  }
}

export default AppReducer;