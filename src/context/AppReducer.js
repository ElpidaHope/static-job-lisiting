const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case 'ADD_FILTER':
      return {
        ...state,
        filters: [...state.filters, state.filters.includes(action.payload) ? '' : action.payload]
      }
    case 'CLEAR_FILTER':
      return {
        ...state,
        filters: [],
        isFiltering: false
      }
    case 'GET_FILTERED_DATA':
      // const getId = state.companyData.filter(job => {
      //   const { role, level, languages, tools } = job
      //   const containedData = [role, level, languages, tools ].flat();
      //   const filtered = action.payload[0].every(filter => (
      //     containedData.includes(filter)
      //   ))
      //   return filtered && job.id
      // })
      // console.log(getId)
      return {
        ...state,
        isFiltering: true,
        filteringData: [...state.companyData.filter(job => {
          const { role, level, languages, tools } = job
          const containedData = [role, level, languages, tools ].flat();
          const filtered = action.payload.every(filter => (
            containedData.includes(filter)
          ))
          return filtered && job
        })]
      }
  }
}

export default AppReducer;