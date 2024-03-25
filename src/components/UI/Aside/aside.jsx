import React from 'react';
import axios from 'axios';
import "./aside.css";
import Button from '../Button/Button';
import Floor from '../Floor/floor';
import getEmploeeys from './getEmploeeys';
import { Link } from 'react-router-dom';

const Aside = ({ floor = true }) => {
    const [employees, setEmployees] = React.useState([]);
    const [activeLink, setActiveLink] = React.useState(null);

    React.useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmploeeys();
            data.sort((a, b) => (a.status === b.status) ? 0 : a.status ? -1 : 1);
            setEmployees(data);
        };

        fetchEmployees();
        
        setActiveLink(`${(window.location.pathname).split('/').length > 1 ? (window.location.pathname).split('/')[1]: ''}`);
        console.log((window.location.pathname).split('/').length > 1 ? (window.location.pathname).split('/')[1]: '')
    }, []);

    return (
        <aside>
            <Link to={"/map"} className={`nav-link ${activeLink === 'map' ? 'active' : ''}`} onClick={() => setActiveLink('map')}>Карта</Link>
            <Link to={"/settings/wifi"} className={`nav-link ${activeLink === 'settings' ? 'active' : ''}`} onClick={() => setActiveLink('settings')}>Опции</Link>
            <hr></hr>
            <p>Сотрудники</p>
            <ul className="employee-list">
                {employees.map(employee => (
                    <li key={employee.id} className={employee.status ? 'green-marker' : 'red-marker'}>
                        <Link to={`/employee/${employee.id}`} >{employee.name}</Link>
                    </li>
                ))}
            </ul>
            {floor && <div className='floor'><Floor /></div>}
            <Button className={'exitButton'} text='Выход'/>
        </aside>
    );
};

export default Aside;
