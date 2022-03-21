import React from 'react';

// Components
import AddressesForm from '../../../Components/Forms/AddressesForm';
import Header from '../../../Components/Header/Header';

function PropertyPage(props) {

    const context = { context_name: 'residential_form' }

    return (
        <div>
            <Header subtitle="Customer Property Address registration" />
            <h4>Please enter following information.</h4>

            <AddressesForm props={context}/>
        </div>
    );
}

export default PropertyPage;