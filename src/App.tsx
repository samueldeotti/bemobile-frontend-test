/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Table from './components/Table/Table';

/* eslint-disable react/jsx-max-depth */
function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameEmployees(e.target.value);
  };

  const [nameEmployees, setNameEmployees] = useState('');

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleChange={ handleChange }
          nameEmployees={ nameEmployees }
        />
        <Table nameEmployees={ nameEmployees } />
      </main>
    </>
  );
}

export default App;
