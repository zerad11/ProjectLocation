import React from 'react';
import ToggleSwitch from '../../../components/UI/ToggleSwitch/ToggleSwitch';
import './themeComponent.css'
const ThemeComponent = ({ onToggleOff, onToggle, theme }) => {
    return (
        <div className='themeComponent'>
            <label>Темная тема</label>
            <ToggleSwitch onToggleOff={onToggleOff} onToggle={onToggle} theme={theme} />
        </div>
    );
};

export default ThemeComponent;