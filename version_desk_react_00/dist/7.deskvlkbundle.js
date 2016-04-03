webpackJsonp([7],{

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDocumentMeta = __webpack_require__(469);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _BlogDashboard = __webpack_require__(490);

	var _BlogDashboard2 = _interopRequireDefault(_BlogDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import StarRating from 'react-star-rating'


	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
		//  color: light
	};

	var site = "";
	var title = "";

	var Blog = function (_React$Component) {
		_inherits(Blog, _React$Component);

		function Blog(props) {
			_classCallCheck(this, Blog);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Blog).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(Blog, [{
			key: 'loadajax',
			value: function loadajax(urlstr, mark) {

				var request = new XMLHttpRequest();
				request.open('GET', urlstr, true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);

						if (mark) {
							this.setState({ mark: data });
						} else {

							this.setState({ data: data });
						}
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				site = document.domain;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("Blog Didmount")

				if (Object.keys(this.props.params).length === 0) {

					this.loadajax('/ru_RU_finland_blog.json', false);
					//			 this.loadajax('/www/'+site+'/blog/blog.json',true)
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("Blog componentDidUpdate",prevProps.params,this.props.params,Object.keys(this.props.params).length)

				var oldId = prevProps.params.topic;
				var newId = this.props.params.topic;

				if (newId !== oldId) {
					if (Object.keys(this.props.params).length === 0) {

						this.loadajax('/en_US_programming_blog.json', false);
						this.loadajax('/www/' + site + '/blog/blog.json', true);
					}
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				//	var contents = this.state.mark.Contents

				var meta = {};
				meta = {
					title: "Blog",
					description: "Blog programming"
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(
						'div',
						{ style: styles.wrapper },
						_react2.default.createElement(
							_reactBootstrap.Well,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.handleReturn, bsStyle: 'primary', bsSize: 'large', className: 'pull-right' },
								'Return'
							),
							_react2.default.createElement(
								'h2',
								null,
								'BLOG'
							),
							this.props.children || _react2.default.createElement(_BlogDashboard2.default, { data: this.state.data })
						)
					)
				);
			}
		}]);

		return Blog;
	}(_react2.default.Component);

	module.exports = Blog;

/***/ },

/***/ 490:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlogDashboard = function (_React$Component) {
		_inherits(BlogDashboard, _React$Component);

		function BlogDashboard(props) {
			_classCallCheck(this, BlogDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogDashboard).call(this, props));

			_this.state = {
				data: {}
			};

			return _this;
		}

		_createClass(BlogDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("DetailsDashboard componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("DetailsDashboard componentDidUpdate")

			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				//		console.log("DetailsDashboard  receive props",nextProps.data.title)

				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];
				//		  console.log(this.state.data)

				if (Object.keys(this.state.data).length > 0) {

					Object.getOwnPropertyNames(this.state.data).forEach(function (val, idx, array) {
						//				  console.log(this.state.data[val]);
						//				  console.log(idx);
						//				  console.log(array);

						var itemObj = this.state.data[val];

						var visiblelink = itemObj[idx].Topic;
						var key = val;
						var outlink = '/blog/' + val;
						htmlTableItems.push(_react2.default.createElement(
							'tr',
							{ key: key },
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: outlink },
									visiblelink
								)
							)
						));
					}.bind(this));
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						'Index'
					),
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ responsive: true },
						_react2.default.createElement(
							'tbody',
							null,
							htmlTableItems
						)
					)
				);
			}
		}]);

		return BlogDashboard;
	}(_react2.default.Component);

	exports.default = BlogDashboard;

/***/ }

});