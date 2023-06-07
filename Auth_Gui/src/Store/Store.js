import { configureStore } from "@reduxjs/toolkit";
import bankTransaction from './BankSlice'

const store=configureStore({
    reducer:{
       transaction: bankTransaction
    },
});

export default  store;