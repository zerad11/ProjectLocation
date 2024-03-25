import './App.css';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import Auth from './pages/Auth/auth';
import Chat from './pages/Chat/chat';
import Employee from './pages/Employee/employee';
import Wifi from './pages/Settings/wifi';
import Map from './pages/Map/map';
import Theme from './pages/Settings/theme';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/map" element={<Map />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/settings/wifi" element={<Wifi />} />
        <Route path="/settings/theme" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
