import React from 'react';
import Button from '../../components/UI/Button/Button';
import Aside from '../../components/UI/Aside/aside';
import ToggleSwitch from '../../components/UI/ToggleSwitch/ToggleSwitch';
import { useTheme } from '../../hooks/useTheme';
import { Link } from 'react-router-dom';
import "./settings.css"
const Wifi = () => {
  const { theme, setTheme } = useTheme()
  const [activeLink, setActiveLink] = React.useState(null);

  React.useEffect(() => {
    setActiveLink(`${(window.location.pathname).substring((window.location.pathname).lastIndexOf('/')+1)}`);
  })
 
  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

    return (
        <div className="test">
            <Aside floor={false}/>
            <div className='settings-Nav'>
              <Link to='/settings/wifi' className={`nav-button  ${activeLink === 'wifi' ? 'active' : ''}`} onClick={() => setActiveLink('wifi')}>Wifi точки</Link>
              <Link to='/settings/theme' className={`nav-button  ${activeLink === 'theme' ? 'active' : ''}`} onClick={() => setActiveLink('theme')}>оформление</Link>
            </div>
            <div className='settingsContent'>
              <ToggleSwitch onToggleOff={handleLightThemeClick} onToggle={handleDarkThemeClick} theme={theme}></ToggleSwitch>
            </div>

        </div>
    );
};


export default Wifi;

