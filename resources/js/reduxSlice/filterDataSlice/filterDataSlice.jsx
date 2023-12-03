import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const filterDataSlice = createSlice({
    name: 'filterData',
    initialState,
    reducers: {
        searchItems: ((state, {payload}) => {

            const {type, district, layout, distance, area, advantages, yearBuild, infrastructureChecked, priceFrom, priceTo, id} = payload;
            const infrastructureData = []
            try {
                for (var key in infrastructureChecked) {
                    if (infrastructureChecked[key].isChecked) {
                        infrastructureData.push(infrastructureChecked[key].name)
                    }
                }
            } catch (error) {
                console.log(error)
            }

            const filterData = {
                [type.title]: type.activeValue,
                [district.title]: district.activeValue,
                [layout.title]: layout.activeValue,
                [distance.title]: distance.activeValue,
                [area.title]: area.activeValue,
                [advantages.title]: advantages.activeValue,
                [yearBuild.title]: yearBuild.activeValue,
                priceFrom: priceFrom,
                priceTo: priceTo,
                id: id,
                infrastructure: infrastructureData,
            };
            return state = {...filterData};
        })
    }
});

export const {searchItems} = filterDataSlice.actions;
export default filterDataSlice.reducer;
