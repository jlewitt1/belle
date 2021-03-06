/**
 * @description Used for styling the Belle Spinner component
 * 
 * Belle provides you with the ability to modify the default appearance of its components.
 * 
 * @example With this example you overwrite the style of default Belle Spinner Component
 * 
 * import SpinnerStyle from 'bit/style/spinner-style';
 * 
 * SpinnerStyle.style = {
 *  display: 'inline-block',
 *  fontSize: 30,
 *  textAlign: 'center',
 * }
 * 
 * 
 * For extended information see the Belle [documentation](http://nikgraf.github.io/belle/#/configuration?_k=pbr5zm)
 */

const spinnerStyle = {
  style: {
    display: 'inline-block',
    fontSize: 15,
    textAlign: 'center',
  },

  characterStyle: {
    color: '#666',
    display: 'inline-block',
    WebkitAnimation: 'belle-spinner-pulse 2s infinite ease-in-out',
    OAnimation: 'belle-spinner-pulse 2s infinite ease-in-out',
    animation: 'belle-spinner-pulse 2s infinite ease-in-out',
  },
};

export default spinnerStyle;
