'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerApp = function (_React$Component) {
    _inherits(PlayerApp, _React$Component);

    function PlayerApp(props) {
        _classCallCheck(this, PlayerApp);

        var _this = _possibleConstructorReturn(this, (PlayerApp.__proto__ || Object.getPrototypeOf(PlayerApp)).call(this, props));

        _this.state = {
            players: ['sanjay']
        };
        return _this;
    }

    _createClass(PlayerApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'List of Player'
                ),
                this.state.players,
                React.createElement(Player, null)
            );
        }
    }]);

    return PlayerApp;
}(React.Component);

var Player = function (_React$Component2) {
    _inherits(Player, _React$Component2);

    function Player(props) {
        _classCallCheck(this, Player);

        var _this2 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this2.state = {
            name: ''
        };
        return _this2;
    }

    _createClass(Player, [{
        key: 'addPlayer',
        value: function addPlayer(e) {
            console.log('form submitted');
            e.preventDefault();

            console.log(e.target);
            console.log(e.target.elements);
            var playerName = e.target.elements.playername;

            alert(playerName);
            alert('player added');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addPlayer },
                    React.createElement('input', { type: 'text', name: 'playername' }),
                    React.createElement(
                        'button',
                        null,
                        ' Add Player'
                    )
                )
            );
        }
    }]);

    return Player;
}(React.Component);

ReactDOM.render(React.createElement(PlayerApp, null), document.getElementById('app'));
