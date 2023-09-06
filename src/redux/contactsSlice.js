import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, action) => {
      const index = state.contacts.items.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
  },
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
