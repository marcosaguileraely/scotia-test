import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import provinces from '../../../Utils/provinces.json';

import '../style.css'

function ResidentialPage({ Customer, add_residential_addr }) {
    console.log(Customer);
    const history = useHistory();

    //create hooks for each input
    const [streetNumber, setStreetNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const addResidentialAddrInfo = () => {
        console.log("Clicked");
    }

    //Arrow functions for navigation next and back
    const next = () => {
        //console.log all hooks
        console.log(`${streetNumber} ${streetName} ${city} ${province} ${postalCode}`);
        add_residential_addr({ "street_number": streetNumber, 
                               "street_name": streetName, 
                               "city": city, 
                               "province": province,
                               "postal_code": postalCode })
        //history.push("/2_property_address")
    }
    const back = () => history.goBack()

    return (
        <div>
            <h1>Scotia Bank: Customer Residential Address registration</h1>
            <hr />
            <h4>Please enter following information.</h4>
            <section>
                <form onSubmit={next}>
                    <input id="res_street_number" type="number" required placeholder='Street number' onChange={e => setStreetNumber(e.target.value)} />
                    <input id="res_street_name" type="text" required placeholder='Street name' onChange={e => setStreetName(e.target.value)} />
                    <input id="res_city" type="text" required placeholder='City' onChange={e => setCity(e.target.value)} />
                    <input id="res_province" type="text" required placeholder='Province' onChange={e => setProvince(e.target.value)} />
                    <input id="res_code" type="number" required placeholder='Code' onChange={e => setPostalCode(e.target.value)} />
                </form>
            </section>

            <footer>
                <ul className="footer__nav_link">
                    <li><button onClick={back}>Back</button></li>
                    <li><button onClick={next}>Save and continue</button></li>
                </ul>
            </footer>

        </div>
    );
}

const mapStateToProps = state => ({
    Customer: state.Customer
})

const mapDispatchToProps = dispatch => ({
    add_residential_addr(e) {
        dispatch({
            type: 'ADD_RESIDENTIAL_ADDRESS',
            value: e
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ResidentialPage);