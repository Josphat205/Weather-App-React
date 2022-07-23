import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  data: [],
  error: ''
}

export const fetchData = createAsyncThunk('weather/fetchdata', async (name) =>{
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2b8d45bf5ca3d049436efc0b184b38fd`;
  const response = await fetch(API);
  const data = response.json();
  return data;
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers:{
    [fetchData.pending]:(state)=>{
      state.loading = true;
    },
    [fetchData.fulfilled]:(state, {payload})=>{
      state.loading = false;
      state.data = payload;
      state.error = "";
    },
    [fetchData.rejected]:(state)=>{
      state.loading = false;
      state.data = [];
      state.error = "error occured";
    },
  }
})

export default weatherSlice.reducer