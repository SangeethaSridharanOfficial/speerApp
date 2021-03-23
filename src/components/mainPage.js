import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HeroSection from './heroSection/index';
import RedSection from './redSection/index';
import YellowSection from './yellowSection/index';
import PerkSection from './perkSection/index';
import ReviewSection from './reviewSection/index';
import GetExpSection from './getExpSection/index';
import FooterSection from './footerSection/index';
import PricingSection from './pricing/index';
import PaymentSection from './payments/index';

const MainPage = () => {
    const [view, setView] = useState("");
    const viewVal = useSelector(state => state.DashboardReducer.get('view'));
    const openPayment = useSelector(state => state.DashboardReducer.get('openPayment'));

    useEffect(() => {
        if(viewVal === 'pricing'){
            setView(viewVal);
        }
    }, [viewVal]);

    let appPage = <PricingSection/>; // this will hold the page which ever need to be render

    if(!view){
        appPage = <div id="mainPage">
            <HeroSection/>
            <RedSection/>
            <YellowSection/>
            <PerkSection/>
            <ReviewSection/>
            <GetExpSection/>
            <FooterSection/>
        </div>;
    }else if(openPayment){
        appPage = <PaymentSection/>
    }

    return appPage;
};

export default MainPage;