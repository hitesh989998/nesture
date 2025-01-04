import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const UserDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== 'authenticated') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default UserDashboard;
