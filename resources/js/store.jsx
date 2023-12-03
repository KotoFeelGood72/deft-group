import {configureStore} from '@reduxjs/toolkit'
import searchBarReducer from './reduxSlice/searchBarSlice/searchBarSlice.jsx'
import filterDataReducer from './reduxSlice/filterDataSlice/filterDataSlice.jsx';

export const store = configureStore({
    reducer: {
        filterData: filterDataReducer,
        searchBar: searchBarReducer,
    },
});
