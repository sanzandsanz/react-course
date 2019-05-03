"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function Form(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { onSubmit: props.handleAddItem },
            React.createElement("input", { type: "text", name: "itemname" }),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                " Add "
            )
        )
    );
};

var DeleteButton = function DeleteButton(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "a",
            { href: "#", onClick: function onClick() {
                    props.executeDeleteItem(props.deleteItem);
                } },
            " Delete "
        )
    );
};

var DeleteAll = function DeleteAll(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRemoveAllItems },
            " Remove All"
        )
    );
};

var Grocery = function (_React$Component) {
    _inherits(Grocery, _React$Component);

    function Grocery(props) {
        _classCallCheck(this, Grocery);

        var _this = _possibleConstructorReturn(this, (Grocery.__proto__ || Object.getPrototypeOf(Grocery)).call(this, props));

        _this.handleAddItem = _this.handleAddItem.bind(_this);
        _this.handleRemoveAllItems = _this.handleRemoveAllItems.bind(_this);
        _this.executeDeleteItem = _this.executeDeleteItem.bind(_this);

        _this.state = {
            items: ["apple", "ball"]
        };
        return _this;
    }

    _createClass(Grocery, [{
        key: "handleAddItem",
        value: function handleAddItem(event) {
            var _this2 = this;

            console.log(event);
            event.preventDefault();

            var item = event.target.elements.itemname.value;

            this.setState(function (prevState, p) {
                console.log('prvious state');
                console.log(prevState.items);

                if (!prevState.items.includes(item)) {
                    _this2.state.items.push(item);
                }

                return {
                    items: _this2.state.items
                };
            });

            console.log(this.state.items);
        }
    }, {
        key: "handleDeleteItem",
        value: function handleDeleteItem(event) {
            event.preventDefault();
            console.log('deleting');
        }
    }, {
        key: "executeDeleteItem",
        value: function executeDeleteItem(item) {
            console.log('item to be deleted ' + item);

            this.setState(function (prevState) {
                var updatedItems = prevState.items.filter(function (i) {
                    return i != item;
                });
                console.log(updatedItems);
                return {
                    "items": updatedItems
                };
            });
        }
    }, {
        key: "handleRemoveAllItems",
        value: function handleRemoveAllItems() {
            var _this3 = this;

            console.log('remove all');

            this.setState({ items: [] }, function () {
                console.log(_this3.state.items);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    this.state.items.map(function (f) {
                        return React.createElement(
                            "li",
                            { key: f, value: f },
                            " ",
                            f,
                            " ",
                            React.createElement(DeleteButton, { executeDeleteItem: _this4.executeDeleteItem, deleteItem: f })
                        );
                    })
                ),
                React.createElement(Form, { handleAddItem: this.handleAddItem }),
                React.createElement(DeleteAll, { handleRemoveAllItems: this.handleRemoveAllItems })
            );
        }
    }]);

    return Grocery;
}(React.Component);

ReactDOM.render(React.createElement(Grocery, { name: "grocery" }), document.getElementById('app'));
