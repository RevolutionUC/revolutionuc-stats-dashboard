import React from 'react';

function Nav() {
    return (
        <div>
            <div className='navigation' style={{paddingLeft: 400}}>
                <ul>
                    <li>Live</li>
                    <li>Yearly</li>
                    <li>Trends</li>
                </ul>
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

                .navigation ul li {
                    list-style-type: none;
                    padding-right: 10px;
                }
            `}
            </style>



        </div>
    );
}

export default Nav;
