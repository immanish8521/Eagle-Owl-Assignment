import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="bg-white text-sm font-semibold text-gray-500 h-10 w-80% border rounded">
                <ul className="flex p-2 justify-around">
                    <Link to="/allRecipies">
                        <li>All Recipies</li>
                    </Link>
                    
                    <Link to="/incorrect">
                        <li>INCORRECT</li>
                    </Link>
                    <Link to="/untagged">
                        <li>UNTAGGED</li>
                    </Link>
                    <Link to="/disabled">
                        <li>DISABLED</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
