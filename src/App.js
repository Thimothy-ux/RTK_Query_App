import logo from './logo.svg';
import './App.css';
import { useGetJokesQuery } from './apiSlice/apiSlice';

function App() {

  const { data = [] , isError , isFetching , isLoading , isSuccess , isUninitialized } = useGetJokesQuery();

  
  return (
    <div className="App">
       <h1>Movie Images</h1>
       {isError ? ( <>Oh no, there was an error</> ) : isLoading ? (
            <>Loading...</>
             ) : 
             data && 
        data?.results?.map( (movie , id) =>
        {
          
        
            return(
             <div key={id} >
               
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width = {300} height = {300} />
                <h2>{movie.original_title}</h2>
             </div>)
             

        } )
      }
      
    </div>
   
  );
}

export default App;
