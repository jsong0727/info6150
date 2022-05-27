import './Support.css';
import { useState, useReducer } from 'react';

const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}

function Support(){
        const[formData, setFormData] = useReducer(formReducer, {});
        const [submitting, setSubmitting] = useState(false);
        const handleSubmit = event => {
            event.preventDefault();
            setSubmitting(true);
            alert('We have received your information')
        }

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)

        const setChange = event => {
            const isCheckbox = event.target.type === "checkbox";
            setFormData({
                name: event.target.name,
                value: isCheckbox ? event.tarte.checked : event.target.value,
            });
        }
    
    return(

        <div>
            <div>
                <a class="skip_link" href="/Home">Home Page</a> 
            </div>
            <div className='contact_me'> 
                <h2>Get In Touch</h2>
                <h3>If you love snowboarding as much as I do.</h3>
                <p className='contact_message'>Love snowboarding as much as I do? Let's talk about how awesome it is! We can enjoy the dumping snow together in the mountains!</p>
                <a className='btn' href='mailto:song.jiayin@northeastern.edu'>CONTACT ME</a>
            </div>

            <div className='client_form'>
                <h4>Tell Me About Yourself:</h4>
                {submitting &&
                    <div>
                        <ul className='client_info'>
                            {Object.entries(formData).map(([name,value]) => (
                                <li key={name}>{name}: {value.toString()}</li>
                            ))}
                        </ul>
                    </div>}
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <p>Enter your name: </p>
                    <input name='name' onChange={setChange} value={formData.name || ''}/>
                    <p>Enter your email: </p>
                    <input type='email' name='email' onChange={setChange} value={formData.email || ''}/>
                    
                    <label>
                        <p>Skill Level: </p>
                        <select name="skill" onChange={setChange} value={formData.skill || ''}>
                            <option value="">Please select</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </label>
                    
                <div> 
                    <button className='btn' type='submit'>Submit</button>
                    {submitting && <div className='gg-spinner'></div>}            
                </div>
                
                </fieldset> 
                </form>
            </div>

            <div className='social_media'>
                <a className='footer_link' href='https://www.linkedin.com/in/songjiayin0727/'>LinkedIn</a>
                <a className='footer_link' href='https://www.instagram.com/jamiesong_93/?hl=en'>Instagram</a>
                <a className='footer_link' href='https://github.com/jsong0727'>Github</a>
                <p className='copyright'>© 2022 Jiayin Song</p>
            </div>

        </div>
    );
}
export default Support;