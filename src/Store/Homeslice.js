import { createSlice } from '@reduxjs/toolkit'



export const Homeslice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
   getApiConfiguration:(state,actions)=>{
state.url=actions.payload
   },
   getGenres:(state,actions)=>{
    state.genres=actions.payload
   }
  },
})


export const {getApiConfiguration,getGenres} = Homeslice.actions

export default Homeslice.reducer