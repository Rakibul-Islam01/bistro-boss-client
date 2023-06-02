import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu([])
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-x-6'>
                {
                    popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;