import {TextStyle, ViewStyle} from 'react-native';
import {verticalScale} from '../utils/Dim';

interface stylesType {
  headerHeight: number;
  styledButton: ViewStyle;
  buttonTitle: TextStyle;
}
export const COLORS = {
  buttons: '#ff8c52',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  CardComment: '#86939e',
  Cardbackground: 'white',
  StatusBar: '#ff8c52',
  HeaderText: 'white',
};

export const PARAMETERS: stylesType = {
  headerHeight: verticalScale(50),
  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: verticalScale(50),
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: verticalScale(3),
  },
};

export const TITLE: TextStyle = {
  color: '#ff8c52',
  fontSize: verticalScale(20),
  fontWeight: 'bold',
};