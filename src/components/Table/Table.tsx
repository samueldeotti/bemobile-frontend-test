/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import './Table.css';

export default function Table({ nameEmployees } : { nameEmployees: string }) {
  type EmployeeType = {
    id: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
  };

  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(-1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
    };
    getData();
    setIsOpen(false);
  }, [nameEmployees]);

  const formatPhone = (phone: string) => phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');

  const formatDate = (date: string) => new Date(date).toLocaleDateString('pt-br');

  const removeAccentuation = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>o0o</th>
        </tr>
      </thead>
      <tbody>
        {employees?.filter(({ name }) => removeAccentuation(name.toLowerCase().trim())
          .includes(removeAccentuation(nameEmployees.toLowerCase().trim())))
          .map((employee, index) => (
            <tr
              key={ employee.id }
              onClick={ () => {
                if (number === index) {
                  setNumber(-1);
                  return;
                }
                setIsOpen(true);
                setNumber(index);
              } }
              data-height={ isOpen && index === number ? '180px' : '60px' }
            >

              <td>
                <div className="tdContent">
                  <p><img src={ employee.image } alt="employee" /></p>
                  <p>{employee.name}</p>
                  <p><img src="/down-arrow.png" alt="navigate arrow" /></p>
                </div>
              </td>
              <td className="hiddenInfo">
                <div>
                  <span>Cargo</span>
                  <span>Data de Admissão</span>
                  <span>Telefone</span>
                </div>
                <div>
                  <span>{employee.job}</span>
                  <span>{formatDate(employee.admission_date)}</span>
                  <span>{formatPhone(employee.phone)}</span>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>

  );
}
