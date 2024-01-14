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
      <Route path="engfc/home" element={<Home />} />
      <Route path="engfc/login" element={<Login />} />
      <Route path="engfc/userArea" element={<UserArea/>}/>
      <Route path="engfc/userChalenges" element={<UserChalenges/>}/>
      <Route path="engfc/userForum" element={<UserForum/>}/>
      <Route path="engfc/userExpert" element={<UserExpert/>}/>
      <Route path="*" element={<Navigate replace to="engfc/home" />} />
    </Switch>
  );
};
