import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured pt-6 my-20 bg-fixed'>
            <SectionTitle
            subHeading={"-----check it out-----"}
            heading={"from our menu"}
            >
            </SectionTitle>

            <div className='md:flex gap-x-14 pb-20 pt-4 px-24 justify-center items-center bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <h5>March 20, 2023</h5>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, laudantium itaque mollitia nam officiis similique exercitationem sequi, iste magnam fugiat ut deserunt illo autem perferendis ducimus dolorum quod cum fugit. Quidem, aliquam! Tenetur praesentium reprehenderit quia vel molestiae nihil sunt!</p>
                    <button className="btn btn-outline uppercase mt-5 bottom-1">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;