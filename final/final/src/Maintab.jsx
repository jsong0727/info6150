import { useState } from 'react';
import Tab from './Tab';


const defaultTabs = { 
    'Green': 'What They Really Mean: This is the international ski slope rating symbol for “point them downhill and go as fast as you can.” Okay, maybe not for everyone. For some of us it means the resort has graciously supplied us with moving-human slalom poles to ski around. For Beginners, it may be the only run you see today and it does not get any easier. You can always bail to the bunny slope down by the base of the mountain but with today’s social media; do you really want a picture of you skiing with 3 year-olds posted on Facebook?',
    'Blue': 'What They Really Mean: These are considered bombers or cruisers to most. This is the first step past green beginner runs and though usually pretty flat, some have bumps on them as well. They also have a more recent phenomenon known as the Abominable Snowboarder. Watch out for these terrors of the blue runs because once they advance past the green runs, there’s no stopping or slowing them down. Blue runs are a good training grounds for the bumps you will see, hopefully on purpose, when you do drop into a black diamond run at a later date.',
    'Diamond': 'These runs are where you can get a little peace and quiet, except for the screaming. They are either very steep, full of bumps or both. You don’t have to be an expert to ski these but that would help, along with a lot of confidence. Alcohol helps too.',
    'Double Diamond': 'What They Really Mean: There are fewer people on these runs, mainly because of our basic survival instinct. These are the runs that make even atheists pray to God. If you’re not a true expert you have just made a huge mistake. This is one time where, to heck with social media, you may want to walk down this puppy.',
}; 
    
function Maintab() {
    const [fags] = useState(defaultTabs);

    return (
        <div>
            <Tab className='fags' entries={fags}/>
        </div>
    );
}
export default Maintab;