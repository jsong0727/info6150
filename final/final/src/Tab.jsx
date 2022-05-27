import './Tab.css';
import { useState } from 'react';
import rate from './image/640.png';

function Tab( { entries }) {
    const [isEntryOpen, setIsEntryOpen] = useState({
        'Green': true
    })

    function toggleEntry(title) {
        setIsEntryOpen({
        ...setIsEntryOpen,
        [title]: !setIsEntryOpen[title],
        });
    }

    return (
        <div className="tab">
            <div>
                <a class="skip_link" href="/Home">Home Page</a> 
            </div>
            { Object.keys(entries).map( title => {
                    const isOpen = isEntryOpen[title];
                    
                    return ( 
                    <div className='tab__tabs'>
                        <div 
                            key={title} 
                            className={`tab__entry' ${isOpen ? 'tab__active' : ''}`}
                        >
                            <button 
                                onFocus={
                                    () => toggleEntry(title)
                                }
                                onClick={
                                    () => toggleEntry(title)
                                }
                                className='tab__title'>
                                    {title}
                            </button>
                        </div>  
                        {isOpen && 
                            <div className="tab__body">
                            {entries[title]}
                            <img className="img" src={rate}/>
                            </div>}
                        
                        </div>
                    );
                })
            }   
        </div>
    );
}

export default Tab;

