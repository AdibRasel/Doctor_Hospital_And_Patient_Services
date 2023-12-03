import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home/Home';
import WrongRoute from '../Helper/WrongRoute/WrongRoute';


const AuthenticationRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<WrongRoute />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter