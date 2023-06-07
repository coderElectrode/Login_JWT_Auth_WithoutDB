import { createSlice } from '@reduxjs/toolkit'



const initialState={
    balance:2490710,
    img:"https://as1.ftcdn.net/v2/jpg/01/18/19/14/1000_F_118191434_ftrCuoFaUZaFupDUnYK7er4Zjr9wtdnO.jpg",
    AccName:"Johan "
}

const tokenSlice=createSlice({
    name:'token', 
    initialState,
    reducers:{
       
    }

});
