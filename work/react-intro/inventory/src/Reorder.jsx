import './reorder.css';

function Reorder({ reOrder,count, increase, decrease}) {
 
    return(
        <div className='reorder'>
            {count ?
            <div>
                <button onClick={ () => increase() }>+</button>
                <button disabled={!count} onClick={ () => decrease() }>-</button>
            </div>
            :
            <div>
                <button onClick={ () => increase() }>+</button>
                <button disabled={!count} onClick={ () => decrease() }>-</button>
                <button className='fadein' onClick={reOrder}>Reorder</button>
            </div>
            }
        </div>
    );
}

export default Reorder;