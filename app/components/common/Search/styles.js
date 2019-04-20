import { StyleSheet } from 'react-native';

import { darkBlue, freeze } from '../../../styles/Colors';
import { fontSizeResponsive } from '../../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 5
  },
  containerInput: {
    height: 40,
    backgroundColor: freeze,
    borderRadius: 15
  },
  inputDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    padding: 10
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: fontSizeResponsive(2.2),
    color: darkBlue,
    width: '100%'
  }
});

export default styles;
