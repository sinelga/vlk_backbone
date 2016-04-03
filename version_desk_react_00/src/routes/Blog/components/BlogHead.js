import React from 'react'
import {Button,Well,Row,Col,Image} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'


class BlogHead extends React.Component {
	
	
	render() {
		
		return (
			<div>	
				
				
			      <Row>
			      	<Col xs={6} md={4}></Col> 
			  		<Col xs={12} md={8}><h2>Работа консультации переводы</h2></Col>
					
			  	  </Row> 
			      
			      <Row>
			      	<Col xs={6} md={4}><Image src='/img/logo.jpg' thumbnail responsive/></Col>
			      	<Col xs={12} md={8}><p className='cvbigtitle'>SUOMI/Финляндия</p><p className='name'>Александр Волков</p></Col>
			      </Row>
			      
			      <h2>БЛОГ</h2>
		 </div>	      
	)
	}
}

export default BlogHead