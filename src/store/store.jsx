import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../apiSlice/apiSlice';

export const store = configureStore( { 
    reducer : {
        [ appSlice.reducerPath ] : appSlice.reducer,
    },

    middleware : (getDefaultMiddleware) =>
    
        getDefaultMiddleware().concat(appSlice.middleware),
    
 } ) 