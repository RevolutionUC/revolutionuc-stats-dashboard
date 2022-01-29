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

            <style jsx>{`
                .navigation{
                    width: 100%;
                    height: 50px;
                    // color: red;
                }
                
                .navigation ul{
                    display:flex;
                    flex-direction: column;
                    float: left;
                    margin: 0px;
                    padding: 0px;
                    // overflow: hidden;
                    font-size: 2rem;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 20rem;
                }
                .hamburger{
                    // display: none;
                    position: fixed;
                    right: 2rem;
                    z-index: 6;
                } 
                @media (max-width: 767px){
                  
                    .hamburger{
                        display:fixed;
                        padding-top: 10px;
                        // margin-left: 1px;
                        z-index: 6;
                    }
                
                   
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        // background-color: blue;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: fixed;
                        
                    }
                }
                
               
                
            `}</style>



        </div>
    );
}

export default Nav;
