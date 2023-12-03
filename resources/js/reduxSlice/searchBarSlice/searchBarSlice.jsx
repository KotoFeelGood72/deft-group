import { createSlice } from "@reduxjs/toolkit";
import searchBarItem from "@/ExampleData/searchBarItem";

const initialState = {
    ...searchBarItem,
    infrastructureChecked: {},
    priceFrom: '',
    priceTo: '',
    id: '',
    isOpened: false
}

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        clearSearchBar: (state, {payload}) => {
            return state = {
                ...initialState,
                isOpened: payload
            };
        },
        //сохраняем состояние при изменении компонента DropdownSearchBar, цены, id, инфраструктуры
        editDropdown: (state, {payload}) => {

            for (var key in state) {
                if (state[key].id === payload.id) {
                    state[key].activeValue = payload.value;
                }
            }
        },
        editIdAndPrice: (state, {payload}) => {
            state[payload.name] = payload.value;
        },
        editCheckboxes: (state, {payload}) => {
            if (payload in state.infrastructureChecked) {
                state.infrastructureChecked[payload].isChecked = !state.infrastructureChecked[payload].isChecked;
            } else {
                state.infrastructureChecked[payload] = {
                    name: payload,
                    isChecked: true
                }
            }

        },
        //расширенные параметры (state для компонента collapse)
        isOpenOptions: (state, action) => {
            state.isOpened = !state.isOpened;
        }
    }
});

export const { clearSearchBar, editDropdown, editIdAndPrice, editCheckboxes, isOpenOptions } = searchBarSlice.actions;
export default searchBarSlice.reducer;
