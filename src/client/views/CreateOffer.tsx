import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const offers = [
    {
        "name": "BOGO",
        "SKU": 123
    },
    {
        "name": "10%OFF",
        "SKU": 456
    },
    {
        "name": "FREE-DAY-PASS",
        "SKU": 789
    },
]

const CreateOffer: React.FC<CreateOfferProps> = (props) => {
    const history = useHistory();
    // const location = useLocation<{ msg: string }>();
    // const [name, setName] = useState<string>('');
    // const [keycode, setKeycode] = useState<string>('');
    // const [newOffer, setNewOffer] = useState<{}>({ name, keycode })

    // const generate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     try {
    //         setNewOffer({ name, keycode })
    //         console.log(newOffer)
    //     } catch (error) {

    //     }
    //     history.push('/createoffer');
    // }


    const [keycode, setKeycode] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('0');
    const [sku, setSku] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [newOffer, setNewOffer] = useState<{}>({ keycode, type, quantity, sku, description })

    const [number, setNumber] = useState<any[]>([])
    const [howMany, setHowmany] = useState<any>(0)
    const randomNum = []

    const getCode = async () => {
        for (let i = 0; i < howMany; i++) {
            let num = (Math.floor(Math.random() * Math.floor(100000000000)))
            randomNum.push(num)
        }
        setNumber(randomNum)
    }



    const generate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            setNewOffer({ keycode, type, sku, description })
            console.log(newOffer);

        } catch (error) {
            console.log("This don't work!");

        }

    }

    return (
        <main className= "container my-3">
            <Navbar />
            {/* 
            <section className="row justify-content-center my-5">
                <form className="form-group border-primary rounded-lg-success">
                    <div className="form-group">
                        <label>Offers</label>
                        <select
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}>
                            {offers.map(offer => (
                                <option>{offer.name} SKU:{offer.SKU}</option>
                            ))}
                        </select>
                    </div>
                    <div className="shadow p-4 mx-8 bg-white">
                        <h3 className="text-center"> Create Offer </h3>
                        <label>Key Code</label>
                        <input
                            value={keycode}
                            onChange={e => setKeycode(e.target.value)}
                            className="form-control" />

                        <label>Promotion Type</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control" />
                        <button onClick={generate} className="btn btn-outline-secondary mt-3 btn-block">Generate Offer</button>

                    </div>
                </form>
            </section> */}
            {/* <div className="row justify-content-center">
                <Link to="/barcodes">
                    <button className="btn btn-primary">Go To Barcode</button>
                </Link>
            </div> */}


            <Form className="my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Key Code</Form.Label>
                    <Form.Control type="email" onChange={e => setKeycode(e.target.value)} placeholder=" " />
                </Form.Group>

                {/* <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Quantity</Form.Label>

                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                    >
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control>

                </Form.Group> */}



                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" onChange={e => setType(e.target.value)}>
                        <option>BOGO</option>
                        <option>Free Item(s)</option>
                        <option>% Off</option>
                    </Form.Control>
                </Form.Group>



                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Quantity</Form.Label>
                <Form.Control as="input" 
                        onChange={e => setQuantity(e.target.value)}  
                        placeholder="0"
                        type="number"
                        value={quantity}
                         />

                    {/* <input
                        placeholder="0"
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        className="form-control mt-5"
                    /> */}


                </Form.Group>



                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control as="select" onChange={e => setSku(e.target.value)} multiple>
                        <option>650015</option>
                        <option>650007</option>
                        <option>614001</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" onChange={e => setDescription(e.target.value)} rows="3" />
                </Form.Group>











                <Button onClick={generate} variant="primary" type="submit">Generate Bar Codes
                </Button>

            </Form>



















        </main >



    );

}


interface CreateOfferProps {

}


export default CreateOffer;