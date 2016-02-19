webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(217),
	    childRoutes: [__webpack_require__(470)]
	  }]
	}; /*eslint-disable no-unused-vars */


	//      require('./routes/NotFound'),
	//      require('./routes/Sale'),
	//      require('./routes/Apartment'),
	////      require('./routes/Course'),
	//      require('./routes/Grades'),
	//      require('./routes/Messages')
	//      require('./routes/Profile')
	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactDocumentMeta = __webpack_require__(460);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _GlobalNav = __webpack_require__(467);

	var _GlobalNav2 = _interopRequireDefault(_GlobalNav);

	var _Dashboard = __webpack_require__(468);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import Firebase from 'firebase'

	//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(App, [{
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {

				//		console.log("componentWillUpdate App ")
				//		global.OPERATORS_OBJS =this.state.data;
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {

				console.log("componentWillMount App ");
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
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log("mount App ");
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("App  receive props")
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var meta = {
					title: 'Александр Волков'
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(
						_reactBootstrap.Grid,
						null,
						_react2.default.createElement(_GlobalNav2.default, null),
						this.props.children || _react2.default.createElement(_Dashboard2.default, null)
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark,
	  color: light
	};

	styles.link = {
	  padding: 11,
	  color: light,
	  fontWeight: 200
	};

	styles.activeLink = {

	  background: light,
	  color: dark
	};

	var GlobalNav = function (_React$Component) {
	  _inherits(GlobalNav, _React$Component);

	  function GlobalNav(props, context) {
	    _classCallCheck(this, GlobalNav);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GlobalNav).call(this, props, context));

	    _this.logOut = _this.logOut.bind(_this);
	    return _this;
	  }

	  _createClass(GlobalNav, [{
	    key: 'logOut',
	    value: function logOut() {
	      alert('log out');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;


	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          'div',
	          { style: { float: 'left' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', style: styles.link },
	            'Home'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/rent', style: styles.link, activeStyle: styles.activeLink },
	            'Rent'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/sale', style: styles.link, activeStyle: styles.activeLink },
	            'Sale'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/calendar', style: styles.link, activeStyle: styles.activeLink },
	            'Calendar'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/grades', style: styles.link, activeStyle: styles.activeLink },
	            'Grades'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/messages', style: styles.link, activeStyle: styles.activeLink },
	            'Messages'
	          ),
	          ' '
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { float: 'right' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: styles.link, to: '/profile' },
	            user.name
	          ),
	          ' ',
	          _react2.default.createElement(
	            'button',
	            { onClick: this.logOut },
	            'log out'
	          )
	        )
	      );
	    }
	  }]);

	  return GlobalNav;
	}(_react2.default.Component);

	GlobalNav.defaultProps = {
	  user: {
	    id: 1,
	    name: 'Ryan Florence'
	  }
	};

	exports.default = GlobalNav;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(218);

	var _firebase = __webpack_require__(469);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseRef = new _firebase2.default('https://vlk-firebase.firebaseio.com');

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(Dashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log("mount Dashboard ");

				var vvdata = [];
				baseRef.on("value", function (snapshot) {

					snapshot.forEach(function (vdata) {

						//				if (typeof vdata.val().id !=  "undefined") {	
						var vobj = {
							id: vdata.val().id, title: vdata.val().title, details: vdata.val().details
						};
						vvdata.push(vobj);
						//			}
					});

					this.setState({ data: vvdata });
				}.bind(this));
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				console.log("Dashboard  receive props");
				console.log(this.props.data);
				//		this.setState({data: this.s })

				//		this.props.data.forEach(function(ddata) {
				//			
				//			console.log(ddata)
				//			
				//		});
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {

				//		console.log("Dashboard WillUpdate"+nextProps)
				//		console.log("Dashboard WillUpdate"+nextState)

			}
		}, {
			key: 'render',
			value: function render() {

				var rentobjs = this.state.data;
				var links = [];
				//	
				console.log(rentobjs);

				rentobjs.forEach(function (obj) {
					console.log(obj.title);
					var permlink = "/" + obj.id;
					var title = obj.title;
					var key = obj.id;
					links.push(_react2.default.createElement(
						_reactBootstrap.ListGroupItem,
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ key: '' + key, to: permlink },
							title,
							' '
						)
					));
				});

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						'Переводы консультации'
					),
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 4 },
							_react2.default.createElement(_reactBootstrap.Image, { src: '/img/logo.jpg', thumbnail: true, responsive: true })
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 12, md: 8 },
							_react2.default.createElement(
								'p',
								{ className: 'cvbigtitle' },
								'SUOMI'
							),
							_react2.default.createElement(
								'p',
								{ className: 'name' },
								'Александр Волков'
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 4 },
							_react2.default.createElement(
								_reactBootstrap.ListGroup,
								null,
								links,
								' '
							),
							' '
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 12, md: 8 },
							'lslslslslslssl'
						)
					)
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: ':id',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/Details')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(1, function (require) {
							cb(null, __webpack_require__(471));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ }

});