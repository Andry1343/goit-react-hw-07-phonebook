/* import storage from 'redux-persist/lib/storage'; */
/* import { persistReducer } from 'redux-persist'; */
/* import { filterReducer } from './filterSlice'; */
import { createSlice/* , combineReducers */ } from '@reduxjs/toolkit';
/* import { nanoid } from 'nanoid'; */

import {fetchContacts} from '../redux/operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const tasksReducer = contactsSlice.reducer;
