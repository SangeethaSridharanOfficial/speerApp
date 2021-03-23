import { useDispatch } from 'react-redux';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import BurgerMenu from '../burgerMenu';
import { goToPricing } from '../../actions';
import { handleTryItAnimation } from '../../service/helper';


let isPlay = true; // This is to maintain the state of the music
window.AudioContext = window.AudioContext||window.webkitAudioContext; // this is to use the audio api in the window level

var audio = new Audio(); // creating audio object
  
/**
 * This func is to play and pause the music according to the "IsPlay" value
 */
const playPauseMusic = () => {
    try{
        if(isPlay){
            let context = new AudioContext(),
            analyser = context.createAnalyser(), source; 
            audio.src = '/music/audio.mp3';
            audio.controls = true;
            audio.autoplay = true;
            audio.loop = true;
            source = context.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(context.destination);
        }else{
            audio.pause();
            audio.currentTime = 0;
        }
        isPlay = !isPlay;
        console.log('isplay ', isPlay);
        
    }catch(err){
        console.error('Error in palyPauseMusic ', err.stack);
        isPlay = !isPlay;
    }
}

/**
 * 
 * @returns red section component
 * 
 */

const RedSection = () => {
    const dispatch = useDispatch();
    
    return <div id="redSection">
        <BurgerMenu from={'su'}/>
        <div className="try_it_now" onMouseMove = {(e) => {
            handleTryItAnimation(e); // this is to handle the animation
        }} onClick={e => {
            dispatch(goToPricing());
        }}>
            <FormattedMessage id="tr.it.no" children={val => <span className="tin_txt">{val}</span>}></FormattedMessage>
        </div>
        <div className="left_side_container">
            <FormattedMessage id="he.su.txt" children={val => <span className="head1">{val}</span>}></FormattedMessage>
            <FormattedMessage id="he.ex.txt" children={val => <span className="head2">{val}</span>}></FormattedMessage>
            <FormattedMessage id="see.demo" children={val => <span className="see_demo_btn">{val}</span>}></FormattedMessage>
        </div>
        <div className="right_side_container" onClick={e => {
            playPauseMusic();
        }}>
            <img alt="speaker" src={`/images/redSecImgs/medium17.png`} className="speaker sp1"></img>
            <img alt="speaker" src={`/images/redSecImgs/medium27.png`} className="speaker sp2"></img>
            <div className="click_holder">
                <FormattedMessage id="cl.txt" children={val => <span className="cl_txt">{val}</span>}></FormattedMessage>
            </div>
        </div>
    </div>
};

export default RedSection;