import React from 'react'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'
import GlobalNav from './GlobalNav'
import Dashboard from './Dashboard'


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
	
	componentDidMount(){
		
//		console.log("mount App ")
				   
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
