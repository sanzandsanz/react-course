'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./components/Header.js');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.subtitle = 'This is my sub-title';
        _this.handleDeletOption = _this.handleDeletOption.bind(_this);
        _this.handleAddingNewOption = _this.handleAddingNewOption.bind(_this);

        _this.state = {
            options: ['cricket', 'hockey', 'basketball', 'football']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleAddingNewOption',
        value: function handleAddingNewOption(option) {
            console.log('handle Add Option');
            console.log(option);

            if (!option) {
                return 'Enter valid value to add';
            }

            if (this.state.options.indexOf(option) > 0) {
                return 'This value already exist';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handleDeletOption',
        value: function handleDeletOption() {
            var _this2 = this;

            this.setState(function () {
                console.log(_this2.state.options);
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    ' Hello World !! '
                ),
                _react2.default.createElement(_Header2.default, { title: 'My World !!', subtitle: this.subtitle }),
                _react2.default.createElement(Options, { options: this.state.options, handleDeletOption: this.handleDeletOption }),
                _react2.default.createElement(Action, null),
                _react2.default.createElement(AddOption, { handleAddingNewOption: this.handleAddingNewOption })
            );
        }
    }]);

    return IndecisionApp;
}(_react2.default.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                ' Action'
            );
        }
    }]);

    return Action;
}(_react2.default.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = 'Rugby';

            if (option) {
                this.props.handleAddOption(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    ' ',
                    this.props.options.length
                ),
                _react2.default.createElement(
                    'ol',
                    null,
                    this.props.options.map(function (option) {
                        return _react2.default.createElement(
                            'li',
                            { key: option },
                            ' ',
                            option,
                            ' '
                        );
                    })
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.handleDeletOption },
                    ' DeleteAll '
                )
            );
        }
    }]);

    return Options;
}(_react2.default.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(_react2.default.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.onAddingNewOption = _this6.onAddingNewOption.bind(_this6);

        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'onAddingNewOption',
        value: function onAddingNewOption(e) {
            e.preventDefault();

            console.log(e.target);
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddingNewOption(option);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.error && _react2.default.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.onAddingNewOption },
                    _react2.default.createElement('input', { type: 'text', name: 'option' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        ' Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), document.getElementById('app'));
