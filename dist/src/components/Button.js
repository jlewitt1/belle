'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../utils/helpers');

var _button = require('../style/button');

var _button2 = _interopRequireDefault(_button);

var _unionClassNames = require('../utils/union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

var _injectStyle = require('../utils/inject-style');

var _button3 = require('../config/button');

var _button4 = _interopRequireDefault(_button3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


/**
 * @description Belle's button component
 * 
 * Note: Belle's Button is rendered as normal HTML button and behaves exactly like it except for these behaviours:
 * * By default every button is of type="button" instead of "submit"
 * 
 * In addition to the props listed below, you can also use any any other property valid for a HTML button like style, onClick, …
 * 
 * 
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/button?_k=3h2bg1) documentation.
 *
 * @example Standard example
 * 
 * <!-- primary button -->
 * <Button primary>Follow</Button>
 * 
 * <!-- default button -->
 * <Button>Follow</Button>
 * 
 * @example Disabled buttons
 * 
 * <Button primary style={{marginRight: 10}}>Follow</Button>
 *
 * <Button primary disabled style={{marginRight: 10}}>Follow</Button>
 * 
 * <Button style={{marginRight: 10}}>Follow</Button>
 * 
 * <Button disabled>Follow</Button>
 * 
 * @example Primary button with custom styles
 *
 * <Button primary
 *    style={{
 *      marginRight: 10,
 *      color: '#222',
 *      border: '1px solid #222',
 *      borderBottom: '1px solid #222',
 *      borderRadius: 2,
 *      background: '#fff',
 *    }}
 *    hoverStyle={{
 *      border: '1px solid red',
 *      borderBottom: '1px solid red',
 *      color: '#red',
 *      background: '#fff',
 *    }}
 *    focusStyle={{
 *      border: '1px solid red',
 *      borderBottom: '1px solid red',
 *      color: '#red',
 *      background: '#fff',
 *      boxShadow: 'red 0px 0px 5px',
 *    }}
 *    activeStyle={{
 *      border: '1px solid red',
 *      borderTop: '1px solid red',
 *      color: '#000',
 *      background: '#fff',
 *    }}>
 *  Follow
 * </Button>
 * 
 */

var buttonTypes = ['button', 'submit', 'reset']; // eslint-disable-line no-unused-vars


var buttonPropTypes = {
  /**
   * @property {Object} activeStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the button is pressed by a user, but yet not release.
   */
  activeStyle: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  className: _react.PropTypes.string,
  /**
   * @property {Boolean} disabled - (default: false) If true the Button will be disabled and can't be pressed by a user.
   */
  disabled: _react.PropTypes.bool,
  /**
   * @property {'button' | 'submit' | 'reset'} type - (default: 'button') This button by is set to type 'button' by default. This different to the default behavior in HTML where a button would submit in case the 'type' attribute is not defined.
   */
  type: _react.PropTypes.oneOf(buttonTypes),
  style: _react.PropTypes.object,
  /**
   * @property {Object} focusStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the button is the element focused in the DOM.
   */
  focusStyle: _react.PropTypes.object,
  /**
   * @property {Object} hoverStyle - (optional) Works like React's built-in style property. Becomes active once the user hovers over the button with the cursor.
   */
  hoverStyle: _react.PropTypes.object,
  /**
   * @property {Object} disabledStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the button is disabled.
   */
  disabledStyle: _react.PropTypes.object,
  /**
   * @property {Object} disabledHoverStyle - (optional) Works like React's built-in style property except that it extends the properties from the base disabledStyle. Becomes active once the button is disabled and a user hovers over it.
   */
  disabledHoverStyle: _react.PropTypes.object,
  onTouchStart: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchCancel: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  /**
   * @property {Boolean} preventFocusStyleForTouchAndClick (optional) (default: true) - Prevents the focus style being applied in case the buttons becomes focused by a click or touch.
   */
  preventFocusStyleForTouchAndClick: _react.PropTypes.bool,
  /**
   * @property {Boolean} primary - (default: false) If true the Button will be appear with the primary button styles.
   */
  primary: _react.PropTypes.bool
};

/**
 * Returns an object with properties that are relevant for the button element.
 *
 * In case a wrong or no type is defined the type of the child button will be
 * set to `button`.
 */
function sanitizeChildProps(properties) {
  return (0, _helpers.omit)(properties, Object.keys(buttonPropTypes));
}

/**
 * Update hover, focus & active style for the speficied styleId.
 *
 * @param styleId {string} - a unique id that exists as class attribute in the DOM
 * @param properties {object} - the components properties optionally containing custom styles
 */
function updatePseudoClassStyle(styleId, properties, preventFocusStyleForTouchAndClick) {
  var baseStyle = properties.primary ? _button2.default.primaryStyle : _button2.default.style;
  var baseDisabledStyle = properties.primary ? _button2.default.primaryDisabledStyle : _button2.default.disabledStyle;
  var disabledStyle = Object.assign({}, baseStyle, properties.style, baseDisabledStyle, properties.disabledStyle);
  var baseActiveStyle = properties.primary ? _button2.default.primaryActiveStyle : _button2.default.activeStyle;
  var activeStyle = Object.assign({}, baseActiveStyle, properties.activeStyle);

  var focusStyle = void 0;
  if (preventFocusStyleForTouchAndClick) {
    focusStyle = { outline: 0 };
  } else {
    var baseFocusStyle = properties.primary ? _button2.default.primaryFocusStyle : _button2.default.focusStyle;
    focusStyle = Object.assign({}, baseFocusStyle, properties.focusStyle);
  }

  var styles = [{
    id: styleId,
    style: activeStyle,
    pseudoClass: 'active'
  }, {
    id: styleId,
    style: disabledStyle,
    pseudoClass: 'active',
    disabled: true
  }, {
    id: styleId,
    style: focusStyle,
    pseudoClass: 'focus'
  }];

  (0, _injectStyle.injectStyles)(styles);
}

/**
 * Button component
 *
 * The button behaves exactly like a normal html button except:
 * - Once a user clicks on the button it will loose focus
 * - By default every button is of type="button" instead of "submit"
 */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(properties) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, properties));

    _this._onFocus = function (event) {
      _this.focused = true;
      _this.forceUpdate();

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    _this._onBlur = function (event) {
      _this.focused = false;
      _this.setState({ isActive: false });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    };

    _this._onMouseDown = function (event) {
      if (event.button === 0 && !_this.props.disabled) {
        _this.mouseDownOnButton = true;
      }

      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    };

    _this._onTouchStart = function (event) {
      if (!_this.props.disabled && event.touches.length === 1) {
        _this.setState({
          isActive: true,
          isIgnoringHover: true
        });
      }

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    };

    _this._onTouchEnd = function (event) {
      _this.setState({
        isActive: false,
        isIgnoringHover: true
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    };

    _this._onTouchCancel = function (event) {
      _this.setState({
        isActive: false,
        isIgnoringHover: true
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    };

    _this._onMouseEnter = function (event) {
      if (!_this.state.isIgnoringHover) {
        _this.setState({
          isHovered: true,
          isIgnoringHover: false
        });
      }

      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    };

    _this._onMouseLeave = function (event) {
      _this.setState({
        isHovered: false
      });

      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    };

    _this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _button4.default.preventFocusStyleForTouchAndClick;

    _this.state = {
      childProps: sanitizeChildProps(properties),

      // used for touch devices like iOS Chrome/Safari where the active
      // pseudoClass is not supported on touch
      isActive: false,
      isHovered: false,

      // Note: On touch devices mouseEnter is fired while mouseLeave is not.
      // This would result in a hover effect that keeps active until another
      // element is focused on. This would result in the same behaviour as using
      // the :hover pseudo class. To prevent it from happening activating the
      // hover state is prevented when a touch event has been triggered before.
      // source: http://stackoverflow.com/a/22444532/837709
      isIgnoringHover: false
    };

    // The focused attribute is used to apply the one-time focus animation.
    // As it is reset after every render it can't be set inside state as this
    // would trigger an endless loop.
    _this.focused = false;

    // This used to determine if the one-time focus animation should be prevented.
    _this.mouseDownOnButton = false;
    return _this;
  }

  _createClass(Button, [{
    key: 'componentWillMount',


    /**
     * Generates the style-id & inject the focus & active style.
     */
    value: function componentWillMount() {
      this.styleId = 'style-id' + (0, _helpers.uniqueId)();
      updatePseudoClassStyle(this.styleId, this.props, this.preventFocusStyleForTouchAndClick);
    }

    /**
     * Update the childProps based on the updated properties of the button.
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _button4.default.preventFocusStyleForTouchAndClick;

      this.setState({
        childProps: sanitizeChildProps(properties)
      });
      (0, _injectStyle.removeStyle)(this.styleId);
      updatePseudoClassStyle(this.styleId, properties, this.preventFocusStyleForTouchAndClick);
    }

    /**
     * Deactivate the focused attribute in order to make sure the focus animation
     * only runs once when the component is focused on & not after re-rendering
     * e.g when the user clicks the button.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.focused = false;
      this.mouseDownOnButton = false;
    }

    /**
     * Remove a component's associated styles whenever it gets removed from the DOM.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _injectStyle.removeStyle)(this.styleId);
    }

    /**
     * Activate the focused attribute used to determine when to show the
     * one-time focus animation and trigger a render.
     */


    /**
     * Deactivate the focused attribute used to determine when to show the
     * one-time focus animation and trigger a render.
     */


    /**
     * Updates the button to be pressed.
     */


    /**
     * Updates the button to be release.
     */


    /**
     * Updates the button to be release.
     */


    /**
     * As soon as the mouse enters the component the isHovered state is activated.
     */


    /**
     * Deactivate the isHovered state.
     */

  }, {
    key: 'render',
    value: function render() {
      var baseStyle = this.props.primary ? _button2.default.primaryStyle : _button2.default.style;
      var combinedStyle = Object.assign({}, baseStyle, this.props.style);

      if (this.state.isHovered) {
        var baseHoverStyle = this.props.primary ? _button2.default.primaryHoverStyle : _button2.default.hoverStyle;
        combinedStyle = Object.assign({}, combinedStyle, baseHoverStyle, this.props.hoverStyle);
      }

      if (this.props.disabled) {
        var baseDisabledStyle = this.props.primary ? _button2.default.primaryDisabledStyle : _button2.default.disabledStyle;
        combinedStyle = Object.assign({}, combinedStyle, baseDisabledStyle, this.props.disabledStyle);
        if (this.state.isHovered) {
          var baseDisabledHoverStyle = this.props.primary ? _button2.default.primaryDisabledHoverStyle : _button2.default.disabledHoverStyle;
          combinedStyle = Object.assign({}, combinedStyle, baseDisabledHoverStyle, this.props.disabledHoverStyle);
        }
      } else {
        if (this.state.isActive) {
          var baseActiveStyle = this.props.primary ? _button2.default.primaryActiveStyle : _button2.default.activeStyle;
          combinedStyle = Object.assign({}, combinedStyle, baseActiveStyle, this.props.activeStyle);
        } else if (this.focused && !this.state.isActive && !this.mouseDownOnButton && this.preventFocusStyleForTouchAndClick) {
          var baseFocusStyle = this.props.primary ? _button2.default.primaryFocusStyle : _button2.default.focusStyle;
          combinedStyle = Object.assign({}, combinedStyle, baseFocusStyle, this.props.focusStyle);
        }
      }

      return _react2.default.createElement(
        'button',
        Object.assign({
          style: combinedStyle,
          className: (0, _unionClassNames2.default)(this.props.className, this.styleId),
          onTouchStart: this._onTouchStart,
          onTouchEnd: this._onTouchEnd,
          onTouchCancel: this._onTouchCancel,
          onFocus: this._onFocus,
          onBlur: this._onBlur,
          onMouseDown: this._onMouseDown,
          onMouseEnter: this._onMouseEnter,
          onMouseLeave: this._onMouseLeave,
          disabled: this.props.disabled,
          type: this.props.type
        }, this.state.childProps),
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.displayName = 'Button';
Button.propTypes = buttonPropTypes;
Button.defaultProps = {
  primary: false,
  disabled: false,
  type: 'button'
};
exports.default = Button;

//# sourceMappingURL=Button.js.map