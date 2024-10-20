import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from "./Footer"; 

const Home = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container mt-3">
            <Jumbotron />
                <div className="row">
                    <div className="col-md-3">
                        <Card title="Card title 1" text="Lorem ipsum dolor sit amet." image="https://via.placeholder.com/500x325" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title 2" text="Lorem ipsum dolor sit amet." image="https://via.placeholder.com/500x325" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title 3" text="Lorem ipsum dolor sit amet." image="https://via.placeholder.com/500x325" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title 4" text="Lorem ipsum dolor sit amet." image="https://via.placeholder.com/500x325" />
                    </div>
                </div>
            </div>
			<Footer />
        </div>
    );
};

export default Home;
