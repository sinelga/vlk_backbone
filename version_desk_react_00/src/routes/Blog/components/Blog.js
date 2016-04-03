import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import DocumentMeta from 'react-document-meta'
import BlogDashboard from './BlogDashboard'


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
var title =""	

class Blog extends React.Component {

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
		site =document.domain
				
	}	
	
	componentDidMount(){
//		console.log("Blog Didmount")
		
		
		 if (Object.keys(this.props.params).length === 0) {
			 
			 this.loadajax('/ru_RU_finland_blog.json',false)			 
//			 this.loadajax('/www/'+site+'/blog/blog.json',true)
			 
		}
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
		
		
	}
		
	componentDidUpdate(prevProps) {
		
//		console.log("Blog componentDidUpdate",prevProps.params,this.props.params,Object.keys(this.props.params).length)
		
		   let oldId = prevProps.params.topic
		   let newId = this.props.params.topic
				   
		   if (newId !== oldId) {   
			 if (Object.keys(this.props.params).length === 0) {
				 
				 this.loadajax('/en_US_programming_blog.json',false)				 
				 this.loadajax('/www/'+site+'/blog/blog.json',true)
					
			   }							
		}		
							
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  
//	var contents = this.state.mark.Contents

	var meta ={}
	meta = {
		title: "Blog",
		description: "Blog programming"
	}

    return (
    	<div>
    	<DocumentMeta {...meta} />
    	      <div style={styles.wrapper}> 
    	      <Well>
    	      
    	      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
    	      	<h2>BLOG</h2>
    	           
    	      	{this.props.children || <BlogDashboard data={this.state.data} />}
    	      
    	      </Well>
    	      
    	  		</div>
    	  		
    	
    	</div>
 
    )
  }

}

module.exports = Blog