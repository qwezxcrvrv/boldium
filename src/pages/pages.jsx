import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from '../components/nav/nav';
import Home from './home/home';
import Footer from '../components/footer/footer';

const Pages = () => {

    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/home" element={<Home />} />   
                <Route path="*" element={<Navigate to="/home" replace />}
                />          
            </Routes>
            <Footer /> 
        </>        
    )
}

export default Pages;