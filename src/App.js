import './App.css';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import Auth from './pages/auth';
import Chat from './pages/chat';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
