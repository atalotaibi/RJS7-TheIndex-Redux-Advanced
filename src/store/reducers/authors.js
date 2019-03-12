import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        filteredAuthors: state.authors.concat(action.payload),
        loading: false
      };
    case actionTypes.FILTER_AUTHORS:
      let query = action.payload.toLowerCase();
      let filter = state.authors.filter(author => {
        return `${author.first_name} ${author.last_name}`
          .toLowerCase()
          .includes(query);
      });
      return {
        ...state,
        filteredAuthors: filter
      };
    default:
      return state;
  }
};

export default reducer;
