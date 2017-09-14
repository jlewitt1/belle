'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description Used for styling the Belle Card component
 * 
 * Belle provides you with the ability to modify the default appearance of its components.
 * 
 * @example With this example you overwrite the focus style of default Belle Card Component
 * 
 * import CardStyle from 'bit/style/card-style';
 * 
 * CardStyle.style = {
 *  outline: 0, // to avoid default focus behaviour
*   borderBottom: '2px solid #6FA8D1',
 * }
 * 
 * 
 * For extended information see the Belle [documentation](http://nikgraf.github.io/belle/#/configuration?_k=pbr5zm)
 */

var cardStyle = {

  style: {
    marginBottom: 20,
    padding: 40,
    borderRadius: 2,
    background: '#fff',
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box'
  }
};

exports.default = cardStyle;

//# sourceMappingURL=card.js.map