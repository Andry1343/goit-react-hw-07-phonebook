import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = "https://63c1dd5de3abfa59bda5a97b.mockapi.io";
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {   
      return thunkAPI.rejectWithValue(e.message);
    }
});

console.log(fetchContacts())