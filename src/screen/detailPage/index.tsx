import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../components/responsiveSize';
import Modal from 'react-native-modal';
import {Icons} from '../../assets/images';
import BackgroundTimer from 'react-native-background-timer';
import Page1 from '../../assets/images/Page-1.png';
import {styles} from './style';
import Strings from '../../assets/strings';

const DetailPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [globalTimer, setGlobalTimer] = useState(589368);
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [mins, setMins] = useState('');
  const [sec, setSec] = useState('');

  // getTimer function takes seconds and calculates day, hour, minutes and seconds
  const getTimer = seconds => {
    let d = Math.floor(seconds / 86400);
    let h = Math.floor((seconds % 86400) / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);

    d = d > 0 ? (d < 10 ? '0' + d : d) : '00';
    h = h > 0 ? (h < 10 ? '0' + h : h) : '00';
    m = m > 0 ? (m < 10 ? '0' + m : m) : '00';
    s = s > 0 ? (s < 10 ? '0' + s : s) : '00';
    setDay(d + '');
    setHour(h + '');
    setMins(m + '');
    setSec(s + '');
  };

  // timerFunc function is for running timer in background
  const timerFunc = () => {
    BackgroundTimer.stopBackgroundTimer();

    BackgroundTimer.runBackgroundTimer(() => {
      if (globalTimer === 0) {
        BackgroundTimer.stopBackgroundTimer();
      }
      setGlobalTimer(globalTimer - 1);
    }, 1000);
  };

  useEffect(() => {
    getTimer(globalTimer);
  }, [globalTimer]);

  useEffect(() => {
    if (globalTimer > 0) {
      timerFunc();
    }
  }, [globalTimer]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.detailPgContainer}>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={toggleModal} style={styles.btn}>
          <Text style={styles.btnTxt}> {Strings.OPEN_MODAL} </Text>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible} style={styles.modalContainer}>
          <View style={styles.modalView}>
            {/* ******************* Image displays how much time is left for the event to occur ********************* */}
            <View style={{position: 'relative', bottom: moderateScaleVertical(5)}}>
              <ImageBackground source={Page1} style={styles.img}>
                <View style={styles.timerCol}>
                  <View style={styles.timerRow}>
                    <Text style={styles.timer}>{Strings.DAY}</Text>
                    <Text style={styles.timer}>{Strings.HOUR}</Text>
                    <Text style={styles.timer}>{Strings.MIN}</Text>
                    <Text style={styles.timer}>{Strings.SEC}</Text>
                  </View>

                  <View style={styles.timerRow1}>
                    <Text style={styles.timer2}>{day}</Text>
                    <Text style={styles.timer2}> {Strings.SYMBOL} </Text>
                    <Text style={styles.timer2}>{hour}</Text>
                    <Text style={styles.timer2}> {Strings.SYMBOL} </Text>
                    <Text style={styles.timer2}>{mins}</Text>
                    <Text style={styles.timer2}> {Strings.SYMBOL} </Text>
                    <Text style={styles.timer2}>{sec}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
              {/* ******************* Button to close the modal ********************* */}
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.crossBtnStyle}>
                <Icons.crossBtn
                  width={moderateScale(32)}
                  height={moderateScaleVertical(32)}
                />
              </TouchableOpacity>

              {/* ******************* Event details ********************* */}
              <View style={styles.eventDetailView}>
                <View style={styles.recentTxtView}>
                  <Text style={styles.recentTxtStyle}>{Strings.RECENT}</Text>
                </View>

                <Text style={styles.reviewInterviewStyle}>
                  {Strings.REVIEW_YOUR_INTERVIEW}
                </Text>

                <View style={styles.eventTimingRow}>
                  <Icons.calendar />
                  <Text style={styles.headingTxt}>
                    {' '}
                    {Strings.START_DATE_TIME}{' '}
                  </Text>
                  <Text style={styles.valueTxt}>{Strings.START_DATE} </Text>
                </View>

                <View style={styles.eventTimingRow}>
                  <Icons.calendar />
                  <Text style={styles.headingTxt}>
                    {' '}
                    {Strings.END_DATE_TIME}{' '}
                  </Text>
                  <Text style={styles.valueTxt}>{Strings.END_DATE}</Text>
                </View>

                <View style={styles.eventTimingRow}>
                  <Icons.avtar/>
                  <Text style={styles.headingTxt}> {Strings.BY} </Text>
                  <Text style={styles.valueTxt}>{Strings.PAGEANT_PLANET} </Text>
                </View>
              </View>

              <Text style={styles.mainTxt}>{Strings.PARA}</Text>
              
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default DetailPage;
