import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion App 
            </Link>
            <Link href="/search" className="item">
                Search App 
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown App 
            </Link>
            <Link href="/translate" className="item">
                Translate App 
            </Link>
        </div>
    )
}

export default Header;