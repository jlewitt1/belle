'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('../style/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


/**
 * @description Belle's card component with a light shadow. This component will apply any attribute to the div that has been provided as property & is valid for a div.
 * 
 * Note: The card is designed to work on non-white areas. To provide a nice appearance on white areas please change the box-shadow or borders.
 * 
 * You can also use any property valid for a HTML div like style, id, className, ...
 * 
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/card?_k=q65bro) documentation.
 * 
 * 
 * @example Standard example
 * 
 * <!-- basic card example -->
 * <Card style={{ borderTop: '1px solid #f2f2f2' }}>
 *     Add any content here like paragraphs, images or other components …
 * </Card>
 * 
 * 
 * @example Card with a full-width image
 *
 * <!-- image card example -->
 * <Card style={{ borderTop: '1px solid #f2f2f2',
 *     width: 265,
 *     padding: '20px 0' }}>
 *     <img src="images/ngorongoro_caldera_small.jpg"
 *         width="100%" />
 * </Card>
 * 
 */

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(properties) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, properties));

    var style = properties.style,
        childProps = _objectWithoutProperties(properties, ['style']); // eslint-disable-line no-unused-vars


    _this.childProps = childProps;
    return _this;
  }

  _createClass(Card, [{
    key: 'componentWillReceiveProps',


    /**
     * Update the childProps based on the updated properties passed to the card.
     */
    value: function componentWillReceiveProps(properties) {
      var style = properties.style,
          childProps = _objectWithoutProperties(properties, ['style']); // eslint-disable-line no-unused-vars


      this.childProps = childProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var divStyle = Object.assign({}, _card2.default.style, this.props.style);

      return _react2.default.createElement(
        'div',
        Object.assign({}, this.childProps, { style: divStyle }),
        this.props.children
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.displayName = 'Card';
Card.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.object
};
exports.default = Card;

//# sourceMappingURL=Card.js.map