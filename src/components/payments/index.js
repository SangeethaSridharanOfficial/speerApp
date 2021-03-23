import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
// this icon is used for the arrow in the text field
import ArrowIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import { useSelector } from 'react-redux';
import FooterSection from '../footerSection';

const PaymentSection = () => {
    // this is get the state value
    const planNo = useSelector(state => state.DashboardReducer.get('planNo'));
    const [planNum, setPlanNum] = useState(planNo);
    const planArr = [
        {
            name: "basic",
            id: "pl.bas"
        },
        {
            name: "advanced",
            id: "pl.adv"
        },
        {
            name: "pro",
            id: "pl.pro"
        }
    ]
    return <div id="paymentSection">
        <BurgerMenu from={'payment'}/>
        <div className="pay_header">
            <FormattedMessage id="pa.txt" children={val => <span className="py_txt">{val}</span>}></FormattedMessage>
        </div>
        <div className="sel_plan_holder">
            <FormattedMessage id="se.txt" children={val => <span className="sel_txt">{val}</span>}></FormattedMessage>
            <div className="plan_holder">{
                planArr.map((plan, idx) => 
                    <div className="plans_holder" onClick={e => setPlanNum(idx+1)}>
                        <span className={`circle c${idx+1} ${idx+1 == planNum ? 'active': ''}`}></span>
                        <FormattedMessage id={plan.id} children={val => <span className={`plan ${plan.name}`}>{val}</span>}></FormattedMessage>
                    </div>
                )
            }</div>
        </div>
        <div className="billing_section">
            <div className="bill_infos">
                <FormattedMessage id="bi.info" children={val => <p className="bi_info">{val}</p>}></FormattedMessage>
                <FormattedMessage id="fn.txt" children={val => <p className="fn_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="full_n_tf"/>
                <FormattedMessage id="ba.txt" children={val => <p className="ba_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="bill_ad_tf"/>
                <div className="city_pos">
                    <FormattedMessage id="ci.txt" children={val => <p className="ci_txt txt">{val}</p>}></FormattedMessage>
                    <input type="text" className="city_tf"/>
                    <FormattedMessage id="po.co.txt" children={val => <p className="pc_txt txt">{val}</p>}></FormattedMessage>
                    <input type="text" className="po_co_tf"/>
                </div>
                <FormattedMessage id="coun.txt" children={val => <p className="coun_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="coun_tf"/>
                <ArrowIcon className="country_ar"/>
            </div>
            <div className="credit_infos">
                <FormattedMessage id="crd.info" children={val => <p className="bi_info">{val}</p>}></FormattedMessage>
                <FormattedMessage id="ch.n.txt" children={val => <p className="c_ho_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="c_ho_tf"/>
                <FormattedMessage id="cnum.txt" children={val => <p className="cnum_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="cnum_tf"/>
                <div className="emon_yr">
                    <FormattedMessage id="ex.m.txt" children={val => <p className="ex_m_txt txt">{val}</p>}></FormattedMessage>
                    <input type="text" className="exm_tf"/>
                    <ArrowIcon className="exm_ar"/>
                    <FormattedMessage id="exy.txt" children={val => <p className="exy_txt txt">{val}</p>}></FormattedMessage>
                    <input type="text" className="exy_tf"/>
                    <ArrowIcon className="exy_ar"/>
                </div>
                <FormattedMessage id="cvv.txt" children={val => <p className="cvv_txt txt">{val}</p>}></FormattedMessage>
                <input type="text" className="cvv_tf"/>
            </div>

            <div className="terms_holder">
                <FormattedMessage id="tac.txt" children={val => <p className="tac_txt" dangerouslySetInnerHTML={{__html: val}}></p>}></FormattedMessage>
                <FormattedMessage id="dowl.txt" children={val => <p className="animate_btn dowl_txt">{val}</p>}></FormattedMessage>
            </div>
        </div>
        <FooterSection/>
    </div>
};

export default PaymentSection;