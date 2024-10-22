import { useNavigate } from 'react-router-dom';

const logout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    
    // Reload the page to update the authentication status
    window.location.reload();
};

export default logout;
