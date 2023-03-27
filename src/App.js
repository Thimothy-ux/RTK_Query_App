import logo from './logo.svg';
import './App.css';
import { useGetJokesQuery } from './apiSlice/apiSlice';

function App() {

  const { data , isError , isFetching , isLoading , isSuccess , isUninitialized } = useGetJokesQuery();

  console.log(data?.results[0]);
  return (
    <div className="App">
      { !isLoading && 
        data?.results.map( (movie) =>
        {
        
          <div>
            <h1>Movie Images</h1>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width = {200} height = {300} />
            <h2>{movie.original_title}</h2>
          </div>
          

        } )
      }
      
    </div>
   
  );
}

export default App;
