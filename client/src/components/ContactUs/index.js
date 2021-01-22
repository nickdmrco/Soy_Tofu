import React from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

export default class MyForm extends React.Component {
 constructor(props) {
  super(props);
  this.submitForm = this.submitForm.bind(this);
  this.state = {
   status: ""
  };
 }

 render() {
  const { status } = this.state;
  return (
   <div
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
    }}
   >
    <form
     onSubmit={this.submitForm}
     action="https://formspree.io/f/mgepdygv"
     method="POST"
    >
     <h1>Thank you for reaching out!</h1>
     <label>Email:</label>
     <p><input type="email" name="email" /></p>
     <label>Message:</label>
     <p><input type="text" name="message" /></p>
     <p>{status === "SUCCESS" ? <p>Your email has been submitted and we will be in touch with you shortly.</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}</p>
    </form>
   </div>
  );
 }

 submitForm(ev) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
   if (xhr.readyState !== XMLHttpRequest.DONE) return;
   if (xhr.status === 200) {
    form.reset();
    this.setState({ status: "SUCCESS" });
   } else {
    this.setState({ status: "ERROR" });
   }
  };
  xhr.send(data);
 }
}