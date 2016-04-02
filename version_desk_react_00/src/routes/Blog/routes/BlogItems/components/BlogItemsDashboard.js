import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogItemsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	topic: ""
	    
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
//		console.log("DetailsDashboard  receive props",nextProps.data.title)
		
		this.setState({data: nextProps.data})
		this.setState({topic: nextProps.topic})
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlTableItems =[]
//		  console.log(this.state.data)
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  Object.getOwnPropertyNames(this.state.data).forEach(function(val, idx, array) {
				  
				  if (this.state.topic === val) {
					  this.state.data[val].forEach(function(val) {
						  
						  let key = val+val.Stitle
						  let outlink = '/blog/'+this.state.topic+'/'+val.Stitle+'.html'
//						  console.log(outlink)
						  htmlTableItems.push(<tr key={key}><td><Link to={outlink}>{val.Title}</Link></td></tr>)
					  }.bind(this));	  
				  }
				  
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      <h3>Items</h3>
      <Table responsive>
      	<tbody>
      	{htmlTableItems}
      	</tbody>
      </Table>
      
      </div>
    )
  }
}

export default BlogItemsDashboard
