import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { UserArea } from '../pages/UserArea';
import { UserChalenges } from '../pages/UserChalenges';
import { UserForum } from '../pages/UserForum';
import { UserExpert } from '../pages/UserExpert';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userArea" element={<UserArea/>}/>
      <Route path="/userChalenges" element={<UserChalenges/>}/>
      <Route path="/userForum" element={<UserForum/>}/>
      <Route path="/userExpert" element={<UserExpert/>}/>
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Switch>
  );
};