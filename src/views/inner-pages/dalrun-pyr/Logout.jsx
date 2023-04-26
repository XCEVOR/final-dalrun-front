import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const history = useNavigate();

  const handleLogout = () => {
    axios.post('/logout')
      .then(() => {
        localStorage.removeItem('login');
        history.push('/login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <button onClick={handleLogout}>로그아웃</button>
  );
};

export default Logout;