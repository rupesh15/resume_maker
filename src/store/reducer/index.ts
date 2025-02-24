import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types';

const initialState: UserState = {
  email: '',
  name: '',
  phoneNumber: '',
  address: '',
  summary: '',
  skills: ''
};

const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setphoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setSummary: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setSkills: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    
    resetUser: (state) => {
      state.email = '';
      state.name = '';
      state.phoneNumber = '';
    },
  },
});

export const { setEmail, setName, setphoneNumber, resetUser, setAddress, setSummary, setSkills } = userSlice.actions;
export default userSlice.reducer;