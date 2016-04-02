import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}		
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
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlTableItems =[]
//		  console.log(this.state.data)
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  Object.getOwnPropertyNames(this.state.data).forEach(function(val, idx, array) {
//				  console.log(val + ' -> ' + this.state.data[val]);
				  let key = val
				  let outlink = '/blog/'+val
				  htmlTableItems.push(<tr key={key}><td><Link to={outlink}>{val}</Link></td></tr>) 
				  
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      <h3>Index</h3>
      <Table responsive>
      	<tbody>
      	{htmlTableItems}
      	</tbody>
      </Table>
      
      </div>
    )
  }
}

export default BlogDashboard
