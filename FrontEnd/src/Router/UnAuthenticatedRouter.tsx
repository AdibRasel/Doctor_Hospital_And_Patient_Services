
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Page/Login/Login';
import Registration from '../Page/Registration/Registration';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';


const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="*" element={<WrongRoute />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
  )
}

export default UnAuthenticatedRouter