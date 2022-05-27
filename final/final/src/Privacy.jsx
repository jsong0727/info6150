import './Privacy.css';
import {useState} from 'react';
import Accordion from './Accordion.jsx';

const dataSet = {
    'Data Protection Principles':
    'Our Website is committed to processing data in accordance with its responsibilities under the GDPR.',
    'Lawful, Fair and Transparent Processing':
    'To ensure its processing of data is lawful, fair and transparent, Our Website shall maintain a Register of Systems. The Register of Systems shall be reviewed at least annually. Individuals have the right to access their personal data and any such requests made to the Our Website shall be dealt with in a timely manner. ',
    'Lawful Purposes':
    'Where consent is relied upon as a lawful basis for processing data, evidence of opt-in consent shall be kept with the personal data. Where communications are sent to individuals based on their consent, the option for the individual to revoke their consent should be clearly available and systems should be in place to ensure such revocation is reflected accurately in the systems. ',
    'Data Minimisation':
    'We shall ensure that personal data are adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed. We may store information on a customer as follows and where, but we never handle customer information if its unrelated to our business and not in helping our customer have an enjoyable, rewarding and secure experience.',
    
}

function Privacy(){
    const [data] = useState(dataSet);
 
    return(
        <div className='privacy'>
            <div>
                <a class="skip_link" href="/Home">Home Page</a> 
            </div>
            <Accordion entries = {data}/>
        </div>
    )
}
export default Privacy;