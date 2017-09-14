"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description Used for configuring the Belle button component
 * Focus styles are helpful to identify which element is currently in focus when tabbing through the elements e.g. a user wants to switch to the next input element. Yet it feels somewhat distracting when clicking on the Button. That's why Belle by default prevents the focus style being applied in case the Button is focused on by a touch or click event. This default behaviour can be deactivated by setting `preventFocusStyleForTouchAndClick` to false.
 * 
 * 
 * import ButtonConfig from 'bit/config/button-config';
 * 
 * ButtonConfig.preventFocusStyleForTouchAndClick = false;
 * 
 * For extended information see the Belle [documentation](http://nikgraf.github.io/belle/#/configuration?_k=pbr5zm)
 */

var buttonConfig = {
  preventFocusStyleForTouchAndClick: true
};

exports.default = buttonConfig;

//# sourceMappingURL=button.js.map