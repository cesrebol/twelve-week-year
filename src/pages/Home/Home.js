import React from 'react';
import './Home.css'; // import the .css file 
import Aspirational from '../Aspirational/Aspirational';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Twelve-Week-Year</h1>
            <p>This app is designed to help you achieve your year's goal in just 12 weeks!</p>
            <p>Get ready to boost your productivity.</p>

            <Aspirational />
        </div>
    )
}


export default Home;