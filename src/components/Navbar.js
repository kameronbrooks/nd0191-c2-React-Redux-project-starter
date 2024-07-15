import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navlinks-div'>
        <Link to='/'>Home</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
        <Link to='/questions/new'>New</Link>
      </div>

      <UserAvatar />
    </nav>
  );
};

export default Navbar;