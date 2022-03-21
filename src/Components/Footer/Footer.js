import React from 'react';

import '../../Pages/Addresses/style.css';

function Footer(nav_data) {
    console.log(nav_data);
    return (
        <div>
            <footer>
                <ul className="footer__nav_link">
                    <li><button >Back</button></li>
                    <li><button >Next</button></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;