import React from 'react'
import axios from 'axios';

const getEmploeeys = async () => {
    try {
        const response = await axios.get('https://d09f16ae-8488-4203-8552-e1bba2e5e24c.mock.pstmn.io/employees');
        if (response.data && response.data.employees && Array.isArray(response.data.employees)) {
            console.log(response.data.employees);
            return response.data.employees;
        } else {
            console.error('Данные о сотрудниках не являются массивом');
            return [];
        }
    } catch (error) {
        console.error('Ошибка при получении списка сотрудников:', error);
        return [];
    }
};

export default getEmploeeys;
