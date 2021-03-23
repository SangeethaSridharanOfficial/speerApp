/**
 * 
 * @param {*} e 
 * Here we can have all the helper methods which we use for overall app
 */

export const handleTryItAnimation = (e) => {
    try{
        // this is to apply the animations for the try it button when hover
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        // Setting as property to use it in SCSS
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }catch(err){
        console.error('Error in handleTryItAnimation ', err.stack);
    }
}