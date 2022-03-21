import React from 'react';

function Header(props) {
    //console.log(props);
    return (
        <div>
            <header>
                <h1>Scotia Bank</h1>
                <h3>{props.subtitle}</h3>
                <hr />
            </header>
        </div>
    );
}

export default Header;