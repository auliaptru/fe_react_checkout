import React from 'react';

import './progressbar.scss';

const Progressbar = () => {
    return (
        <div className='progressbar'>
            <ul className='progressbar__wrapper'>
                <li className='done'>
                    <span /> Shipping
                </li>
                <li className='progress'>
                    <span />
                    Billing
                </li>
                <li>
                    <span />
                    Confirmation
                </li>
            </ul>
        </div>
    );
};

export default Progressbar;
