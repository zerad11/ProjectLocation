import React from 'react';
import Aside from '../../components/UI/Aside/aside';
import { useTheme } from '../../hooks/useTheme';
const Chat = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Aside/>
        </div>
    );
};

export default Chat;