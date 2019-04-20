import { StyleSheet } from 'react-native';

import { white, lightGray, darkBlue, black, gray } from '../../styles/Colors';
import { fontSizeResponsive } from '../../utils/Metrics';

const styles = StyleSheet.create({
  buttonFilter: {
    paddingRight: 15,
    paddingLeft: 20
  },
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: 'center'
  },
  containerList: {
    justifyContent: 'center',
    flex: 1
  },
  containerMainText: {
    paddingVertical: 25,
    paddingHorizontal: 20
  },
  textMain: {
    fontSize: fontSizeResponsive(3),
    fontWeight: 'bold',
    color: white,
    width: '80%'
  },
  buttonGrid: {
    position: 'absolute',
    right: 12,
    top: 18,
    padding: 8,
    borderRadius: 100
  },
  buttonGridActive: {
    backgroundColor: darkBlue
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  loadingMore: {
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: darkBlue,
    textAlign: 'center'
  }
});

export default styles;
