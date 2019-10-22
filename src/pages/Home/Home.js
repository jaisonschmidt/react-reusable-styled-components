import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <Link to="/dashboard">Painel do usuário</Link>
            </div> 
            <div>
                <Link to="/Login">Login</Link>
            </div>
        </>
    );
}

export default Home;
