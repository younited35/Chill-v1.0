import { StyleSheet } from 'react-native';

import { white, blue, lightGray } from '../../../styles/Colors';
import { fontSizeResponsive } from '../../../utils/Metrics';

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    width: '100%'
  },
  errorInfo: {
    fontSize: fontSizeResponsive(2.6),
    color: blue,
    textAlign: 'center',
    padding: 25
  },
  loadingButton: {
    padding: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: lightGray
  },
  loadingText: {
    fontSize: fontSizeResponsive(2.1),
    color: blue,
    textAlign: 'center'
  }
});

export default styles;
