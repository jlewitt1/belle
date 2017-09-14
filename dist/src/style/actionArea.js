'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description Used for styling the Belle ActionArea component
 * 
 * Belle provides you with the ability to modify the default appearance of its components.
 * 
 * @example With this example you overwrite the hover style of default Belle ActionArea Component
 * 
 * import ActionAreaStyle from 'bit/style/action-area-style';
 * 
 * ActionAreaStyle.hoverStyle = {
 *  background: '#6FA8D1',
 *  border: '1px solid #E0E0E0',
 * }
 * 
 * 
 * For extended information see the Belle [documentation](http://nikgraf.github.io/belle/#/configuration?_k=pbr5zm)
 */

var actionAreaStyle = {

  style: {
    boxSizing: 'border-box',
    color: '#716D6D',
    fontSize: 17,
    paddingTop: '11px',
    paddingBottom: '11px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginTop: -1,
    textAlign: 'center',
    textDecoration: 'none',
    width: 48,
    borderLeft: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    borderTop: '1px solid #E0E0E0',
    borderBottom: '1px solid #E0E0E0',

    /* animations */
    transition: 'background 0.1s, border-top 0.1s, border-bottom 0.1s, color 0.1s',
    transitionTimingFunction: 'ease-out',

    /*
    To avoid any kind of flickering the user won't get feedback
    for selecting the button text
    */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
    Prevent flickering while tapping on WebKit
    http://stackoverflow.com/a/3516243/837709
    */
    WebkitTapHighlightColor: 'transparent'
  },

  hoverStyle: {
    background: '#EEE',
    cursor: 'pointer'
  },

  activeStyle: {
    borderTop: '1px solid #B1B1B1',
    borderLeft: '1px solid #D0D0D0',
    borderRight: '1px solid #D0D0D0',
    borderBottom: '1px solid #D4D4D4',
    background: '#E0E0E0'
  }
};

exports.default = actionAreaStyle;

//# sourceMappingURL=actionArea.js.map