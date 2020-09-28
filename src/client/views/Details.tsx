import * as React from 'react';
import {useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Details: React.FC<DetailsProps> = (props) => {
    return (
        <main className="container">
               <Navbar />
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h2 className="display-1 text-center text-primary">Details Page</h2>
                </div>
            </section>
         
        </main>
    );
}

interface DetailsProps {}

export default Details;