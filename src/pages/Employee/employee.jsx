import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../../hooks/useTheme';
import Aside from '../../components/UI/Aside/aside';
import MapComponent from '../../components/UI/MapComponent/MapComponent';
import './employee.css';
import Button from '../../components/UI/Button/Button';
import Floor from '../../components/UI/Floor/floor';
import Modal from '../../modal/modal';
import ModalContent from '../../modal/ModalContent';

const Employee = () => {
    const { theme, setTheme } = useTheme();
    const [employeeData, setEmployeeData] = useState(null);
    const [isModalActive, setIsModalActive] = useState(false);
    

    
    useEffect(() => {
        axios.get('https://d09f16ae-8488-4203-8552-e1bba2e5e24c.mock.pstmn.io/employee/8')
            .then(response => {
                setEmployeeData(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    return (
        <div>
            <Aside floor={false}/>
            <div className='content'>
                {employeeData && (
                    <>
                    <div className='Profile'>
                        <p>Профиль</p>
                        <p>Имя: {employeeData.name}</p>
                        <p>Возраст: {employeeData.age}</p>
                        <p>Город: {employeeData.city}</p>
                        <p>Адрес: {employeeData.address}</p>
                        <p>ID: {employeeData.id}</p>
                        <Button className="btn" text={'Статистика'} onClick={() => setIsModalActive(true)} />
                        <Button className="btn" text={'Написать'} />
                        <div className='floorPosition'><Floor /></div>
                    </div>
                    <div className='history'>
                        <p>История перемещений</p>
                        <p>Дата<input className='calendar' type='datetime-local'></input></p> 
                        <p>Время прихода: {employeeData.time[0].entry_time} Время ухода: {employeeData.time[0].leaving_time}</p>
                        <input className='selectTime' type='range'></input>
                        
                        <MapComponent scale={0.5} x={employeeData?.coordinates[0].x} y={employeeData?.coordinates[0].y} radius={employeeData?.coordinates[0].radius} />
                    </div>
                    </>
                )}
            </div>
            <Modal active={isModalActive} setActive={setIsModalActive}>
                <ModalContent></ModalContent>
            </Modal>
        </div>
    );
};

export default Employee;
