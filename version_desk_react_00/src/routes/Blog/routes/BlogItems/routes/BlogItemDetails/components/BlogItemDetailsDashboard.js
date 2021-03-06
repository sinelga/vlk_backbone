import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogItemDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	stopic: "",
//	    	topic: "",
	    	stitle: "",
//	    	title: ""
	    
	    }

	}

	componentDidMount(){
				
						
	}	
	
	componentWillUpdate(prevProps) {
//		console.log("DetailsDashboard componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("DetailsDashboard componentDidUpdate")
					
	}
	
	componentWillMount(){

		
	}
	componentWillReceiveProps(nextProps){

		var stitlesplit = nextProps.stitle.split('.')[0]

		this.setState({data: nextProps.data})
		this.setState({stopic: nextProps.stopic})
		this.setState({stitle: stitlesplit})

	}	
	
	render() {
				  
		  var htmlTableItems =[]
//		  console.log(this.state.data)
		  var topic =""
		  var title =""
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  Object.getOwnPropertyNames(this.state.data).forEach(function(val, idx, array) {
  
				  if (this.state.stopic === val) {
					  
					  this.state.data[val].forEach(function(val) {
//						  console.log(val)
						  
						  if (this.state.stitle === val.Stitle) {
//							  console.log(val)
							  let key = val+val.Stitle
							  title = val.Title
							  topic = val.Topic

							  htmlTableItems.push(<tr key={key}><td>{val.Contents}</td></tr>)
						  }
					  }.bind(this));	  
				  }
				  
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      <h3>{topic}</h3>
      <h4>{title}</h4>
      <Table responsive>
      	<tbody>
      	{htmlTableItems}
      	</tbody>
      </Table>
      
      </div>
    )
  }
}

export default BlogItemDetailsDashboard
