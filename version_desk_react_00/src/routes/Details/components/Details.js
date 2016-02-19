import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Modal  } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
//import Chat from './Chat'
import Firebase from 'firebase'

var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');

class Details extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: []
//	    	timerHandler: '',
//	    		showModal: false 	
	    }
//	    this.handleToggleDetailsChat=this.handleToggleDetailsChat.bind(this)
//	     this.handleModal=this.handleModal.bind(this)
	  }
	

	
	loadajax(id) {

//		let hostname = location.hostname
//		
//		if (hostname =='127.0.0.1') {
//			hostname='www.test.com'
//		}
//		var request = new XMLHttpRequest();
//		request.open('GET', 'http://'+hostname+':8000/api/'+id, true);
//
//		request.onload = function() {
//		  if (request.status >= 200 && request.status < 400) {
//		    // Success!			  
//		    var data = JSON.parse(request.responseText);
//		    this.setState({data: data});
//		    console.log("data",data)
//		    
//		  } else {
//			  
//			 console.log("not found equest.status ",equest.status) 
//		    // We reached our target server, but it returned an error
//
//		  }
//		}.bind(this);
//
//		request.onerror = function() {
//		  // There was a connection error of some sort
//		};
//
//		request.send();
		
	}
	
//	handleToggleDetailsChat(){
//
//		var dnode = ReactDOM.findDOMNode(this.refs.chat).style.display
//		
//		if (dnode === 'none') {
//			
//			this.setState({timerHandler: 'on'})
//			ReactDOM.findDOMNode(this.refs.chat).style.display =''
//			ReactDOM.findDOMNode(this.refs.details).style.display ='none'	
//			
//		} else {
//			this.setState({timerHandler: 'off'})
//			ReactDOM.findDOMNode(this.refs.chat).style.display ='none'
//			ReactDOM.findDOMNode(this.refs.details).style.display =''			
//			
//		}
//		
//	}
//	
//	handleReturn(){
//		browserHistory.push('/')
//		
//	}
	
//	handleModal() {
//		
//		if (this.state.showModal) {
//			this.setState({ showModal: false })
//		} else {
//			
//			this.setState({ showModal: true })
//			
//		}
//		
//	}
	
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)
		
//		this.loadajax(this.props.params.id);
		
		
	}	
	
	componentDidMount(){		
//		console.log("mount Details")
//		ReactDOM.findDOMNode(this.refs.chat).style.display ='none'
		
		
		baseRef.orderByChild("id").equalTo("2").on("value", function(snapshot) {
			  console.log(snapshot.val()[2].title);
			});

				   
	}
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details")

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
 }
				
  render() {

//	  var data = this.state.data
//	  
//	  const meta = {
//		      title: "data.Moto",
//	}
//	  
//	  let hostname = location.hostname
//		
//		if (hostname =='127.0.0.1') {
//			hostname='www.test.com'
//		}
//	  var imglink ="http://"+hostname+":8000/img/"+data.ImgId+"/"+data.Img_file_name+"/250/350"
//	  var fullimagelink = "http://"+hostname+":8000/fullimage/"+data.ImgId+"/original/"+data.Img_file_name
//	  <img src={fullimagelink} style={{width: 100+`%`}}  />         
	  
    return (
      <div>
    
llslslssl33333
  		   	
      </div>
    )
  }

}

module.exports = Details