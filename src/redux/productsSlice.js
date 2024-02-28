import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllProductsData = createAsyncThunk(
	'products/fetchAllProductsData',
	async (lang, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(
				`https://daypatron.adaptable.app/products/${lang}`
			)
			return data
		} catch (error) {
			// Handle the error and return it with rejectWithValue
			return rejectWithValue(error.response.data) // Assuming the error response contains error details
		}
	}
)

export const fetchProduct = createAsyncThunk(
	'products/fetchProduct',
	async ({ id, lang }, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(
				`https://daypatron.adaptable.app/products/${lang}/${id}`
			)
			// Extract product data and metadata from the response
			const { productInSelectedLanguage, metaData } = data

			// Return an object containing both product data and metadata
			return { product: productInSelectedLanguage, metaData }
		} catch (error) {
			// Handle the error and return it with rejectWithValue
			return rejectWithValue(error.response.data) // Assuming the error response contains error details
		}
	}
)

const initialState = {
	allProductsData: null,
	productData: null,
	allProductsStatus: 'isLoading',
	productStatus: 'isLoading',
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		allProductsDataReceived: (state, action) => {
			state.allProductsData = action.payload
			state.allProductsStatus = 'isSuccess'
		},
		productDataReceived: (state, action) => {
			state.productData = action.payload
			state.productStatus = 'isSuccess'
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllProductsData.pending, state => {
				state.allProductsStatus = 'isLoading'
				state.allProductsData = null
			})
			.addCase(fetchAllProductsData.fulfilled, (state, action) => {
				state.allProductsStatus = 'isSuccess'
				state.allProductsData = action.payload
			})
			.addCase(fetchAllProductsData.rejected, state => {
				state.allProductsStatus = 'isError'
				state.allProductsData = null
			})
			.addCase(fetchProduct.pending, state => {
				state.productStatus = 'isLoading'
				state.productData = null
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.productStatus = 'isSuccess'
				state.productData = action.payload
			})
			.addCase(fetchProduct.rejected, state => {
				state.productStatus = 'isError'
				state.productData = null
			})
	},
})

export const allProductsStatus = state =>
	state.products.allProductsStatus === 'isLoading'
export const productStatus = state =>
	state.products.productStatus === 'isLoading'

export const allProductsDataSelector = state => state.products.allProductsData
export const productDataSelector = state => state.products.productData
export const productsReducer = productsSlice.reducer
