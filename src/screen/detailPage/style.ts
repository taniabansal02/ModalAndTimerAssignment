import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale
} from '../../components/responsiveSize';
import fonts from '../../assets/fonts';
import { colors } from '../../assets/theme/color';

export const styles = StyleSheet.create({
  detailPgContainer: {
    flex: 1, 
    marginLeft: moderateScale(20)
  },
  btnView: {
    alignItems: 'center', 
    marginTop: moderateScaleVertical(50)
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonColor,
    width: moderateScale(200),
    height: moderateScaleVertical(70),
  },

  btnTxt: {
    color: colors.white, 
    fontSize: textScale(20)
  },
  modalContainer: {
    width: moderateScale('100%'), 
    marginLeft: moderateScale(0), 
    flex: 1
  },
  modalView: {
    backgroundColor: colors.white,
    height: moderateScaleVertical(615),
    marginLeft: moderateScale(20),
    alignSelf:'center',
    borderRadius: 30,
  },
  scrollViewStyle: {
    marginHorizontal: moderateScale(20),
  },
  img: {
    height: moderateScaleVertical(26),
    width: moderateScale(221), 
    alignSelf:'center',
  },
  timerCol : {
    flexDirection:'column', 
    alignSelf:'center',
     alignContent:'center'
    },
  timerRow: {
    flexDirection:'row', 
    gap: moderateScale(16)
  },
  timer:{
    color: colors.white, 
    fontFamily: fonts.RobotoRegular, 
    fontSize: textScale(8) 
  },
  timerRow1:{
    flexDirection:'row', 
    gap: moderateScale(5.6), 
    top: moderateScaleVertical(-4)
  },
  timer2:{ 
    fontFamily: fonts.RobotoMedium, 
    fontSize: textScale(11), 
    color: colors.white 
  },
  crossBtnStyle: {
    marginTop: moderateScaleVertical(10),
    alignItems: 'flex-end',
   
  },
  eventDetailView : {
    marginTop: moderateScaleVertical(43),
    flexDirection: 'column',
    alignItems:'flex-start',
    gap: 8,
  },
  recentTxtView: {
    width: moderateScale(76),
    height: moderateScaleVertical(30),
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingVertical: moderateScaleVertical(4),
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentTxtStyle: {
    color: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.RobotoMedium,
  },
  reviewInterviewStyle: {
    color: 'black',
    fontFamily: fonts.RobotoMedium,
    fontSize: textScale(20),
    lineHeight: 22,
  },
  eventTimingRow: {
    flexDirection: 'row', 
    gap: 4
  },
  headingTxt: {
    color: 'black',
    fontFamily: fonts.RobotoMedium,
    fontSize: textScale(10),
  },
  valueTxt: {
    color: 'black',
    fontFamily: fonts.RobotoRegular,
    fontSize: textScale(12),
  },
  mainTxt: {
    color: 'black',
    fontFamily: fonts.RobotoRegular,
    fontSize: textScale(14),
    textAlign: 'justify',
    marginTop: moderateScaleVertical(20),
    lineHeight: 24,
  
  },
});
