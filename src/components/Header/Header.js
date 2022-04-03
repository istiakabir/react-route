import React from 'react';
import { Link as CustomLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This is Routings!!!!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;