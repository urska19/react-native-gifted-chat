import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
} from 'react-native';


export default class MessageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
        <Text
          style={[styles[this.props.position].title, this.props.titleStyle[this.props.position]]}
        >
          {this.props.currentMessage.title}
        </Text>
      </View>
    );
  }
}

const titleStyle = {
  fontWeight: 'bold',
  fontSize: 16,
  lineHeight: 20,
  marginTop: 5,
  marginBottom: 0,
  marginLeft: 10,
  marginRight: 10,
};

const styles = {
  left: StyleSheet.create({
    container: {
    },
    title: {
      color: 'black',
      ...titleStyle,
    },
  }),
  right: StyleSheet.create({
    container: {
    },
    title: {
      color: 'white',
      ...titleStyle,
    },
  }),
};


MessageTitle.defaultProps = {
  position: 'left',
  currentMessage: {
    title: ''
  },
  containerStyle: {},
  titleStyle: {},
};

MessageTitle.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  currentMessage: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
  titleStyle: PropTypes.shape({
    left: Text.propTypes.style,
    right: Text.propTypes.style,
  }),
};
