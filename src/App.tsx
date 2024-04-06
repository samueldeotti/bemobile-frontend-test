/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from 'react';

/* eslint-disable react/jsx-max-depth */
function App() {
  type EmployeeType = {
    id: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
  };

  const [filterEmployees, setFilterEmployees] = useState('');
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
    };
    getData();
  }, []);

  const formatPhone = (phone: string) => phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');

  const formatDate = (date: string) => new Date(date).toLocaleDateString('pt-br');

  const removeAccentuation = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return (
    <div id="content">
      <header
        style={ {
          backgroundColor: 'white',
          width: '100%',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.3)',
        } }
      >
        <h1
          style={ {
            marginLeft: '20px', height: '100%', display: 'flex', alignItems: 'center' } }
        >
          <img
            src="/beLogo.png"
            alt="logo bemobile"
            style={ { height: '35px', width: '44px' } }
          />
        </h1>
      </header>
      <main
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
          height: '100%',
          gap: '20px',
        } }
      >

        <div style={ { alignSelf: 'flex-start', width: '100%' } }>
          <h2>Funcionários</h2>
          <form
            action=""
            style={ { width: '100%' } }
          >
            <div
              style={ {
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '8px',
                // talvez mudar pra outline aqui
                outline: '1px solid #DFDFDF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between' } }
            >

              {/* AINDA FALTA FAZER A FUNCIONALIDADE DO ESTADO */}
              <input
                type="text"
                placeholder="Pesquisar"
                value={ filterEmployees }
                onChange={ (e) => setFilterEmployees(e.target.value) }
                style={ {
                  color: '#a3a3a3',
                  padding: '12px 16px',
                  border: '0 none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  width: '100%',
                } }
              />
              <button
                type="submit"
                style={ { padding: '12px 16px',
                  border: '0 none',
                  borderRadius: '0 8px 8px 0',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  cursor: 'pointer',
                  margin: 'auto',
                  display: 'flex',
                } }
              >
                <img src="/search.png" alt="search icon" />
              </button>

            </div>
          </form>
        </div>

        <table style={ { width: '100%' } }>
          <thead
            style={ { background: 'linear-gradient(180deg, #5A84C0 0%, #594ED2 100%)', height: '47px' } }
          >
            <tr>
              <th style={ { padding: '0 20px', borderRadius: '8px 8px 0 0' } }>
                <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '8px 8px 0 0' } }>
                  <td>Foto</td>
                  <td>Nome</td>
                  {/* Arrumar esse ponto com css */}
                  <td>o0o</td>
                </div>
              </th>
            </tr>
          </thead>
          <tbody style={ { backgroundColor: 'white' } }>
            {employees?.filter(({ name }) => removeAccentuation(name.toLowerCase().trim())
              .includes(removeAccentuation(filterEmployees.toLowerCase().trim())))
              .map((employee, index) => (
                <tr
                  key={ employee.id }
                  onClick={ () => {
                    setIsOpen(!isOpen);
                    setNumber(index);
                  } }
                >
                  <div style={ { height: isOpen && index === number ? '100px' : '30px', overflow: 'hidden', transition: 'height 0.5s ease', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px 0' } }>
                    <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', transition: 'all 0.5s ease' } }>
                      <img
                        src={ employee.image }
                        alt=""
                        style={ { height: '34px', width: '34px', borderRadius: '50%' } }
                      />
                      <td>{employee.name}</td>
                      <img src="/down-arrow.png" alt="" />
                    </div>
                    <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontSize: '12px' } }>
                      <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }>
                        <th>Cargo</th>
                        <th>Data de Admissão</th>
                        <th>Telefone</th>
                      </div>
                      <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } }>
                        <td>{employee.job}</td>
                        <td>{formatDate(employee.admission_date)}</td>
                        <td>{formatPhone(employee.phone)}</td>
                      </div>
                    </div>

                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
