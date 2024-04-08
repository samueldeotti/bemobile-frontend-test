import { useState } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Table from './components/Table/Table';

function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilterEmployee(e.target.value);
  };

  const [textFilterEmployee, setTextFilterEmployee] = useState('');

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleChange={ handleChange }
          textFilterEmployee={ textFilterEmployee }
        />
        <Table textFilterEmployee={ textFilterEmployee } />
      </main>
    </>
  );
}

export default App;
