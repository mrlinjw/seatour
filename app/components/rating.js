import React, {Component} from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image
} from "react-native";


export default class Rating extends Component {
    constructor(props) {
        super(props);
        let {
          rating,
          max,
          iconWidth,
          iconHeight,
          iconSelected,
          iconUnselected,
          editable
        } = this.props;
        this.state = {
            rating: rating || 0,
            max: max || 5,
            iconWidth: iconWidth || 24,
            iconHeight: iconHeight || 24,
            iconSelected: iconSelected || require('../img/star-on.png'),
            iconUnselected: iconUnselected || require('../img/star-off.png'),
            editable: editable != null ? editable : true
        }
    }

    _onRate(rating) {
        this.setState({rating});
        if (this.props.onRate) {
            this.props.onRate(rating)
        }
    }

    render() {
        var icons = [];
        let {
          rating,
          max,
          iconWidth,
          iconHeight,
          iconSelected,
          iconUnselected,
          editable
        } = this.state;
        for (let i = 1; i <= max; i++) {
            icons.push(
              <TouchableWithoutFeedback
                disabled={ !editable }
                key={ i }
                style={{height: iconHeight, width: iconWidth}}
                onPress={()=>this._onRate(i)}
                >
                <Image style={{height: iconHeight, width: iconWidth, marginLeft:5}} source={rating >= i ? iconSelected : iconUnselected}/>
              </TouchableWithoutFeedback>)
        }
        return (
          <View style={[this.props.style,{flexDirection:'row'}]}>
              {icons}
          </View>
        )
    }
}
