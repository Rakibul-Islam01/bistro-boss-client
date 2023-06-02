import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)
        })
    }, [])


    return (
        <div>
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            >
            </SectionTitle>
        <div className='grid md:grid-cols-2 gap-x-6'>
            {
                menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
            }
        </div>

        </div>
    );
};

export default PopularMenu;