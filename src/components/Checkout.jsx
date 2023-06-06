import React from 'react';
import Select from 'react-select';
import { SiVisa } from 'react-icons/si';

import Progressbar from './Progressbar';
import './checkout.scss';

const Checkout = () => {
    const cardOptions = [
        {
            value: 'visa',
            label: <SiVisa style={{ fontSize: '30px', color: 'blue' }} />,
        },
    ];
    return (
        <div className='checkout__container'>
            <Progressbar />

            <div className='checkout__payment-method'>
                <h2>Payment Method</h2>
                <div className='input__wrapper'>
                    <div className='radio-item'>
                        <input
                            type='radio'
                            id='card'
                            name='payment'
                            value='card'
                            checked
                        />
                        <label htmlFor='card'>
                            <img
                                src='https://cdn-icons-png.flaticon.com/512/6963/6963703.png'
                                alt=''
                                style={{ width: '40px' }}
                            />
                        </label>
                    </div>

                    <div className='radio-item'>
                        <input
                            type='radio'
                            id='paypal'
                            name='payment'
                            value='paypal'
                        />
                        <label htmlFor='paypal'>
                            <img
                                src='https://cdn.icon-icons.com/icons2/2699/PNG/512/paypal_logo_icon_170865.png'
                                alt=''
                                style={{ width: '50px' }}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className='checkout__payment-details'>
                <h2>Payment Details</h2>
                <div className='details__wrapper'>
                    <input type='text' placeholder='Enter Name on Card' />
                    <label htmlFor='' className='card__number'>
                        <input type='text' placeholder='Card Number' />
                        <div className='card__select'>
                            <Select
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: state.isFocused ? 0 : 0,
                                        borderBottom: '1px solid gray',
                                        borderRadius: 0,
                                        outline: state.isFocused && 'none',
                                        width: '100px',
                                        ':hover': {
                                            borderColor: 'gray',
                                        },
                                    }),
                                }}
                                defaultValue={cardOptions[0]}
                                options={cardOptions}
                            />
                        </div>
                    </label>
                    <label htmlFor='' className='card__exp'>
                        <input type='text' placeholder='Expiration' />
                        <input type='number' placeholder='CVV Code' />
                    </label>
                </div>
            </div>

            <p className='checkout__confirm'>
                By clicking "Confirm payment" I agree to the company's terms of
                services
            </p>

            <div className='checkout__buttons'>
                <button>Back</button>
                <button>Confirm Payment: $14.88</button>
            </div>
        </div>
    );
};

export default Checkout;
