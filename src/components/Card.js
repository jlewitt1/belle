import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cardStyle from '../style/card';

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

export default class Card extends Component {

  constructor(properties) {
    super(properties);
    const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
    this.childProps = childProps;
  }

  static displayName = 'Card';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    style: PropTypes.object,
  };

  /**
   * Update the childProps based on the updated properties passed to the card.
   */
  componentWillReceiveProps(properties) {
    const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
    this.childProps = childProps;
  }

  render() {
    const divStyle = { ...cardStyle.style, ...this.props.style };

    return (
      <div {...this.childProps} style={ divStyle }>
        { this.props.children }
      </div>
    );
  }
}
