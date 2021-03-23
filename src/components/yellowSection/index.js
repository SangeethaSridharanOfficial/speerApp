import { useDispatch } from 'react-redux';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
import { goToPricing } from '../../actions';
import { handleTryItAnimation } from '../../service/helper';

const YellowSection = () => {
    const dispatch = useDispatch();

    return <div id="yellowSection">
        <BurgerMenu from={'yellow'}/>
        <div className="try_it_now" onMouseMove = {(e) => {
            handleTryItAnimation(e); // this is handle the animation
        }} onClick={e => {
            dispatch(goToPricing());
        }}>
            <FormattedMessage id="tr.it.no" children={val => <span className="tin_txt">{val}</span>}></FormattedMessage>
        </div>
        <div className="left_side_container">{ // Injecting 3 divs to handle the image view
            [1,2,3].map((i) => <div className={`div${i}`} style={{backgroundImage: "url('/images/yellowSecImgs/image4.png')"}}></div>)
        }
        </div>
        <div className="right_side_container">
            <FormattedMessage id="fr.ro.txt" children={val => <span className="head1">{val}</span>}></FormattedMessage>
            <FormattedMessage id="fr.ex.txt" children={val => <span className="head2">{val}</span>}></FormattedMessage>
            <FormattedMessage id="see.demo" children={val => <span className="see_demo_btn">{val}</span>}></FormattedMessage>
            <div className="trans_ele" style={{backgroundImage: "url('/images/yellowSecImgs/image4.png')"}}></div>
        </div>
    </div>
};

export default YellowSection;