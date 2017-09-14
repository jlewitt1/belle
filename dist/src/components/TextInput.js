'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calculateTextareaHeight = require('../utils/calculate-textarea-height');

var _calculateTextareaHeight2 = _interopRequireDefault(_calculateTextareaHeight);

var _injectStyle = require('../utils/inject-style');

var _unionClassNames = require('../utils/union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

var _helpers = require('../utils/helpers');

var _textInput = require('../style/text-input');

var _textInput2 = _interopRequireDefault(_textInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Belle's text input component
 * Note: The TextInput automatically grows in height once the text becomes too long to fit in. Still every TextInput is just rendered as a simple HTML textarea.
 * 
 * In addition to the props listed below, you can also use any other property valid for a HTML textarea like style, placeholder, onClick, ...
 * 
 * More info:
 * See live [examples](https://gideonshils.github.io/Belle-With-Bit/).
 * 
 * For extended info, go to [Belle](http://nikgraf.github.io/belle/#/component/text-input?_k=shc6fv) documentation.
 * 
 * @example Standard example
 * 
 * <!-- TextInput with a defaultValue -->
 * <TextInput defaultValue="Jane Doe" placeholder="Name" />
 * 
 * <!-- TextInput with allowNewLine set to true -->
 * <TextInput defaultValue="This TextInput has allowNewLine set to true. Just press 'Return' once editing the text." allowNewLine />
 * 
 * @example TextInput with custom styling & two-way data binding
 * 
 * <TextInput minRows={ 3 }
 *      valueLink={ this.linkState('customTextInputValue') }
 *      placeholder="Just fill in whatever you like :)"
 *      style={{
 *        border: '1px solid #C8C8C8',
 *        padding: 10,
 *        width: 280,
 *        borderRadius: 3,
 *        boxShadow: 'inset 0 1px 2px #CCC'
 *      }}
 *      hoverStyle={{
 *        border: '1px solid #6C6C6C'
 *      }}
 *      focusStyle={{
 *        borderColor: '#53C7F2',
 *        boxShadow: 'inset 0 1px 2px #CCC, 0 0 8px #53C7F2'
 *      }} />
 *
 * <p>Two-way data binding: { this.state.customTextInputValue }</p>
 * 
 * @example Disabled Text Input
 * 
 * <TextInput disabled defaultValue="Maecenas eu placerat ante. Fusce venenatis. Duis tincidunt mi at quam condimentum lobortis condimentum lobortis." />
 * 
 */

var newLineRegex = /[\r\n]/g;

var textInputPropTypes = {
  className: _react.PropTypes.string,
  /**
   * @property {Integer} minHeight - (optional) Will be deprecated with Belle 2.0.0. We recommend to use minRows.
   */
  minHeight: _react.PropTypes.number,
  /**
   * @property {Integer} maxHeight - (optional) Will be deprecated with Belle 2.0.0. We recommend to use maxRows.
   */
  maxHeight: _react.PropTypes.number,
  /**
   * @property {Integer} minRows - (optional) Once set the TextInput will always keep a minimum height to fit this amount of text input lines. This can be useful to indicate to users that it is expected from them to provide a certain amount of text input.
   */
  minRows: _react.PropTypes.number,
  /**
   * @property {Integer} maxRows - (optional) Once set the TextInput will always keep a maximum height to fit this amount of text input lines. This can be useful to keep your layout sane even with a lot of text input.
   */
  maxRows: _react.PropTypes.number,
  style: _react.PropTypes.object,
  /**
   * @property {Object} hoverStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the user hovers over the input with the cursor.
   */
  hoverStyle: _react.PropTypes.object,
  /**
   * @property {Object} focusStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the input is the element focused in the DOM.
   */
  focusStyle: _react.PropTypes.object,
  allowNewLine: _react.PropTypes.bool,
  /**
   * @property {Boolean} disabled - (optional) If true the Textarea will be disabled and text can't be manipulated by a user.
   */
  disabled: _react.PropTypes.bool,
  /**
   * @property {Object} disabledStyle - (optional) Works like React's built-in style property except that it extends the properties from the base style. Becomes active once the textarea is disabled.
   */
  disabledStyle: _react.PropTypes.object,
  /**
   * @property {Object} disabledHoverStyle - (optional) Works like React's built-in style property except that it extends the properties from the base disabledStyle. Becomes active once the textarea is disabled and a user hovers over it.
   */
  disabledHoverStyle: _react.PropTypes.object,
  /**
   * @property {Function} onUpdate - (optional) Callback executed every time a user updates the text in the textarea. onUpdate has one argument which is an object containing the value e.g. { value: 'What a beautiful da' }.
   */
  onUpdate: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  /**
   * @property {String} value - (optional) Behaves like the value property of any React rendered input of type="text" or textarea. The TextInput's field value is set and can not be manipulated through the user interface.
   */
  value: _react.PropTypes.string,
  /**
   * @property {String} defaultValue - (optional) Behaves like the defaultValue property of any React rendered input of type="text" or textarea. The TextInput's field value is set and can be manipulated through the user interface.
   */
  defaultValue: _react.PropTypes.string,
  /**
   * @property {ValueReference} valueLink - (optional) Behaves like the valueLink poperty of any React rendered input of type="text" or textarea. ValueLink allows to enable two-way data binding between a state property and the value in the user interface.
   */
  valueLink: _react.PropTypes.shape({
    value: _react.PropTypes.string.isRequired,
    requestChange: _react.PropTypes.func.isRequired
  })
};

/**
 * Returns an object with properties that are relevant for the TextInput's textarea.
 *
 * As the height of the textarea needs to be calculated valueLink can not be
 * passed down to the textarea, but made available through this component.
 */
function sanitizeChildProps(properties) {
  var childProps = (0, _helpers.omit)(properties, Object.keys(textInputPropTypes));
  if (_typeof(properties.valueLink) === 'object') {
    childProps.value = properties.valueLink.value;
  }

  return childProps;
}

/**
 * Update hover & focus style for the speficied styleId.
 *
 * @param styleId {string} - a unique id that exists as class attribute in the DOM
 * @param properties {object} - the components properties optionally containing hoverStyle & focusStyle
 */
function updatePseudoClassStyle(styleId, properties) {
  var hoverStyle = Object.assign({}, _textInput2.default.hoverStyle, properties.hoverStyle);
  var focusStyle = Object.assign({}, _textInput2.default.focusStyle, properties.focusStyle);
  var disabledHoverStyle = Object.assign({}, _textInput2.default.disabledHoverStyle, properties.disabledHoverStyle);

  var styles = [{
    id: styleId,
    style: hoverStyle,
    pseudoClass: 'hover'
  }, {
    id: styleId,
    style: focusStyle,
    pseudoClass: 'focus'
  }, {
    id: styleId,
    style: disabledHoverStyle,
    pseudoClass: 'hover',
    disabled: true
  }];
  (0, _injectStyle.injectStyles)(styles);
}

/**
 * TextInput component with great UX like autogrowing & handling states
 *
 * Note on styling: Right now this component doen't allow to change style after
 * initialisation.
 *
 * Note on resizing:
 * If you fill a textarea only with spaces and the cursor reaches the right end
 * it won't break the line. This leads to unexpected behaviour for the automatic
 * resizing.
 *
 * This component was highly inspired by the great work from these guys
 * - Andrey Popp: https://github.com/andreypopp/react-textarea-autosize
 * - Eugene: https://gist.github.com/eugene1g/5dbaa7d35d0c7d5c2c56
 */

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(properties) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, properties));

    _this._onKeyDown = function (event) {
      if (!_this.props.allowNewLine && event.key === 'Enter') {
        event.preventDefault();
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }
    };

    _this._onChange = function (event) {
      var value = event.target.value;

      if (!_this.props.allowNewLine && value.match(newLineRegex) !== null) {
        value = value.replace(newLineRegex, ' ');
      }

      if ((0, _helpers.has)(_this.props, 'valueLink')) {
        _this.props.valueLink.requestChange(value);
      } else if ((0, _helpers.has)(_this.props, 'defaultValue')) {
        _this.setState({
          inputValue: value
        });
      }

      if (_this.props.onUpdate) {
        _this.props.onUpdate({ value: value });
      }

      _this._triggerResize(value);
    };

    var inputValue = void 0;

    if ((0, _helpers.has)(properties, 'valueLink')) {
      inputValue = properties.valueLink.value;
    } else if ((0, _helpers.has)(properties, 'value')) {
      inputValue = properties.value;
    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
      inputValue = properties.defaultValue;
    }

    _this.state = {
      height: 'auto',
      inputValue: inputValue
    };
    _this.textareaProps = sanitizeChildProps(properties);
    return _this;
  }

  _createClass(TextInput, [{
    key: 'componentWillMount',


    /**
     * Generates the style-id & inject the focus & hover style.
     */
    value: function componentWillMount() {
      var id = (0, _helpers.uniqueId)();
      this._styleId = 'style-id' + id;
      updatePseudoClassStyle(this._styleId, this.props);
    }

    /**
     * Right after the component go injected into the DOM it should be resized.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._triggerResize(this.state.inputValue);
    }

    /**
     * Update the properties passed to the textarea and resize as with the new
     * properties the height might have changed.
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      var _this2 = this;

      // Makes sure we have inputValue available when triggering a resize.
      var newState = {
        inputValue: this.state.inputValue
      };
      if ((0, _helpers.has)(properties, 'valueLink')) {
        newState.inputValue = properties.valueLink.value;
      } else if ((0, _helpers.has)(properties, 'value')) {
        newState.inputValue = properties.value;
      }

      this.textareaProps = sanitizeChildProps(properties);
      (0, _injectStyle.removeStyle)(this._styleId);
      updatePseudoClassStyle(this._styleId, properties);
      this.setState(newState, function () {
        return _this2._triggerResize(newState.inputValue);
      });
    }

    /**
     * Remove a component's associated styles whenever it gets removed from the DOM.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _injectStyle.removeStyle)(this._styleId);
    }

    /**
     * Prevent any newline (except allowNewLine is active) and pass the event to
     * the onKeyDown property.
     *
     * This is an optimization to avoid adding a newline char & removing it right
     * away in the onUpdate callback.
     */


    /**
     * Update the height and calls the provided change callback for onUpdate
     * or valueLink.
     *
     * In addition newline characters are replaced by spaces in the textarea value
     * in case allowNewLine is set to false and newLine characters could be found.
     */

  }, {
    key: '_triggerResize',


    /**
     * Calculate the height and store the new height in the state to trigger a render.
     */
    value: function _triggerResize(textareaValue) {
      var height = (0, _calculateTextareaHeight2.default)(_reactDom2.default.findDOMNode(this), textareaValue, this.props.minRows, this.props.maxRows, this.props.minHeight, this.props.maxHeight);
      this.setState({ height: height });
    }
  }, {
    key: 'render',
    value: function render() {
      var textareaStyle = Object.assign({}, _textInput2.default.style, this.props.style);

      if (this.props.disabled) {
        textareaStyle = Object.assign({}, textareaStyle, _textInput2.default.disabledStyle, this.props.disabledStyle);
      }

      textareaStyle.height = this.state.height;
      return _react2.default.createElement('textarea', Object.assign({
        style: textareaStyle,
        value: this.state.inputValue,
        className: (0, _unionClassNames2.default)(this.props.className, this._styleId),
        onChange: this._onChange,
        onKeyDown: this._onKeyDown,
        disabled: this.props.disabled
      }, this.textareaProps));
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.displayName = 'TextInput';
TextInput.propTypes = textInputPropTypes;
TextInput.defaultProps = {
  allowNewLine: false,
  disabled: false
};
exports.default = TextInput;

//# sourceMappingURL=TextInput.js.map