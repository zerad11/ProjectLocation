import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css'; // Подключаем стили

const ToggleSwitch = ({ onToggle, onToggleOff, theme }) => {
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
        onToggle(); // Вызов функции, если переключатель включен
    } else {
        onToggleOff(); // Вызов функции, если переключатель выключен
    }
  };

  useEffect(() => {
    setIsChecked(theme === 'dark');
    console.log(theme)
  }, [theme]);

  return (
    <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
