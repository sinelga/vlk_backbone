module.exports = {
		  path: 'blog',
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/BlogItems')
	
		      ])
		    })
		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/Blog')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}