webpackJsonp([1],{

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(478);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import DocumentMeta from 'react-document-meta'


	//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
	var baseRef = new _firebase2.default('https://vlk-production.firebaseio.com');
	//var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
	var baseRefClients = new _firebase2.default('https://vlk-customers.firebaseio.com');
	var id;

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: {},
				name: '',
				email: '',
				phone: '',
				info: '',
				alertVisible: false,
				contactInserted: false
			};

			_this.handleSubmit = _this.handleSubmit.bind(_this);
			_this.handleNameChange = _this.handleNameChange.bind(_this);
			_this.handleEmailChange = _this.handleEmailChange.bind(_this);
			_this.handlePhoneChange = _this.handlePhoneChange.bind(_this);
			_this.handleInfoChange = _this.handleInfoChange.bind(_this);

			_this.handleAlertDismiss = _this.handleAlertDismiss.bind(_this);
			_this.handleAlertShow = _this.handleAlertShow.bind(_this);

			_this.handleContactNotInserted = _this.handleContactNotInserted.bind(_this);
			_this.handleContactInserted = _this.handleContactInserted.bind(_this);
			return _this;
		}

		_createClass(Details, [{
			key: 'handleAlertDismiss',
			value: function handleAlertDismiss() {
				this.setState({ alertVisible: false });
			}
		}, {
			key: 'handleAlertShow',
			value: function handleAlertShow() {
				this.setState({ alertVisible: true });
			}
		}, {
			key: 'handleContactNotInserted',
			value: function handleContactNotInserted() {
				this.setState({ contactInserted: false });
			}
		}, {
			key: 'handleContactInserted',
			value: function handleContactInserted() {
				this.setState({ contactInserted: true });
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

			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log("componentDidMount details", this.props.params);
				id = this.props.params.id;
				var obj = {};
				baseRef.orderByChild("id").equalTo(id).on("value", function (snapshot) {

					snapshot.forEach(function (snapshot) {

						obj = {
							id: snapshot.val().id, title: snapshot.val().title, details: snapshot.val().details
						};
						return;
					});
					this.setState({ data: obj });
				}.bind(this));
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("componentDidUpdate")

			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(e) {
				e.preventDefault();

				if (this.state.name !== '' && (this.state.email !== '' || this.state.phone !== '')) {

					var clienttoinsert = { name: this.state.name.trim(), email: this.state.email.trim(), phone: this.state.phone.trim(), info: this.state.info.trim(), title: this.state.data.title.trim() };

					var now = new Date().toLocaleString();
					var clientRef = baseRefClients.child(now);
					clientRef.set(clienttoinsert);
					this.state.name = '';
					this.state.email = '';
					this.state.phone = '';
					this.state.info = '';

					this.handleContactInserted();
					setTimeout(this.handleReturn, 7000);
					//			this.handleReturn()
				} else {

						this.handleAlertShow();
					}
			}
		}, {
			key: 'handleNameChange',
			value: function handleNameChange(e) {
				this.setState({ name: e.target.value });
			}
		}, {
			key: 'handleEmailChange',
			value: function handleEmailChange(e) {
				this.setState({ email: e.target.value });
			}
		}, {
			key: 'handlePhoneChange',
			value: function handlePhoneChange(e) {
				this.setState({ phone: e.target.value });
			}
		}, {
			key: 'handleInfoChange',
			value: function handleInfoChange(e) {
				this.setState({ info: e.target.value });
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {

				baseRef.off();
				baseRefClients.off();
			}
		}, {
			key: 'render',
			value: function render() {

				var data = this.state.data;
				var imgactivity = "/img/activity/" + data.id + ".jpg";

				//	 
				//	  const meta = {
				//		      title: "data.Moto",
				//	}
				//	 
				var alarm = [];
				if (this.state.alertVisible) {

					alarm.push(_react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'danger', onDismiss: this.handleAlertDismiss, dismissAfter: 4000 },
						'Необходимо ввести имя и номер телефона или емаил!'
					));
				}
				if (this.state.contactInserted) {

					alarm.push(_react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'danger', onDismiss: this.handleContactNotInserted, dismissAfter: 4000 },
						'Ваши данные успешно введены!'
					));
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ onClick: this.handleReturn, bsStyle: 'primary', bsSize: 'large', className: 'pull-right' },
						'Возврат'
					),
					_react2.default.createElement(
						_reactBootstrap.Well,
						{ bsSize: 'large' },
						_react2.default.createElement(
							'h2',
							null,
							' ',
							data.title
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 4 },
							_react2.default.createElement(_reactBootstrap.Image, { src: imgactivity, thumbnail: true, responsive: true })
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 12, md: 8 },
							alarm,
							_react2.default.createElement(
								'h3',
								null,
								'Оставьте свои данные: '
							),
							_react2.default.createElement(
								'form',
								null,
								_react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'Имя', value: this.state.name, onChange: this.handleNameChange, placeholder: 'Введите Имя' }),
								_react2.default.createElement(_reactBootstrap.Input, { type: 'email', label: 'Е-маил', value: this.state.email, onChange: this.handleEmailChange, placeholder: 'Введите Е-маил' }),
								_react2.default.createElement(_reactBootstrap.Input, { type: 'phone', label: 'Телефон', value: this.state.phone, onChange: this.handlePhoneChange, placeholder: 'Введите Телефон' }),
								_react2.default.createElement(_reactBootstrap.Input, { type: 'textarea', label: 'Техт вашего сообщения', value: this.state.info, onChange: this.handleInfoChange, placeholder: 'Техт вашего сообщения' }),
								_react2.default.createElement(_reactBootstrap.ButtonInput, { bsStyle: 'primary', onClick: this.handleSubmit, value: 'Введите данные' })
							)
						)
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ }

});