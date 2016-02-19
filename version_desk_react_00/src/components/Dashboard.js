import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap'
import Firebase from 'firebase'

var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');

class Dashboard extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: []
	    	
	    }
	    
	}    
	
	componentDidMount(){
		
		console.log("mount Dashboard ")

		var vvdata = []
		baseRef.on("value", function(snapshot) {
			
			snapshot.forEach(function(vdata) {
				
//				if (typeof vdata.val().id !=  "undefined") {	
					var vobj = {
						id: vdata.val().id, title: vdata.val().title, details: vdata.val().details
					}
					vvdata.push(vobj)	
//			}
			
		});

			this.setState({data: vvdata })
					
	}.bind(this));
		
		
		
	}
	
	componentWillReceiveProps(){
		console.log("Dashboard  receive props")
		console.log(this.props.data)
//		this.setState({data: this.s })
		
//		this.props.data.forEach(function(ddata) {
//			
//			console.log(ddata)
//			
//		});
		
	}
	componentWillUpdate(nextProps,nextState){
		
//		console.log("Dashboard WillUpdate"+nextProps)
//		console.log("Dashboard WillUpdate"+nextState)
		
	}
	render() {
		
	var rentobjs = this.state.data
	var links = [];
//	
	console.log(rentobjs)
	
	
	rentobjs.forEach(function(obj){
		console.log(obj.title)
		var permlink = "/"+obj.id
		var title =obj.title
		var key = obj.id
		links.push(<ListGroupItem><Link key={`${key}`} to={permlink}>{title} </Link></ListGroupItem>)
	
	})
	
    return (
    	    		    		
      <div>
      <h2>Переводы консультации</h2>
      <Row>
      	<Col xs={6} md={4}><Image src='/img/logo.jpg' thumbnail responsive/></Col>
      	<Col xs={12} md={8}><p className='cvbigtitle'>SUOMI</p><p className='name'>Александр Волков</p></Col>
      </Row>
      
      <Row>
    	<Col xs={6} md={4}><ListGroup>{links} </ListGroup> </Col>
    	<Col xs={12} md={8}>lslslslslslssl</Col>
    	
      </Row>      
      
       
      
                
      </div>
    )
  }
}

export default Dashboard