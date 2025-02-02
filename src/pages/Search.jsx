/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

import { useTitle } from '../hooks/useTitle';


export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("query")
    const {data : movies} = useFetch(apiPath, queryTerm)

    useTitle(`Result for ${queryTerm}`);
    
  return (
    <main>
      <section className='pb-3 pt-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for "${queryTerm}"` : `Result for "${queryTerm}"`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>  
            ))}
        </div>
      </section>
    </main>
  );
};
