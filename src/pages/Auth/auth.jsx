import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { useTheme } from '../../hooks/useTheme';
import './auth.css';
import { redirect } from 'react-router-dom';

const Auth = () => {
    const { theme, setTheme } = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://d09f16ae-8488-4203-8552-e1bba2e5e24c.mock.pstmn.io/auth', { username, password });
            
            if (response.status === 200) {
                localStorage.setItem('jwtToken', response.data.token);
                console.log('Успешная аутентификация');
                window.location.href = 'http://localhost:3000/map';
            } else {
                console.log('Ошибка аутентификации');
            }
        } catch (error) {
            console.error('Ошибка аутентификации:', error);
        }
    };
    


    return (
        <div className='desktopBg'>
            <p>Авторизация</p>
            <div className='desktopActive'>
                <Input placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button className={"login"} text={'Вход'} onClick={handleLogin} />
            </div>
        </div>
    );
};

export default Auth;
