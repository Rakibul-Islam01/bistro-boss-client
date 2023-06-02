import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className='mx-auto md:w-4/12 text-center my-14'>
                <p className='text-yellow-700 '>{subHeading}</p>
                <h3 className='text-4xl uppercase border-y-4 py-4 mt-4'>{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;