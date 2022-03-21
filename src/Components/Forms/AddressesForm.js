import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Footer from '../Footer/Footer';

//Utils
import params from '../../Utils/global_params';
import fieldsValidation from "../../Utils/utils";

function AddressesForm({ props, Customer, register_addr }) {
    console.log(Customer);
    console.log(props);
    const history = useHistory();

    useEffect(() => {
        globalBehave()
    }, [])

    const [streetNumber, setStreetNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [type, setType] = useState('');
    const [jobStatus, setJobStatus] = useState('');

    //UI behaviour states
    const [isEmployeeTypeHide, setIsEmployeeTypeHide] = useState('none');
    const [isButtonEnabled, setIsButtonEnabled] = useState('disabled');
    const [textValidation, setTextValidation] = useState({});

    const globalBehave = () => {
        if (props.context_name === 'residential_form') {
            //TO-DO when the user is in the residential form
            console.log("hidden element")
            setIsEmployeeTypeHide('none');
        }
        else if (props.context_name === 'property_form') {
            //TO-DO when the user is in the residential form
            console.log("hidden element")
            setIsEmployeeTypeHide('none');
        }
        else if (props.context_name === 'employment_form') {
            //TO-DO when the user is in the residential form
            console.log("visible element")
            setIsEmployeeTypeHide('initial');
        }
    }

    const employmentTypeChange = (e) => {
        console.log(e.target.value);
        setType(e.target.value);
    }

    const saveAndContinue = () => {
        console.log(`${streetNumber} ${streetName} ${city} ${province} ${postalCode}`);
        let evaluator = fieldsValidation({ "street_number": streetNumber, "street_name": streetName, "city": city, "province": province, "postal_code": postalCode, "type": type, "job_status": jobStatus, "context": props.context_name });
        console.log(evaluator);
        if (evaluator.allow) {
            register_addr({
                "type": props.context_name === 'employment_form' ? type : '',
                "job_status": type === 'EMP' ? jobStatus : '',
                "context_name": props.context_name,
                "street_number": streetNumber,
                "street_name": streetName,
                "city": city,
                "province": province,
                "postal_code": postalCode
            })
            navigateNextPage()
        }else{
            setTextValidation(evaluator)
        }

    }

    const navigateNextPage = () => {
        switch (props.context_name) {
            case "residential_form":
                console.log("residential_form");
                history.push("/2_property_address");
                break;

            case "property_form":
                console.log("residential_form");
                history.push("/3_employment_address");
                break;

            case "employment_form":
                console.log("employment_form");
                history.push("/4_resume");
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <section>
                <form>
                    <h6 style={{ display: isEmployeeTypeHide }}>Emploment status</h6>
                    <select id="res_type" name="type" onChange={e => employmentTypeChange(e)} style={{ display: isEmployeeTypeHide }}>
                        {
                            params.employment_type.map((type, index) => {
                                return <option key={index} value={type.code}>{type.name}</option>
                            })
                        }
                    </select>
                    <span className='val__msg'>{textValidation.type}</span>
                    <br />
                    <h6 style={{ display: isEmployeeTypeHide }}>Address employment</h6>
                    <div className='radio-group' style={{ display: isEmployeeTypeHide }}>
                        <input type="radio" id="current" name="drone" onChange={e => setJobStatus(e.target.value)} value="current" /><label htmlFor="current">Current</label>
                        <input type="radio" id="previous" name="drone" onChange={e => setJobStatus(e.target.value)} value="previous" /><label htmlFor="previous">Previous</label>
                    </div>

                    <input id="res_street_number" type="number" required placeholder='Street number' onChange={e => setStreetNumber(e.target.value)} />
                    <span className='val__msg'>{textValidation.street_number}</span>
                    <input id="res_street_name" type="text" required placeholder='Street name' onChange={e => setStreetName(e.target.value)} />
                    <span className='val__msg'>{textValidation.street_name}</span>
                    <input id="res_city" type="text" required placeholder='City' onChange={e => setCity(e.target.value)} />
                    <span className='val__msg'>{textValidation.city}</span>
                    <select id="res_provinces" name="provinces" onChange={e => setProvince(e.target.value)}>
                        {
                            params.provinces.map((province, index) => {
                                return <option key={index} value={province.abbreviation}>{province.name}</option>
                            })
                        }
                    </select>
                    <span className='val__msg'>{textValidation.province}</span>
                    <input id="res_code" type="number" required placeholder='Code' onChange={e => setPostalCode(e.target.value)} />
                    <span className='val__msg'>{textValidation.postal_code}</span>
                    {/* <input type="submit" value="Save and continue"/> */}
                    <button onClick={saveAndContinue}>Save and continue</button>
                </form>
            </section>

            {/* <Footer props={navigation} /> */}
        </div>
    );
}

const mapStateToProps = state => ({
    Customer: state.Customer
})

const mapDispatchToProps = dispatch => ({
    register_addr(e) {
        dispatch({
            type: 'ADD_ADDRESS',
            value: e
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressesForm);