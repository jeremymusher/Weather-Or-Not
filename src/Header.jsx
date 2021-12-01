import React from 'react';

function Header(props) {

    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <input type="text" placeholder="Search Using Postal Code"/>
                <button type="submit" >Search</button>
            </form>
        </div>
    );
}

export default Header;