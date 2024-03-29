import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: undefined,
  customerList: undefined,
  searchText: '',
  customerName: 'Chọn khách hàng đặt đơn',
  idCustomer: '',
  selectedItem: {
    customerName: 'Chọn khách hàng đặt đơn',
  },
  customerMobile: '',
};

const customerList = createSlice({
  name: 'customerList',
  initialState: initialState,
  reducers: {
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    getAllCustomersLoading: (state, action) => {
      state.isLoading = true;
    },
    getAllCustomersSuccess: (state, action) => {
      state.isLoading = false;
      state.customerList = action.payload;
    },
    getAllCustomersFaild: (state, action) => {
      state.isLoading = false;
    },
    setSelectedItem: (state, action) => {
      const {idCustomer, customerName, customerMobile} = action.payload;
      state.customerName = customerName;
      state.idCustomer = idCustomer;
      state.customerMobile = customerMobile;
      state.customerName = action.payload.customerName;
    },
    setIsMounted: (state, action) => {
      state.isMounted = action.payload;
    },
    resetCustomerList: (state, action) => {},
  },
});

const {reducer, actions} = customerList;
export const {
  customerListAction,
  changeSearchText,
  getAllCustomersLoading,
  getAllCustomersSuccess,
  getAllCustomersFaild,
  setSelectedItem,
  resetCustomerList,
} = actions;

const customerListReducerWrapper = (state, action) => {
  const {type} = action;
  if (
    type === 'getAllCustomers/pending' ||
    type === 'customerList/resetCustomerList'
  ) {
    state = undefined;
  }
  return reducer(state, action);
};

export default customerListReducerWrapper;
