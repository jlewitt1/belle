'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../utils/helpers');

var _separator = require('../style/separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Belle's separator component. Should be used together with Belle's Select.
 * 
 * In addition to the props listed below, you can also use any property valid for a HTML div like style, id, className, ...
 *
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/separator?_k=gntekj) documentation.
 * 
 * @example Standard example
 * 
 * <!-- basic select example with separators -->
 * <Select>
 * <Separator>America</Separator>
 * <Option value="san-francisco">San Francisco</Option>
 * <Option value="vancouver">Vancouver</Option>
 * <Separator>Asia</Separator>
 * <Option value="hong-kong">Hong Kong</Option>
 * <Option value="tokyo">Tokyo</Option>
 * <Separator>Europe</Separator>
 * <Option value="berlin">Berlin</Option>
 * <Option value="istanbul">Istanbul</Option>
 * <Option value="rome">Rome</Option>
 * <Option value="vienna">Vienna</Option>
 * </Select>
 * 
 */
var separatorPropTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.object
};

/**
 * Returns an object with properties that are relevant for the wrapping div.
 */
function sanitizeChildProps(properties) {
  return (0, _helpers.omit)(properties, Object.keys(separatorPropTypes));
}

/**
 * Separator component.
 *
 * This component should be used together with Belle's Select.
 */

var Separator = function (_Component) {
  _inherits(Separator, _Component);

  function Separator(properties) {
    _classCallCheck(this, Separator);

    var _this = _possibleConstructorReturn(this, (Separator.__proto__ || Object.getPrototypeOf(Separator)).call(this, properties));

    _this.state = {
      childProps: sanitizeChildProps(properties)
    };
    return _this;
  }

  _createClass(Separator, [{
    key: 'componentWillReceiveProps',


    /**
     * Update the childProperties based on the updated properties passed to the
     * Separator.
     */
    value: function componentWillReceiveProps(properties) {
      this.setState({ childProps: sanitizeChildProps(properties) });
    }
  }, {
    key: 'render',
    value: function render() {
      var computedStyle = Object.assign({}, _separator2.default.style, this.props.style);

      return _react2.default.createElement(
        'div',
        Object.assign({ style: computedStyle }, this.state.childProps),
        this.props.children
      );
    }
  }]);

  return Separator;
}(_react.Component);

Separator.displayName = 'Separator';
Separator.propTypes = separatorPropTypes;
exports.default = Separator;

//# sourceMappingURL=Separator.js.map