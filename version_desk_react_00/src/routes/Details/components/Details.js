import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well,Input,ButtonInput, Row,Col,Alert } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'

var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
var id


class Details extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    name: '',
	    email: '',
	    phone: '',
	    info: '',
	    alertVisible: false,
	    contactInserted: false
	   }

	  this.handleSubmit = this.handleSubmit.bind(this)
	  this.handleNameChange = this.handleNameChange.bind(this)
	  this.handleEmailChange = this.handleEmailChange.bind(this)
	  this.handlePhoneChange = this.handlePhoneChange.bind(this)
	  this.handleInfoChange = this.handleInfoChange.bind(this)
	  
	  this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
	  this.handleAlertShow = this.handleAlertShow.bind(this)
	  
	  this.handleContactNotInserted = this.handleContactNotInserted.bind(this)
	  this.handleContactInserted = this.handleContactInserted.bind(this)	  
	}
	
	handleAlertDismiss() {
		    this.setState({alertVisible: false});
	}

	handleAlertShow() {
		    this.setState({alertVisible: true});
	}	

	handleContactNotInserted() {
	    this.setState({contactInserted: false});
	}

	handleContactInserted() {
	    this.setState({contactInserted: true});
	}	
	
	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)

	}	
	
	componentDidMount(){		

		console.log("componentDidMount details",this.props.params)
		id = this.props.params.id
		var obj = {}
		baseRef.orderByChild("id").equalTo(id).on("value", function(snapshot) {

			snapshot.forEach(function(snapshot) {

				obj = {
					id: snapshot.val().id, title: snapshot.val().title, details: snapshot.val().details
				}
				return
				
			})			  
			this.setState({data: obj})  
		}.bind(this));
		
						   
	}
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
	}
	handleSubmit(e) {
		e.preventDefault()
 
		if (this.state.name !=='' && ( this.state.email !=='' || this.state.phone !=='')) {
		
			var clienttoinsert = {name: this.state.name.trim(),email: this.state.email.trim(),phone: this.state.phone.trim(),info:this.state.info.trim(),title:this.state.data.title.trim()}
		
			var now = new Date().toLocaleString();
			var clientRef = baseRefClients.child(now);
			clientRef.set(clienttoinsert)
			this.state.name=''
			this.state.email=''
			this.state.phone=''
			this.state.info=''	
			
			this.handleContactInserted()
			setTimeout(this.handleReturn, 7000);
//			this.handleReturn()
		} else {
			
			this.handleAlertShow()
		}

	 }
	 handleNameChange(e) {
		    this.setState({name: e.target.value});
	 }
	 handleEmailChange(e) {
		    this.setState({email: e.target.value});
	 }	 
	 handlePhoneChange(e) {
		    this.setState({phone: e.target.value});
	 }
	 handleInfoChange(e) {
		    this.setState({info: e.target.value});
	 }	 
	 componentWillUnmount(){		 

		baseRef.off()
		baseRefClients.off()
	 } 
  render() {

	  var data = this.state.data
	  var imgactivity = "/img/activity/"+data.id+".jpg"

//	  
//	  const meta = {
//		      title: "data.Moto",
//	}
//	  
	  var alarm = []
	  if (this.state.alertVisible) {
		   
		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={4000}>Необходимо ввести имя и номер телефона или емаил!</Alert>)
		  
	  }
	  if (this.state.contactInserted) {
		   
		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleContactNotInserted} dismissAfter={4000}>Ваши данные успешно введены!</Alert>)
		  
	  }	  
	  
	  
    return (
      <div>
      <Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Возврат</Button>
      <Well bsSize="large"><h2> {data.title}</h2></Well>
      
      
      <Row>
    	<Col xs={6} md={4}><Image src={imgactivity} thumbnail responsive/></Col>
    	<Col xs={12} md={8}>
    	
    	{alarm}
    	<h3>Оставьте свои данные: </h3>

    	
        <form>
      		<Input type="text" label="Имя" value={this.state.name} onChange={this.handleNameChange} placeholder="Введите Имя" />
      		<Input type="email" label="Е-маил" value={this.state.email} onChange={this.handleEmailChange} placeholder="Введите Е-маил" />
      		<Input type="phone" label="Телефон" value={this.state.phone} onChange={this.handlePhoneChange}  placeholder="Введите Телефон" />
      		<Input type="textarea" label="Доп. информация" value={this.state.info} onChange={this.handleInfoChange} placeholder="Доп. информация" />		
      		<ButtonInput bsStyle="primary" onClick={this.handleSubmit} value="Введите данные" />      		
      	</form>
    	
    	</Col>
    </Row>
      
      

  		   	
      </div>
    )
  }

}

module.exports = Details