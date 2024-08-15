import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    
    'products/fetchProduct',
    
    // rejectedWithValue в Redux Toolkit используется для обработки сбоев сетевых запросов или других ошибок
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch('https://fakestoreapi.com/products');

            if(!response.ok){
                throw new Error('Server error')
            }
    
            const data = await response.json()
    
            return data

        }catch(error){
           return rejectWithValue(error.message)
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export default productSlice.reducer