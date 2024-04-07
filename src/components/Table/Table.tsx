/* eslint-disable jsx-a11y/control-has-associated-label */
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
  const [rowNumber, setRowNumber] = useState(-1);

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

  const handleClick = (index: number) => {
    if (rowNumber === index) {
      setIsOpen(false);
      setRowNumber(-1);
      return;
    }
    setIsOpen(true);
    setRowNumber(index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th className="desktopDevice">Cargo</th>
          <th className="desktopDevice">Data de admissão</th>
          <th className="desktopDevice">Telefone</th>
          <th className="mobileDevice" />
        </tr>
      </thead>
      <tbody>
        {employees?.filter(({ name }) => removeAccentuation(name.toLowerCase().trim())
          .includes(removeAccentuation(nameEmployees.toLowerCase().trim())))
          .map((employee, index) => (
            <tr
              key={ employee.id }
              onClick={ () => handleClick(index) }
              data-height={ isOpen && index === rowNumber ? '180px' : '60px' }
            >
              <td>
                <div className="tdContent">
                  <span><img src={ employee.image } alt="employee" /></span>
                  <span>{employee.name}</span>
                  <span className="desktopDevice">{employee.job}</span>
                  <span className="desktopDevice">
                    {formatDate(employee.admission_date)}
                  </span>
                  <span className="desktopDevice">{formatPhone(employee.phone)}</span>
                  <span className="mobileDevice">
                    <img
                      src={ isOpen && index === rowNumber
                        ? '/up-arrow.png' : '/down-arrow.png' }
                      alt="navigate arrow"
                    />
                  </span>
                </div>
              </td>
              <td className="hiddenInfo mobileDevice">
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
