import {React, useState, useEffect} from 'react'
import profileImg from '../images/Saidineshvasireddy.jpg'
function Contact() {

    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = 
        useState({
            name: '',
            email: '',
            service: '',
            rating: '',
            comments: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
          
          const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch('http://localhost:5000/submit-feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            
                const result = await response.json();
                if (response.ok) {
                    setFormData({
                        name: '',
                        email: '',
                        service: '',
                        rating: '',
                        comments: ''
                    });
                    alert(result.message);
                } else {
                    alert('Failed to submit feedback.');
                }
            }

            catch(error) {
                alert('To Submit feedback you need to run the node server as front-end application has no permission to create the feedback.xls file in the public/feedback folder. To do so clone the repository and run "node server.js" and "npm start" simultaneously.');
            }
            
        };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);


    return(
        <center>
            <div className='contact'>
                <div className={`profilecard ${isVisible ? 'visible' : ''}`}>
                    <h2>Developer</h2>
                    <img src={profileImg} alt='saidineshvasireddy_profileimage.jpg'/>
                    <h3>Sai Dinesh Vasireddy</h3>
                    <h4><a href='mailto:saidinesh.vasireddy@slu.edu'>saidinesh.vasireddy@slu.edu</a></h4>
                    <p>Graduate Student At Saint Louis University</p>
                    <p>Computer Science and Engineering</p>
                </div>
            </div>
            <div className={`form-container ${isVisible ? 'visible' : ''}`}>
                <h3>Feedback Form</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Service Used:</label>
                        <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Consulting">Consulting</option>
                        </select>
                    </div>
                    <div>
                        <label>How would you rate our service?</label>
                        <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        >
                        <option value="">Select a rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                        </select>
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </center>
    );
}

export default Contact;