'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../utils/helpers');

var _placeholder = require('../style/placeholder');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Belle's placeholder component. Should be used together with Belle's Select
 * 
 * In addition to the props listed below, you can also use any property valid for a HTML div like style, id, className, ...
 * 
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/placeholder?_k=parg4w) documentation.
 *
 * @example Standard example
 * 
 * <!-- basic select example with a placeholder -->
 * <Select>
 * <Placeholder>Choose a City</Placeholder>
 * <Option value="tokyo">Tokyo</Option>
 * <Option value="vienna">Vienna</Option>
 * </Select>
 * 
 */

var placeholderPropTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.object,
  disabledStyle: _react.PropTypes.object,
  _isDisabled: _react.PropTypes.bool
};

/**
 * Returns an object with properties that are relevant for the wrapping div.
 */
function sanitizeChildProps(properties) {
  return (0, _helpers.omit)(properties, Object.keys(placeholderPropTypes));
}

/**
 * Placeholder component.
 *
 * This component should be used together with Belle's Select.
 */

var Placeholder = function (_Component) {
  _inherits(Placeholder, _Component);

  function Placeholder(properties) {
    _classCallCheck(this, Placeholder);

    var _this = _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).call(this, properties));

    _this.state = {
      childProps: sanitizeChildProps(properties)
    };
    return _this;
  }

  _createClass(Placeholder, [{
    key: 'componentWillReceiveProps',


    /**
     * Update the childProps based on the updated properties passed to the
     * Placeholder.
     */
    value: function componentWillReceiveProps(properties) {
      this.setState({ childProps: sanitizeChildProps(properties) });
    }
  }, {
    key: 'render',
    value: function render() {
      var computedStyle = Object.assign({}, _placeholder2.default.style, this.props.style);
      if (this.props._isDisabled) {
        computedStyle = Object.assign({}, computedStyle, _placeholder2.default.disabledStyle, this.props.disabledStyle);
      }

      return _react2.default.createElement(
        'div',
        Object.assign({ style: computedStyle }, this.state.childProps),
        this.props.children
      );
    }
  }]);

  return Placeholder;
}(_react.Component);

Placeholder.displayName = 'Placeholder';
Placeholder.propTypes = placeholderPropTypes;
Placeholder.defaultProps = {
  _isDisabled: false
};
exports.default = Placeholder;

//# sourceMappingURL=Placeholder.js.map