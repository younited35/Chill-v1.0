import { StyleSheet } from 'react-native';

import { white, pink, blue } from '../../styles/Colors';
import { fontSizeResponsive } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  buttonShare: {
    paddingRight: 15,
    paddingLeft: 20
  },
  containerMovieInfo: {
    margin: 20,
    marginTop: 35
  },
  subTitleInfo: {
    fontSize: fontSizeResponsive(2.1),
    color: blue,
    textAlign: 'justify'
  },
  readMore: {
    color: pink,
    marginTop: 5,
    textAlign: 'right'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});

export default styles;
