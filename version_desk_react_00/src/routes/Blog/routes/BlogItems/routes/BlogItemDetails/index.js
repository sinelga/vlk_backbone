module.exports = {
		  path: ':stitle',
		  
				
//		  getChildRoutes(location, cb) {
//		    require.ensure([], (require) => {
//		      cb(null, [
//		        require('./routes/BlogItemDetails')
//	
//		      ])
//		    })
//		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/BlogItemDetails')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}