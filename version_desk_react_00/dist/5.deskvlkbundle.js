webpackJsonp([5],{

/***/ 485:
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

	var _BlogItemDetailsDashboard = __webpack_require__(486);

	var _BlogItemDetailsDashboard2 = _interopRequireDefault(_BlogItemDetailsDashboard);

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
	var stitle = "";
	var stitlesplit = "";

	var BlogItemDetails = function (_React$Component) {
		_inherits(BlogItemDetails, _React$Component);

		function BlogItemDetails(props) {
			_classCallCheck(this, BlogItemDetails);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetails).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(BlogItemDetails, [{
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
				//		console.log("Willmount Details",this.props.params.id)
				site = document.domain;
				topic = this.props.params.topic;
				stitle = this.props.params.stitle;
				stitlesplit = this.props.params.stitle.split('.')[0];
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("Didmount blogItems",this.props.params)

				this.loadajax('/en_US_programming_blog.json', false);
				this.loadajax('/www/' + site + '/blog/' + topic + '/' + stitlesplit + '/' + stitle + '.json', true);
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

				//		console.log("Details componentDidUpdate")
				//		console.log("BlogItemDetails componentDidUpdate",prevProps.params,this.props.params)

				var oldId = prevProps.params.stitle;
				var newId = this.props.params.stitle;

				if (newId !== oldId) {

					this.loadajax('/www/' + site + '/blog/' + topic + '/' + stitle + '/' + stitle + '.html.json', true);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var meta = {};

				var res = stitle.split(".")[0].split("-");

				var title = "";

				res.map(function (split) {
					title = title + split + " ";
				});

				meta = {
					title: topic + " " + title,
					description: topic + " " + title + "details"
				};
				var contents = this.state.mark.Contents;
				//	console.log(this.state.data)
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					this.props.children || _react2.default.createElement(_BlogItemDetailsDashboard2.default, { data: this.state.data, topic: this.props.params.topic, stitle: this.props.params.stitle }),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						contents
					)
				);
			}
		}]);

		return BlogItemDetails;
	}(_react2.default.Component);

	module.exports = BlogItemDetails;

/***/ },

/***/ 486:
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

	var BlogItemDetailsDashboard = function (_React$Component) {
		_inherits(BlogItemDetailsDashboard, _React$Component);

		function BlogItemDetailsDashboard(props) {
			_classCallCheck(this, BlogItemDetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetailsDashboard).call(this, props));

			_this.state = {
				data: {},
				topic: "",
				stitle: "",
				title: ""

			};

			return _this;
		}

		_createClass(BlogItemDetailsDashboard, [{
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

				var stitlesplit = nextProps.stitle.split('.')[0];

				this.setState({ data: nextProps.data });
				this.setState({ topic: nextProps.topic });
				this.setState({ stitle: stitlesplit });
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];
				//		  console.log(this.state.data)
				var title = "";

				if (Object.keys(this.state.data).length > 0) {

					Object.getOwnPropertyNames(this.state.data).forEach(function (val, idx, array) {

						if (this.state.topic === val) {

							this.state.data[val].forEach(function (val) {

								if (this.state.stitle === val.Stitle) {
									//							  console.log(val)
									var key = val + val.Stitle;
									title = val.Title;

									htmlTableItems.push(_react2.default.createElement(
										'tr',
										{ key: key },
										_react2.default.createElement(
											'td',
											null,
											val.Contents
										)
									));
								}
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
						title
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

		return BlogItemDetailsDashboard;
	}(_react2.default.Component);

	exports.default = BlogItemDetailsDashboard;

/***/ }

});