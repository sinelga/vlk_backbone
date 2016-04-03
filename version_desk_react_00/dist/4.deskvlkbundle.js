webpackJsonp([4],{

/***/ 484:
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

	var _BlogItemsDashboard = __webpack_require__(485);

	var _BlogItemsDashboard2 = _interopRequireDefault(_BlogItemsDashboard);

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
	var topic = "";

	var BlogItems = function (_React$Component) {
		_inherits(BlogItems, _React$Component);

		function BlogItems(props) {
			_classCallCheck(this, BlogItems);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItems).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(BlogItems, [{
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
				//		console.log("Willmount Details",this.props.params)
				topic = this.props.params.topic;
				site = document.domain;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("Didmount blogItems",this.props.params)

				if (Object.keys(this.props.params).length === 1) {

					this.loadajax('/ru_RU_finland_blog.json', false);
					//			 this.loadajax('/www/'+site+'/blog/'+topic+'/'+topic+'.json',true)
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("Details componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				var oldId = prevProps.params.stitle;
				var newId = this.props.params.stitle;

				if (newId !== oldId) {

					if (Object.keys(this.props.params).length === 1) {

						this.loadajax('/ru_RU_finland_blog.json', false);
						//					 this.loadajax('/www/'+site+'/blog/'+topic+'/'+topic+'.json',true)
					}
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var meta = {};

				meta = {
					title: topic,
					description: topic + " index"
				};

				//	var contents = this.state.mark.Contents
				//	console.log(this.state.data)
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(
						'h2',
						null,
						this.props.params.topic
					),
					this.props.children || _react2.default.createElement(_BlogItemsDashboard2.default, { data: this.state.data, stopic: this.props.params.stopic })
				);
			}
		}]);

		return BlogItems;
	}(_react2.default.Component);

	module.exports = BlogItems;

/***/ },

/***/ 485:
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

	var BlogItemsDashboard = function (_React$Component) {
		_inherits(BlogItemsDashboard, _React$Component);

		function BlogItemsDashboard(props) {
			_classCallCheck(this, BlogItemsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemsDashboard).call(this, props));

			_this.state = {
				data: {},
				stopic: "",
				topic: ""

			};

			return _this;
		}

		_createClass(BlogItemsDashboard, [{
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
				this.setState({ stopic: nextProps.stopic });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];
				//		  console.log(this.state.data)

				if (Object.keys(this.state.data).length > 0) {

					Object.getOwnPropertyNames(this.state.data).forEach(function (val, idx, array) {

						if (this.state.stopic === val) {
							this.state.data[val].forEach(function (val) {

								this.state.topic = val.Topic;
								var key = val + val.Stitle;
								var outlink = '/blog/' + this.state.stopic + '/' + val.Stitle + '.html';
								//						  console.log(outlink)
								htmlTableItems.push(_react2.default.createElement(
									'tr',
									{ key: key },
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(
											_reactRouter.Link,
											{ to: outlink },
											val.Title
										)
									)
								));
							}.bind(this));
						}
					}.bind(this));
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						this.state.topic
					),
					_react2.default.createElement(
						'h4',
						null,
						'Статьи:'
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

		return BlogItemsDashboard;
	}(_react2.default.Component);

	exports.default = BlogItemsDashboard;

/***/ }

});