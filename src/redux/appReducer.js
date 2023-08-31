import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const appSlice = createSlice({
  name: 'app', // Имя слайса
  initialState: initialState, // Начальное состояние редюсера слайса
  reducers: {
    // Объект редюсеров
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = appSlice.actions; // Генераторы экшенов
export const appReducer = appSlice.reducer; // Редюсер слайса
