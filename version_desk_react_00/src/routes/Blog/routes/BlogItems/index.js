module.exports = {
		  path: ':topic',
		  
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/BlogItemDetails')
	
		      ])
		    })
		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/BlogItems')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}