import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,ListGroup,ListGroupItem,Thumbnail} from 'react-bootstrap'
import Firebase from 'firebase'

//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
var baseRef = new Firebase('https://vlk-production.firebaseio.com');

class Dashboard extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: []
	    	
	    }
	    
	}    
	
	componentDidMount(){

		var vvdata = []
		baseRef.on("value", function(snapshot) {
			
			snapshot.forEach(function(vdata) {
	
				var vobj = {
					id: vdata.val().id, title: vdata.val().title, details: vdata.val().details
				}
				vvdata.push(vobj)	
			
			});

			this.setState({data: vvdata })
					
		}.bind(this));
				
	}
	
	componentWillReceiveProps(){
		console.log("Dashboard  receive props")
		console.log(this.props.data)

		
	}
	componentWillUpdate(nextProps,nextState){
		
//		console.log("Dashboard WillUpdate"+nextProps)
//		console.log("Dashboard WillUpdate"+nextState)
		
	}
	
	 componentWillUnmount(){		 
//		console.log("Dashboard componentWillUnmount")
		baseRef.off()	
	 } 
	
	
	render() {
		
	var rentobjs = this.state.data
	var links = [];
	
	rentobjs.forEach(function(obj){
		
		var permlink = "/"+obj.id
		var title =obj.title
		var key = obj.id
		links.push(<ListGroupItem key={`${key}`}><Link  to={permlink}>{title}</Link></ListGroupItem>)
	
	})
	
    return (
    	    		    		
      <div>
   
      <Row>
      	<Col xs={6} md={4}></Col> 
  		<Col xs={12} md={8}><h2>Переводы консультации работа</h2></Col>
		
  	  </Row> 
      
      <Row>
      	<Col xs={6} md={4}><Image src='/img/logo.jpg' thumbnail responsive/></Col>
      	<Col xs={12} md={8}><p className='cvbigtitle'>SUOMI/Финляндия</p><p className='name'>Александр Волков</p></Col>
      </Row>
      
      <Row>
         
       	<Col xs={6} md={4}><Thumbnail src='/img/TyoElama.jpg' thumbnail responsive> <h4>Работа и жизнь в Финляндии</h4> </Thumbnail></Col>       
       	<Col xs={12} md={8}><ListGroup>{links}</ListGroup></Col>
    	
      </Row>
      

                            
      </div>
    )
  }
}

export default Dashboard
