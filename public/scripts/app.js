"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fruits = function (_React$Component) {
    _inherits(Fruits, _React$Component);

    function Fruits(props) {
        _classCallCheck(this, Fruits);

        var _this = _possibleConstructorReturn(this, (Fruits.__proto__ || Object.getPrototypeOf(Fruits)).call(this, props));

        _this.handleAddItem = _this.handleAddItem.bind(_this);
        _this.state = {
            items: ["apple", "ball"]
        };
        return _this;
    }

    _createClass(Fruits, [{
        key: "handleAddItem",
        value: function handleAddItem(event) {
            var _this2 = this;

            event.preventDefault();

            var fruit = event.target.elements.fruitname.value;
            var array = this.state.items.push(fruit);
            console.log(array);

            this.setState({ items: array }, function () {
                console.log(_this2.state.items);
            });

            console.log(this.state.items);
        }

        // componentDidMount() {
        //     console.log('component mount');
        // }

        // componentWillMount() {
        //   console.log('component will mount');
        // }

        // componentDidUpdate(){
        //     console.log('component update');
        // }

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    " Fruits "
                ),
                React.createElement(
                    "ul",
                    null,
                    this.state.items.map(function (f) {
                        return React.createElement(
                            "li",
                            { key: f },
                            " ",
                            f,
                            " "
                        );
                    })
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddItem },
                    React.createElement("input", { type: "text", name: "fruitname" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        " Add "
                    )
                )
            );
        }
    }]);

    return Fruits;
}(React.Component);

ReactDOM.render(React.createElement(Fruits, null), document.getElementById('app'));
