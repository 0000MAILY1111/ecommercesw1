import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../photos/pages/LoginPage';
import { HomeRouter } from './HomeRouter';
import { HomePage } from '../photos/pages/HomePage';
import { RegistroPage } from '../photos/pages/RegistroPage';
import { UserPage } from '../photos/pages/UserPage';


export const AppRouter = () => {
  return (
   <>
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<HomeRouter />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="registro" element={<RegistroPage />} />


    </Routes>
   
   
   </>
  );
};
