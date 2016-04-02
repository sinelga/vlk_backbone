import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
//import StarRating from 'react-star-rating'
import BlogItemsDashboard from './BlogItemsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var site =""
var topic =""	

class BlogItems extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	  this.loadajax = this.loadajax.bind(this)
	}

	loadajax(urlstr,mark){
		
		var request = new XMLHttpRequest();
		request.open('GET', urlstr, true);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    
			    if (mark) {
			    	this.setState({mark: data});
			    } else {
			    	
			    	this.setState({data: data});
			    
			    }
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();
		
	}
	
	
	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params)
		topic = this.props.params.topic
		site =document.domain

	}	
	
	componentDidMount(){
//		console.log("Didmount blogItems",this.props.params)

		if (Object.keys(this.props.params).length === 1) {
			
			 this.loadajax('/en_US_programming_blog.json',false)			 
			 this.loadajax('/www/'+site+'/blog/'+topic+'/'+topic+'.json',true)

				
		}
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
			   
			   if (Object.keys(this.props.params).length === 1) {
				   			   
					 this.loadajax('/en_US_programming_blog.json',false)			 
					 this.loadajax('/www/'+site+'/blog/'+topic+'/'+topic+'.json',true)
				   
				}
		   }
							
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  	  
	  var meta ={}

		meta = {
			title: topic,
			description: topic+" index"
		}
  	   
	  
	var contents = this.state.mark.Contents
//	console.log(this.state.data)
    return (
    	<div>
    	<DocumentMeta {...meta} />
    		<h2>{this.props.params.topic}</h2>
    	            	           
    	      	{this.props.children || <BlogItemsDashboard data={this.state.data} topic={this.props.params.topic} />}
    	          	     
    	  		<div id="background"> {contents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = BlogItems