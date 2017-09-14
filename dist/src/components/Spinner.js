'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spinner = require('../style/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Spinner Component to be used as loading indicator
 * 
 * In addition to the props listed below, you can also use any property valid for a HTML div like style, id, className, ...
 * 
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/spinner?_k=6nbmd7) documentation.
 * 
 * @example Standard example
 * 
 * <!-- basic spinner example -->
 * <Spinner />
 * 
 * @example Button while loading
 * 
 * <!-- loading button example -->
 * <Button primary disabled>
 * Saving <Spinner characterStyle={{ fontSize: 18, color: '#fff' }} />
 * </Button>
 *
 * <Button disabled style={{ marginLeft: 10 }}>
 * Saving <Spinner characterStyle={{ fontSize: 18, color: '#C5C4C4' }} />
 * </Button>
 * 
 * @example Card with a loading indicator
 * 
 * <!-- loading example -->
 * <Card style={{ fontSize: 20,
 *              color: '#666',
 *              textAlign: 'center',
 *              borderTop: '1px solid #f2f2f2',
 *           }}>
 * Loading <Spinner characterStyle={{ fontSize: 20 }} />
 * </Card>
 * 
 */

var animationDelay = function animationDelay(delay) {
  return {
    MozAnimationDelay: delay,
    WebkitAnimationDelay: delay,
    OAnimationDelay: delay,
    animationDelay: delay
  };
};

/**
 * Spinner component to be used as loading indicator.
 */

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          characterProps = _props.characterProps,
          characterStyle = _props.characterStyle,
          childProps = _objectWithoutProperties(_props, ['style', 'characterProps', 'characterStyle']);

      var computedCharStyle = Object.assign({}, _spinner2.default.characterStyle, characterStyle);
      return _react2.default.createElement(
        'span',
        Object.assign({}, childProps, { style: Object.assign({}, _spinner2.default.style, style) }),
        _react2.default.createElement(
          'span',
          Object.assign({}, characterProps, { style: computedCharStyle }),
          '.'
        ),
        _react2.default.createElement(
          'span',
          Object.assign({}, characterProps, { style: Object.assign({}, computedCharStyle, animationDelay('400ms')) }),
          '.'
        ),
        _react2.default.createElement(
          'span',
          Object.assign({}, characterProps, { style: Object.assign({}, computedCharStyle, animationDelay('800ms')) }),
          '.'
        )
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.displayName = 'Spinner';
Spinner.propTypes = {
  characterProps: _react.PropTypes.object,
  /**
   * @property {Object} characterStyle - (optional) The property can be used to specify styling for the spans wrapping the dots. Behaves like Reacts built-in style property.
   */
  characterStyle: _react.PropTypes.object,
  style: _react.PropTypes.object
};
exports.default = Spinner;

//# sourceMappingURL=Spinner.js.map