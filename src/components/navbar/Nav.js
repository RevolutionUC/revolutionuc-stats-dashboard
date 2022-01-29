import React from 'react';
import Hamburger from './Hamburger';
import { useState } from 'react';

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div>
            <div className='navigation' style={{paddingLeft: 400}}>
                <ul>
                    <li>Live</li>
                    <li>Yearly</li>
                    <li>Trends</li>
                </ul>
                <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}></Hamburger>
                </div>
            </div>

            <style jsx>
            {`
                .navigation {
                    width: 100%,
                    height: 50px;
                    background-color: blue;
                }
                
                .navigation ul {
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 20 0px;
                    padding: 0 25px;
                    background-color: blue;
                }
                
                .navigation ul {
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    background-color: blue;
                    height: 100vh;
                    width: 50vw;
                    margin-top: 50px;
                    position: absolute;
                }

                .navigation ul li {
                    list-style-type: none;
                    padding-right: 10px;
                }

                .hamburger {
                    display: none;
                }

                @media (max-width: 700px){
                    .hamburger {
                        display: fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 10;
                    }
                }
            `}
            </style>



        </div>
    );
}

export default Nav;
