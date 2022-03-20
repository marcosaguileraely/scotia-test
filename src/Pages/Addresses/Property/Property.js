import React from 'react';
import {Link} from 'react-router-dom';

import '../style.css'

function PropertyPage(props) {
    return (
        <div>
            <h1>Scotia Bank: Customer Property Address registration</h1>
            <hr />
            <h4>Please enter following information.</h4>

            <input id="residential_street_number" type="number" placeholder='Street number' />
            <input id="residential_street_name" type="text" placeholder='Street name' />
            <input id="residential_city" type="text" placeholder='City' />
            <input id="residential_province" type="text" placeholder='Province' />
            <input id="residential_code" type="number" placeholder='Code' />

            <footer>
                <ul className="footer__nav_link">
                    <li><Link to="/1_property_address">Go back</Link></li>
                    <li><Link to="/3_employment_address">Go next</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default PropertyPage;