import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';

function App() {
  const initialValues = { username: "", email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name,value}=e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!values.username){
      errors.username = "Username is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    }else if(!regex.text(values.email)){
      errors.email = "This is not a valid email";
    }
    return errors;
  };
  return(
    <form 
      class ="signup-form" 
      action="/register" 
      method="post"
      onSubmit={handleSubmit}
    >
    <h1>Registration Form </h1> 
    <div className="form">
        {/*Form body */}
        <div className="form-body">
            {/*Username*/}
            <div class = "form-group">
              <label className="label-title" for="username">Username *</label>
              <input 
                className="form-input" 
                type="text" 
                name="username" 
                placeholder="Enter your Username" 
                required = "required" 
                value = {formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            {/*Email*/}
            <div className="form-group">
                <label className="label-title" for="email">Email *</label>
                <input  
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Enter your Email" 
                  required = "required" 
                  value = {formValues.email}
                  onChange={handleChange}
                />
            </div>
            <p>{formErrors.email}</p>
            {/*Mobile*/}
            <div className="form-group">
                <label className="label-title" for="Mobile">Mobile No.</label>
                <input 
                  className="form-input" 
                  type="tel"  
                  name="mobile" 
                  pattern="[0-9]{10}" 
                  placeholder="Enter your Mobile Number" 
                />
            </div>
            {/*City and State*/}
            <div className="horizontal-group">
              <div class="form-group left">
                <label className="label-title" for="City">City</label>
                <input 
                  className="form-input" 
                  type="text"  
                  name="city" 
                  placeholder="Enter your City" 
                />
              </div>
              <div className="form-group right">
                <label className="label-title" for="State">State</label>
                <input 
                  className="form-input" 
                  type="text"  
                  name="state" 
                  placeholder="Enter your State"/>
              </div>
            </div>
            {/*Country*/}
            <div className="form-group">
                <label className="label-title" for="Country">Country</label>
                <input 
                  className="form-input" 
                  type="text"  
                  name="country" 
                  placeholder="Enter your Country" 
                />
            </div>
            {/*Message*/}
            <div className="form-group">
                <label className="label-title" for="Message">Message</label>
                <textarea 
                  className="form-input" 
                  rows = "4" cols = "50" 
                  name="message"
                />
            </div>
        </div>
        {/*Message*/}
        <div class="form-footer">
          <span> * required</span>
          <button type="submit" class="btn">Register</button>
        </div>
      </div> 
    </form>     
  )       
}

export default App;
