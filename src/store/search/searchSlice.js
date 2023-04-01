import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		search: '',
	},
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload.toLowerCase();
		},
	},
});

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.search;

export default searchSlice.reducer;
