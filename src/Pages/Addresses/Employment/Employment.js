import React from 'react';

// Components
import AddressesForm from '../../../Components/Forms/AddressesForm';
import Header from '../../../Components/Header/Header';

function EmploymentPage(props) {

    const context = { context_name: 'employment_form' }

    return (
        <div>
            <Header subtitle="Customer Employment Address registration" />
            <h4>Please enter following information.</h4>

            <AddressesForm props={context}/>
        </div>
    );
}

export default EmploymentPage;