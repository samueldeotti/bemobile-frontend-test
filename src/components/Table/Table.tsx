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
  }, []);

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
              data-height={ isOpen && index === number ? '120px' : '30px' }
            >

              <td>
                <span><img src={ employee.image } alt="employee" /></span>
                <span>{employee.name}</span>
                <span><img src="/down-arrow.png" alt="" /></span>
              </td>

              <th>
                <span>Cargo</span>
                <span>Data de Admissão</span>
                <span>Telefone</span>
              </th>
              <td className="hiddenInfo">
                <span>{employee.job}</span>
                <span>{formatDate(employee.admission_date)}</span>
                <span>{formatPhone(employee.phone)}</span>
              </td>

            </tr>
          ))}
      </tbody>
    </table>

  );
}
