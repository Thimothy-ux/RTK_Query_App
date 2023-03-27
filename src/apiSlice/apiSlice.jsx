import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const appSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://api.themoviedb.org/' }),
    endpoints : (builder) => ({
        getJokes : builder.query({
            query : () => "3/movie/popular?api_key=8e94b63eca076cd76f6a4bc17d9b4bc8",
        }),

    }),
})


export const { useGetJokesQuery } = appSlice;