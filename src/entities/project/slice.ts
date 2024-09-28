import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Project } from './types';
import { LOAD_COUNT, ORDER, QUERY, SORT, URL_API } from './constants';
import { Octokit } from 'octokit';

type ProjectSliceType = { items: Project[], loading: boolean, error: string | null }

const initialState: ProjectSliceType = {
    items: [],
    loading: false,
    error: null,
};

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_API_KEY
});

export const fetchItems = createAsyncThunk(
    'project/fetchItems',
    async (page: number) => {
        const response = await octokit.request(`GET ${URL_API}`, {
            q: QUERY,
            sort: SORT,
            order: ORDER,
            per_page: LOAD_COUNT,
            page: page
        });

        return response.data.items;
    }
);

const projectsSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                const previousState = { ...state };
                state.loading = false;
                state.items = [...new Set([... previousState.items, ...action.payload])];
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Oops';
            });
    },
});

export default projectsSlice.reducer;