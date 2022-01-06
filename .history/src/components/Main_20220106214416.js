import React from 'react';
import Addition from './Addition';

const Main = (props) =>
{
    return(
        <>
            <div className='main-wrapper'>
                <div className='container'>
                    <Addition name={'+'} />
                </div>
            </div>
        </>
    );
};

export default Main;