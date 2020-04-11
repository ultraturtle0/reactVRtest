import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Hello360 extends React.Component {
  constructor() {
    super();
    this.state = {
        count: 0,
    };
    this._incrementCount = this._incrementCount.bind(this);
  };

  _incrementCount = () => {
    this.setState(oldState => ({ count: oldState.count + 1 }));
  }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={styles.panel}>
          <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
