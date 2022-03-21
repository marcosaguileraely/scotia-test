import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../Components/Header/Header';

function MainPage({ customer_add_basic_info }) {

    const history = useHistory();

    const [sectionIsHide, setSectionIsHide] = useState('hidden');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const showForm = () => {
        setSectionIsHide('inherit');
    }

    const addBasicInfo = () => {
        console.log(`${name} ${lastName} ${phone}`);
        customer_add_basic_info({ "name": name, "last_name": lastName, "phone": phone })
        history.push("/1_residential_address");
    }

    return (
        <div className='app__main'>
            <Header subtitle="Welcome to Scotia Bank, customer portal" />
            <ul>
                <li>Customer not found, please <button onClick={showForm}>Create an account.</button></li>
            </ul>

            <section style={{ visibility: sectionIsHide }}>
                <h3>1. Basic demographic information</h3>
                <form onSubmit={addBasicInfo}>
                    <input id="demo_name" type="text" placeholder='Name' required onChange={e => setName(e.target.value)} />
                    <input id="demo_last_name" type="text" placeholder='Last name' required onChange={e => setLastName(e.target.value)} />
                    <input id="demo_phone" type="phone" placeholder='Phone number' required onChange={e => setPhone(e.target.value)} />
                    <input type="submit" value="Save and continue" />
                </form>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    Customer: state.Customer
})

const mapDispatchToProps = dispatch => ({
    customer_add_basic_info(e) {
        dispatch({
            type: 'ADD_CUSTOMER_BASIC_INFO',
            value: e
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);