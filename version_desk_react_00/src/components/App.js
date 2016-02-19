import React from 'react'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'
import GlobalNav from './GlobalNav'
import Dashboard from './Dashboard'
//import Firebase from 'firebase'


//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');

class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }

  	    
	  }
			
	componentWillUpdate(){
		
//		console.log("componentWillUpdate App ")
//		global.OPERATORS_OBJS =this.state.data;
	}
	
	componentWillMount(){
		
		console.log("componentWillMount App ")
//		console.log(baseRef)
//		var vvdata = [{}]
//		baseRef.on("value", function(snapshot) {
//			   // Alerts "San Francisco"
//			console.log("le" +snapshot.val()[1])
//			var vobj
//			snapshot.forEach(function(vdata) {
////				console.log("title--> "+vdata.val().title)
//				vobj = {
//					id: vdata.val().id, title: vdata.val().title, details: vdata.val().details
//				}
////				this.setState({data: vobj })
////				vvdata.push(vobj)
//			});
//			
//			
////			data.push(snapshot.val())
//			this.setState({data: vobj })
//			
//		}.bind(this));
//		
//		console.log(vvdata.length)
		
//		this.setState({data: vvdata })
		
//		baseRef.map(function(item) {
//			
//			console.log(item)
//			
//		});
//		convertToPlainArray(baseRef)
		
//		this.bindAsArray(baseRef,"vlk");
		
//		global.OPERATORS_OBJS =this.state.data;
	}	
	
	componentDidMount(){
		
		console.log("mount App ")
		
				   
	}
	componentWillReceiveProps(){
//		console.log("App  receive props")
//		console.log(this.props)
	}

	
  render() {
	  
	  const meta = {
		      title: 'Александр Волков',
		      }
	  
	  
    return (
      <div>
      <DocumentMeta {...meta} />	 
   
      <Grid>
      	<GlobalNav />
      	{this.props.children || <Dashboard  />} 
      	      	 
     </Grid>   
     </div>
    )
  }
}

module.exports = App
