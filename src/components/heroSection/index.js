import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { TweenLite, Power3 } from "gsap"; // it is useful for animations
import {goToPricing} from '../../actions/index'; // it is the action to dispatch to open pricing page

const contentArr = [ // It is an array which has the content of this section
    {
        id: "h.s.cnt1.txt",
        name: "content1"
    },
    {
        id: "h.s.cnt2.txt",
        name: "content2"
    },
    {
        id: "tr.it.no",
        name: "try_it_now"
    }
],
imagesArr = [ // Here i have all the images which are to animate
    {
        name: 'image3',
        src: '/images/heroSecImgs/image3.png'
    },
    {
        name: 'image2',
        src: '/images/heroSecImgs/image2.png'
    },
    {
        name: 'image1',
        src: '/images/heroSecImgs/image1.png'
    }  
];
var count = 3; // i am maintaining to view the images according to the count value

/**
 * This func will handle the images to animate
 */
let slideImage = () => {
    try{
        
        document.querySelectorAll('.image').forEach((ele) => {
            ele.classList.remove('active');
        })
        document.querySelectorAll('.icon').forEach((ele) => {
            ele.classList.remove('active');
        })
        document.querySelector(`.image${count}`).classList.add('active');
        document.querySelector(`.icon${count}`).classList.add('active');
        if(count > 1){
            count = count - 1;
        }else{
            count = 3;
        }
    }catch(err){
        console.error('Error in slideImage ', err.stack);
    }
}

/**
 * @returns the hero section
 * This is the main func to handle this section
 */

const HeroSection = () => {
    const dispatch = useDispatch(); // it is used to dispatch an action to the pricing

    useEffect(() => { // this will be called when component initialized as it no args it wont be called every time
        const interval = setInterval(slideImage, 5000); // setting the interval to handle the images 
        return () => clearInterval(interval); // this will clear the interval when component unmount
    }, []);


    /**
     * @returns icons of the three dots under the images when image changes
     * Here we click handler also to handle which icon clicked corresponding image will display
     */
    const renderMoverIcons = () => {
        try{
            let icons = [];
            for(let i=0; i<3; i++){
                icons.push(<span key={i} className={`icon icon${i+1} ${i===0 ? 'active': ''}`} onClick={e => {
                    document.querySelectorAll('.image').forEach((ele) => {
                        ele.classList.remove('active');
                    })
                    document.querySelectorAll('.icon').forEach((ele) => {
                        ele.classList.remove('active');
                    })
                    document.querySelector(`.image${i+1}`).classList.add('active');
                    document.querySelector(`.icon${i+1}`).classList.add('active');
                    count = i+1;
                }}></span>)
            }
            return icons;
        }catch(err){
            console.error('Error in renderMoverIcons ', err.stack);
        }
    }

    return <div id="heroSection">
        <BurgerMenu from={'hero'}/>
        <div className="bgImgs">{
            imagesArr.map((val, idx) => 
                <img alt={val.name} key={val.name} className={`image ${val.name} active`} src={val.src}></img>
            )
        }</div>
        <div className="contents">{
            contentArr.map(content => 
                <FormattedMessage id={content.id} children={val => <span className={`content ${content.name}`} key={content.name} onClick={e => {
                    if(content.name === 'try_it_now'){ // if the value is try it then it will dispatch the action
                        dispatch(goToPricing());
                    }
                }}>{val}</span>}></FormattedMessage>
            )
        }
        </div>
        <div className="mover_holder"><div className="imageMoverIcons">{renderMoverIcons()}</div></div>
    </div>
};

export default HeroSection;