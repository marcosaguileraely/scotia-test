import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../Components/Header/Header';

function ResumePage({ props, Customer }) {
    console.log(Customer);
    const history = useHistory();
    return (
        <div className='app__main'>
            <Header subtitle="Process registration summary" />
            <section>
                <h4>Customer information:</h4>
                <div className='summary__section_content'>
                    <span><b>Name:</b> {Customer.Name}</span>
                    <span><b>Last name:</b> {Customer.LastName}</span>
                    <span><b>Phone:</b> <a href="#">{Customer.Phone}</a></span>
                </div>
            </section>

            <section>
                <h4>Residential address information:</h4>
                <address className='summary__section_content'>
                    <span><b>Street number:</b> {Customer.Residential_Addr.StreetNumber}</span>
                    <span><b>Street name:</b> {Customer.Residential_Addr.StreetName}</span>
                    <span><b>City:</b> {Customer.Residential_Addr.City}</span>
                    <span><b>Province:</b> {Customer.Residential_Addr.Province}</span>
                    <span><b>Postal code:</b> {Customer.Residential_Addr.PostalCode}</span>
                </address>
            </section>

            <section>
                <h4>Property address information:</h4>
                <address className='summary__section_content'>
                    <span><b>Street number:</b> {Customer.Property_Addr.StreetNumber}</span>
                    <span><b>Street name:</b> {Customer.Property_Addr.StreetName}</span>
                    <span><b>City:</b> {Customer.Property_Addr.City}</span>
                    <span><b>Province:</b> {Customer.Property_Addr.Province}</span>
                    <span><b>Postal code:</b> {Customer.Property_Addr.PostalCode}</span>
                </address>
            </section>

            <section>
                <h4>Employment address information:</h4>
                <div className='summary__section_content'>
                    <span><b>Type:</b> {Customer.Employment_Addr.Type}</span>
                    <span><b>Job status:</b> {Customer.Employment_Addr.JobStatus}</span>
                </div>
                <br />
                <address className='summary__section_content'>
                    <span><b>Street number:</b> {Customer.Employment_Addr.StreetNumber}</span>
                    <span><b>Street name:</b> {Customer.Employment_Addr.StreetName}</span>
                    <span><b>City:</b> {Customer.Employment_Addr.City}</span>
                    <span><b>Province:</b> {Customer.Employment_Addr.Province}</span>
                    <span><b>Postal code:</b> {Customer.Employment_Addr.PostalCode}</span>
                </address>

            </section>
            <footer className='form__group_button'>
                <button onClick={() => history.goBack()}>Go back</button>
                <button onClick={() => alert("Thank you. We have received your submition.")}>Save and finish</button>
            </footer>
        </div>
    );
}

const mapStateToProps = state => ({
    Customer: state.Customer
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);