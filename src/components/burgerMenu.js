import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl'; // this is handle the language

const optionsArr = [ // options in the menu
    {
        name: "whatIsIt",
        id: "wa.it.is" // this is the language ID
    },
    {
        name: "perks",
        id: "pr.txt"
    },
    {
        name: "pricing",
        id: "prc.txt"
    }
];

let optionsEle = null;


const BurgerMenu = (props) => {
    const [isOpened, setIsOpened] = useState(false); // to maintain the state of the menu
    let {from} = props; // this is know from where burger menu is called Ex. Pricing/Payment/Hero/Yellow section

    return <div id={`burgerMenu`} className={`${isOpened ? '' : 'closed'} ${props.from}`}>
        <div className="header_holder">
            <div className="option_icons" onClick={e => {
                setIsOpened(!isOpened);
            }}>
                <span className="hor_icon"></span>
                <span className="hor_icon"></span>
                <span className="hor_icon"></span>
            </div>
            <div className={`header_txt_holder ${isOpened ? '' : 'closed'}`}>
                <FormattedMessage id="he.txt.ap" children={val => 
                    <span className="header_txt">{val}</span>}>
                </FormattedMessage>
            </div>
        </div>
        
        <div className={`options_holder ${isOpened ? '' : 'closed'}`} ref={ele => optionsEle = ele}>
            <ul className="opt_hol">{
                optionsArr.map(option => <FormattedMessage id={option.id} children={val => 
                    <li className={`lis ${option.name} ${from}`} key={option.name}>{val}</li>
                }></FormattedMessage>)
            }</ul>
        </div>
    </div>
};

export default BurgerMenu;