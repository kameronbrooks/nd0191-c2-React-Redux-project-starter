import { Link, useLocation } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className='navlinks-div'>
        <Link to='/' className={currentPath === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to='/leaderboard' className={currentPath === '/leaderboard' ? 'active' : ''}>
          Leaderboard
        </Link>
        <Link to='/questions/new' className={currentPath === '/questions/new' ? 'active' : ''}>
          New
        </Link>
      </div>

      <UserAvatar />
    </nav>
  );
};

export default Navbar;