import axios from 'axios';
import React from 'react';



class ContactInformation extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    
  
  handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent."); 
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
    }

    resetForm(){
        this.setState({name: "", email: "", message: ""})
      }
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
      }
    

      render(){
return (
    <div className="container-md">
     {/* <h2>Insert Inquiries </h2> */}
     <br />
       <form action="mailto:brooklynminor4@gmail.com" onSubmit={this.handleSubmit.bind(this)} method="post">
             <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" className="form-control" placeholder="Enter your name"/>
             </div>
             <div className="form-group">
               <label htmlFor="exampleFormControlEmail1">Email Address</label>
               <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
             </div>
             <div className="form-group">
               <label for="exampleFormControlTextarea1">Message</label>
               <textarea id="message" className="form-control" maxlength="6000" placeholder="Enter a message" rows="3" required></textarea>
             </div>
             <button type="submit" value="send" style={{backgroundColor: "#a0bbad", borderColor: "#a0bbad",}} className="btn btn-primary">Submit</button>
       </form>
    </div>
    );
    }

}



export default ContactInformation;