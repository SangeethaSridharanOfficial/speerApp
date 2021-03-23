import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
import PerkSection from '../perkSection';
import MusicIcon from '@material-ui/icons/MusicNoteOutlined';
import {openPayment} from '../../actions/index';

const eleArr = [ // this is used to show the pricing content. Here i provided the IDs to get the content from language
    {
        headerId: "pr.ba",
        calId: "pr.mo",
        cost: "$9",
        lists: ["p.v.g", "p.am", "p.pj", "p.lt", "p.isg", "p.fe"],
        selectId: "pr.sel"
    },
    {
        headerId: "pr.adv",
        calId: "pr.yr",
        cost: "$99",
        lists: ["p.vv.g", "p.eam", "p.pj", "p.ltm", "p.issg", "p.mfe"],
        selectId: "pr.sel"
    },
    {
        headerId: "pr.pro",
        calId: "pr.yr",
        cost: "$120",
        lists: ["p.vv.g", "p.em", "p.pj", "p.ltm", "p.issg", "p.mfe"],
        selectId: "pr.sel"
    }
]
let liEle = [];

const PricingSection = () => {
    const dispatch = useDispatch();

    let goToPayment = (planNo) => {
        try{
            dispatch(openPayment({planNo, open: true}));
        }catch(err){
            console.error('Error in goToPayment ', err.stack);
        }
    }

    return <div id="pricingPage">
        <div className="pricingSection">
            {/**
             * this is the Burger component, here i am sending the "from" as props to know from where it is triggered
             */}
            <BurgerMenu from={"pricing"}/> 
            <div className="content_holder">
                <FormattedMessage id="prc.txt" children={val => <span className="prc_txt">{val}</span>}></FormattedMessage>
                <FormattedMessage id="pr.msg.txt" children={val => <span className="prc_msg_txt">{val}</span>}></FormattedMessage>
            </div>
            <div className="pricing_holder">{
                eleArr.map((data, idx) => {
                    liEle = [];
                    return (<div className={`pri_cont pri${idx+1}`}>
                        <div className={`pr_header prh${idx+1}`}>
                            <FormattedMessage id={data.headerId} children={val => <span className={`header_txt ht${idx+1}`}>{val}</span>}></FormattedMessage>
                            <span className={`hor_line hl${idx+1}`}></span>
                            <FormattedMessage id={data.calId} children={val => <span className={`cal_txt ct${idx+1}`}>{val}</span>}></FormattedMessage>
                            <span className="dollar_txt">{data.cost}</span>
                        </div>
                        {data.lists.forEach(list => {
                            liEle.push(<li className={`listli list${idx+1}`}>
                                <MusicIcon style={{color: 'white'}}/>
                                <FormattedMessage id={list} children={val => <span className={`li_txt lt${idx+1}`}>{val}</span>}></FormattedMessage>
                            </li>)
                        })}
                        <ul className="ulEle">{liEle}</ul>
                        <FormattedMessage id={data.selectId} children={val => <span className={`sel_txt st${idx+1}`} onClick={e => goToPayment(idx+1)}>{val}</span>}></FormattedMessage>
                    </div>)
                })
            }</div>
        </div>
        <PerkSection from={"pricing"}/>
    </div>
}

export default PricingSection;