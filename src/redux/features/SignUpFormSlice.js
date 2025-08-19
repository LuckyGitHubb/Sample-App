import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[]
}

const SignUpFormSlice = createSlice({
    name:'signUp',
    initialState,
    reducers:{
        signUpData:(state,action)=>{
            state.data.push(action.payload)
        }
    }
})

export const { signUpData } = SignUpFormSlice.actions;
export default SignUpFormSlice;
