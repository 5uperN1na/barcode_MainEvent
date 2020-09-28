import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Navbar from '../components/Navbar';



const Home: React.FC<HomeProps> = (props) => {

    return (
        <main className="container my-3">
            <Navbar />

            {/* <section className="row justify-content-center mt-5"> */}

            <div className="my-3">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Key Code</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>EMARSYS_20_for_20_092420_COWBOYS</td>
                            <td>Free Item(s)</td>
                            <td>(1) Fun Card / Bonus FUNcard / $20 BONUS CARD / $20 BONUS CARD</td>
                            <td>650015, 650007</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>EMARSYS_20_for_20_091720</td>
                            <td>Free Item(s)</td>
                            <td>(1) Fun Card / Bonus FUNcard / $20 BONUS CARD / $20 BONUS CARD - 650015</td>
                            <td>650015, 650007</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>FY21_TheLeagues_FreeHourBowling</td>
                            <td>Free Item</td>
                            <td>(1) Activities / Bowling / ONE HOUR / REGULAR</td>
                            <td>614001</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            {/* </section> */}
        </main>

    );
};

interface HomeProps { }

export default Home;