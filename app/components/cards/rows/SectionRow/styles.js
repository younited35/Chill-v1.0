import { StyleSheet } from 'react-native';

import { darkBlue, white } from '../../../../styles/Colors';
import { fontSizeResponsive } from '../../../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  containerLast: {
    marginBottom: 15
  },
  containerSubTitle: {
    marginRight: 25
  },
  title: {
    fontSize: fontSizeResponsive(2.6),
    fontWeight: 'bold',
    color: white,
    marginBottom: 7
  }
});

export default styles;
