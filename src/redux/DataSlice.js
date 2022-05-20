import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  currPage : 1
};



export const fetchusers = createAsyncThunk("user/fetchusers", (page) => {
  return axios
    .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
    .then((res) => res.data)
    .catch((err) => console.log("No data"));
});

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    prevPage: (state, action) => {
        if(state.currPage == 1){
            state.currPage = 1;
        }else{
            state.currPage--;
        }
    },
    firstPage: (state, action) => {
      state.currPage = 1;
    },
    secondPage: (state , action) => {
      state.currPage = 2;
    },
    thirdPage: (state , action) => {
      state.currPage = 3;
    },
    fourthPage: (state , action) => {
      state.currPage = 4;
    },
    fifthPage: (state , action) => {
      state.currPage = 5;
    },
    lastPage: (state, action) => {
      state.currPage++;
    },
  },


  extraReducers: (builder) => {
    builder.addCase(fetchusers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchusers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchusers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
    });
  },
});

export default dataSlice.reducer;
export const {prevPage,firstPage,secondPage,thirdPage,fourthPage,fifthPage,lastPage} = dataSlice.actions
