import {useState, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {handleLogoutUser} from '../actions/loginActions';

const UserAvatar = () => {
  const user = useSelector(state => state.login.user);

  const dispatch = useDispatch();
  
  return (
    <div className='avatar-box' style={{backgroundImage : `url(${user.avatarURL})`}}>
      <a className="logout-link" onClick={()=>handleLogoutUser(dispatch)}>Logout</a>
      
    </div>
  );
};

export default UserAvatar;