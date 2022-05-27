import './About.css';
import snow1 from './image/IMG_9647.jpg';
import vailmap from './image/vailmap.jpg';

function About(){

    return(
        <div className='tips'>
            <div>
                <a class="skip_link" href="/Home">Home Page</a> 
            </div>
            <h3> IMPORTANT SNOWBOARDING TIPS </h3>
            <h4> Make Sure You Have The Right Board</h4>
            <p1>As a beginner, look for a board that has rocker camber</p1>
            <h4> Make Sure You Have Proper Gear</h4>
            <p1>Riding with the wrong gear is not worth the portential danger it could get you into. Having comfortable feet is the most important part to enjoying a long day in the snow. You’ll also want to make sure that your clothes are keeping you warm but not making you feel like you’re wrapped in a personal sauna.</p1>
            <h4> Take A Lesson</h4>
            <p1>Take a snowboarding lesson the first time you go to a mountain so that you can learn the basics of how to maneuver your board and what to expect on your first ride down. That lesson will help you become a better boarder faster and is always worth the investment.</p1>
            <h4> Always Wear A MIPS Helmet</h4>
            <p1>MIPS technology mimics the brain’s protective structure by reducing rotational forces caused by angled impacts to the head. The helmet’s shell and liner are separated by a low friction layer which allows the helmet to slide, noticeably reducing trauma to the brain in the case of oblique impacts. These angled impacts are considerably more common in action sports compared to the blunt force impacts for which traditional helmets are typically tested.</p1>
            <h4> Pay Attention To Your Surroungdings</h4>
            <p1>Make sure you’re confident enough in your boarding skills to be able to take a few looks up the mountain as you’re crossing the slope and that if you’re in a blind spot, you’re comfortable to keep moving forward at whatever speed is necessary.</p1>
            <img className='about_img' src={snow1}/>
            <img className='about_img' src={vailmap}/>


        </div>
    )
}
export default About;