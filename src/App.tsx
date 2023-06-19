import { useState } from 'react';
import useSWR from 'swr'
import { ListOptions } from './components';

const ENDPOINT_BASE: string = 'https://the-one-api.dev/v2/';

function App() {
  const [page, setPage] = useState<Record<string, number>>({
    moviesPage: 1,
    charactersPage: 1,
    quotesPages: 1,
  });

  const fetchOptions = {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    refreshInterval: 0,
  }
  const { data: movies, error: moviesError, isLoading: moviesLoading } = useSWR(`${ENDPOINT_BASE}movie?page=${page.moviesPage}`, null, fetchOptions);
  const { data: characters, error: charactersError, isLoading: charactersLoading } = useSWR(`${ENDPOINT_BASE}character?page=${page.charactersPage}`, null, fetchOptions);
  const { data: quotes, error: quotesError, isLoading: quotesLoading } = useSWR(`${ENDPOINT_BASE}quote?page=${page.quotesPages}`, null, fetchOptions);

  const handleNext = (name: string) => {
    setPage((prevPage) => ({ ...prevPage, [name]: prevPage[name] + 1 }));
  };

  const handlePreviousPage = (name: string) => {
    setPage((prevPage) => ({ ...prevPage, [name]: Math.max(prevPage[name] - 1, 1) }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center text-blue-500 lg:text-4xl">
        Frontend Application using Lord of the Rings API
      </h1>
      <ListOptions
        data={movies?.docs}
        title='Movies'
        loading={moviesLoading}
        error={moviesError}
        handleNext={() => handleNext('moviesPage')}
        handlePrev={() => handlePreviousPage('moviesPage')}
      />
      <ListOptions
        title='Characters'
        data={characters?.docs}
        error={charactersError}
        loading={charactersLoading}
        handleNext={() => handleNext('charactersPage')}
        handlePrev={() => handlePreviousPage('charactersPage')}
      />
      <ListOptions title='Quotes'
        data={quotes?.docs}
        error={quotesError}
        loading={quotesLoading}
        handleNext={() => handleNext('quotesPages')}
        handlePrev={() => handlePreviousPage('quotesPages')}
      />
    </div>
  );
}

export default App;
