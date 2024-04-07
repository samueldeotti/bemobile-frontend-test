/* eslint-disable jsx-a11y/control-has-associated-label */
import { ChangeEvent, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Table from './components/Table/Table';

/* eslint-disable react/jsx-max-depth */
function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameEmployees(e.target.value);
  };

  const [nameEmployees, setNameEmployees] = useState('');

  return (
    <div id="content">
      <Header />
      <main>
        <SearchForm
          handleChange={ handleChange }
          nameEmployees={ nameEmployees }
        />

        <Table nameEmployees={ nameEmployees } />
      </main>
    </div>
  );
}

export default App;
