import React, { useEffect, useState } from 'react';
import Aside from '../../components/UI/Aside/aside';
import MapComponent from '../../components/UI/MapComponent/MapComponent';
import axios from 'axios';
import { useTheme } from '../../hooks/useTheme';

const Map = () => {
    const { theme, setTheme } = useTheme();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://d09f16ae-8488-4203-8552-e1bba2e5e24c.mock.pstmn.io/employees')
            .then(response => {
                setEmployees(response.data.employees);
            })
            .catch(error => {
                console.error('Error fetching employees data:', error);
            });
    }, []);

    return (
        <div>
            <Aside />
            <MapComponent employees={employees} />
        </div>
    );
};

export default Map;
