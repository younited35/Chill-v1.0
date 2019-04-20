import { StyleSheet } from 'react-native';

import { white, darkBlue, black } from '../../styles/Colors';
import { fontSizeResponsive } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black
  },
  containerList: {
    marginTop: 25
  },
  item: {
    alignItems: 'center',
    marginBottom: 25
  },
  itemText: {
    fontSize: fontSizeResponsive(2.5),
    color: white ,
    textAlign: 'center'
  }
});

export default styles;
