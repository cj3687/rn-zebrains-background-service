import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Animated,
} from 'react-native';
import { connect } from 'react-redux';
import Zebrains from './ZebrainsModule';
import zebra from './zebra.png';
import zebraInverse from './zebra2.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#e94246',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#e94246',
  },
});

const App = ({ zebrainsServiceData }) => {
  const imageSize = zebrainsServiceData ? 150 : 100;
  const sourceImage = zebrainsServiceData ? zebraInverse : zebra;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Animated.Image
          source={sourceImage}
          resizeMode="contain"
          style={{ width: imageSize + 150, height: imageSize }}
        />
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => Zebrains.startService()}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Zebrains.stopService()}>
          <Text style={styles.text}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = store => ({
  zebrainsServiceData: store.App.zebrainsServiceData,
});

export default connect(mapStateToProps)(App);
