import { StyleSheet } from 'react-native';

import { white, pink } from '../../../../styles/Colors';
import { fontSizeResponsive, width } from '../../../../utils/Metrics';

/* eslint-disable react-native/no-color-literals */

const styles = StyleSheet.create({
  containerMainPhoto: {
    width,
    height: width * 0.6
  },
  mainPhoto: {
    width: '100%',
    height: '100%'
  },
  play: {
    position: 'absolute',
    zIndex: 1,
    bottom: -20,
    right: 15,
    borderRadius: width * 0.32,
    backgroundColor: pink,
    width: width * 0.16,
    height: width * 0.16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerMainPhotoInfo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  containerBackgroundPhotoInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },
  photoInfo: {
    fontSize: fontSizeResponsive(3.5),
    color: white,
    fontWeight: 'bold'
  },
  photoStar: {
    flexDirection: 'row',
    marginTop: 8
  },
  buttonPlay: {
    marginLeft: 5
  },
  star: {
    marginRight: 5
  }
});

export default styles;
