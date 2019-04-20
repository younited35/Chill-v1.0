import { StyleSheet } from 'react-native';

import { blue } from '../../../../styles/Colors';

const styles = StyleSheet.create({
  containerCast: {
    marginRight: 30,
    alignItems: 'center',
    width: 80
  },
  titleCast: {
    marginTop: 10,
    color: blue,
    textAlign: 'center'
  },
  titleCharacter: {
    fontWeight: 'bold'
  },
  castPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 13
  },
  productionCompaniesPhoto: {
    width: '100%',
    height: 60,
    borderRadius: 4,
    marginTop: 13
  }
});

export default styles;
