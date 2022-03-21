import React from 'react';

// Components
import AddressesForm from '../../../Components/Forms/AddressesForm';
import Header from '../../../Components/Header/Header';

function PropertyPage(props) {

    const context = { context_name: 'property_form' }

    return (
        <div className='app__main'>
            <Header subtitle="Customer Property Address registration" />
            <h4>Please enter following information.</h4>

            <AddressesForm props={context}/>
        </div>
    );
}

export default PropertyPage;