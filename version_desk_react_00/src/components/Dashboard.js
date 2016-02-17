import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col} from 'react-bootstrap'

class Dashboard extends React.Component {
  render() {
    

    return (
      <div>
      <h2>Переводы консультации</h2>
      <Row>
      	<Col xs={6} md={4}><Image src='/img/logo.jpg' thumbnail responsive/></Col>
      	<Col xs={12} md={8}><p className='cvbigtitle'>SUOMI</p><p className='name'>Александр Волков</p></Col>
      </Row>
      <h3>Languages</h3>
      <Row>
    	<Col xs={3} md={2}><Image src='/img/programming-languages-1.jpg' thumbnail responsive/></Col>
    	<Col xs={12} md={8}></Col>
      </Row>      
      
                
      </div>
    )
  }
}

export default Dashboard
