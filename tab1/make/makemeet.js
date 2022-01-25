import React, { useState } from 'react';
import styled from 'styled-components';
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Button,
  View,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import StyleSheet from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#cecece',
  },
});

//상단 정보 표기란
const MainView = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const MainText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-left: 12px;
  margin-top: 12px;
  color: #000;
`;

const SecondMainText = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  margin-top: 12px;
`;

const WhereToMeet = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-left: 12px;
  margin-top: 10px;
  margin-bottom: 12px;
`;

const UpperContentWrapper = styled.View`
  display: flex;
  margin: 10px;
  background-color: rgba(239, 233, 233, 1);
  border-radius: 10px;
`;

const PickText = styled.Text`
  color: blue;
`;

const PickView = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

//약속 확정 짓기
const ButtonWrapper = styled.View`
  width: 100%;
  /* flex: 1; */
  /* height: 40px; */
  /* height: 100%; */
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentContainer = styled.View`
  flex: 8;
`;

const ButtonContainer = styled.View``;

const WhenToMeet = ({ route }) => {
  const data = route.params.props.item;

  //전송할 데이터 목록
  const x = data.x;
  const y = data.y;
  const placeName = data.place_name;
  const address = data.road_address_name;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //글 작성 목록
  const [title, setTitle] = useState('약속 이름을 정해줘');
  const [context, setContext] = useState('약속에 대한 설명을 적어줘');

  return (
    // <Text>안녕하세요</Text>
    <MainView>
      <MainText>약속 굳히기</MainText>
      <UpperContentWrapper>
        <SecondMainText>우리 여기서 만나기로 했어!</SecondMainText>
        <WhereToMeet>{placeName}</WhereToMeet>
      </UpperContentWrapper>
      <UpperContentWrapper>
        <SecondMainText>근데 언제 만나?</SecondMainText>
        <PickView>
          <View>
            <TouchableOpacity style={styles.button} onPress={showDatepicker}>
              <PickText>날짜 정하기</PickText>
            </TouchableOpacity>
          </View>
          <View>
            {/* <TouchableOpacity style={styles.button} onPress={showTimepicker} >
            <PickText>시간 정하기</PickText>
          </TouchableOpacity> */}
          </View>
        </PickView>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <WhereToMeet>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일에
          만나자!{' '}
        </WhereToMeet>
      </UpperContentWrapper>

      <UpperContentWrapper>
        <SecondMainText>약속의 제목을 정해줘!</SecondMainText>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
          />
        </SafeAreaView>
      </UpperContentWrapper>

      <UpperContentWrapper>
        <SecondMainText>약속에 대한 설명을 적어줘!</SecondMainText>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setContext}
            multiline
            numberOfLines={4}
            value={context}
          />
        </SafeAreaView>
      </UpperContentWrapper>

      <ButtonWrapper>
        <Text>안녕</Text>
      </ButtonWrapper>
    </MainView>
  );
};

export default WhenToMeet;
