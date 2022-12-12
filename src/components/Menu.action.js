import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const endPoint = 'Menu'

export const fetchMenu = createAsyncThunk('Menu/fetchMenu', async () => {
    const response = await axios.get('http://localhost:4000/menu/');
    return response.data
})



