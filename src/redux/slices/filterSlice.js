import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности(возрастанию)',
    sortProperty: 'rating',
    order: 'asc',
  },
  searchValue: '',
  totalPages: 1,
  limitPage: 4,
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload
    },
  },
})

export const {
  setCategoryId,
  setSort,
  setSearchValue,
  setCurrentPage,
  setTotalPages,
} = filterSlice.actions

export default filterSlice.reducer
