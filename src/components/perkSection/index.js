import { useDispatch } from 'react-redux';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
import {goToPricing} from '../../actions/index';

const PerkSection = (props) => {
    const dispatch = useDispatch();

    return <div id="perkSection" className={props.from}>
        <BurgerMenu from={props.from === 'pricing' ? 'pperk': 'perk'}/>
        {(props.from !== 'pricing') ? <div className="try_it_now"  onClick={e => {
            dispatch(goToPricing());
        }}>
            <FormattedMessage id="tr.it.no" children={val => <span className="tin_txt">{val}</span>}></FormattedMessage>
        </div>: null}
        <div className="perk_content_holder">
            <FormattedMessage id="pe.c.txt" children={val => <span className="perk_txt">{val}</span>}></FormattedMessage>
        </div>
        <div className="contents">
            <div className="red_content_holder">
                <span className="horiz_line hor1"></span>
                <FormattedMessage id="re.c.txt" children={val => <div className="co_txt red_co_txt">{val}</div>}></FormattedMessage>
                <FormattedMessage id="c.msg" children={val => <div className="co_msg red_co_msg">{val}</div>}></FormattedMessage>
            </div>
            <div className="blue_content_holder">
                <span className="horiz_line hor2"></span>
                <FormattedMessage id="bl.c.txt" children={val => <div className="co_txt blue_co_txt">{val}</div>}></FormattedMessage>
                <FormattedMessage id="c.msg" children={val => <div className="co_msg blue_co_msg">{val}</div>}></FormattedMessage>
            </div>
            <div className="yel_content_holder">
                <span className="horiz_line hor3"></span>
                <FormattedMessage id="ye.c.txt" children={val => <div className="co_txt yel_co_txt">{val}</div>}></FormattedMessage>
                <FormattedMessage id="c.msg" children={val => <div className="co_msg yel_co_msg">{val}</div>}></FormattedMessage>
            </div>
        </div>
    </div>
};

export default PerkSection;