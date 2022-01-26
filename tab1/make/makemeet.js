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
import { useNavigation } from "@react-navigation/native";
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
  submit : {
    width: '40%',
    height: 40,
    color: 'white',
    backgroundColor: 'rgba(90, 164, 251, 1)',
    borderRadius: 10,
  }
})

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
  margin-top: 30px;
  justify-content: flex-end;
  align-items: center;
`;

const ContentContainer = styled.View`
  flex: 8;
`;

const SubmitButton = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
const SubmitView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

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


  const navigation = useNavigation();

  const submit = () => {
    const sendObj = new Object;
    sendObj['placeName'] = placeName;
    sendObj['address'] = address;
    sendObj['x'] = x;
    sendObj['y'] = y;
    sendObj['date'] = date;
    const params = {
      'data' : sendObj
    }
    
    //서버로 데이터 보내는 코드 필요

    navigation.reset({routes : [{name:"Default"}]})
  }

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
    
        <WhereToMeet>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일에 만나자! </WhereToMeet>
        
    </UpperContentWrapper>


    <UpperContentWrapper>
    <SecondMainText>약속의 제목을 정해줘!</SecondMainText>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText = {setTitle}
        value = {title}
      />
    </SafeAreaView>
    </UpperContentWrapper>


    <UpperContentWrapper>
      <SecondMainText>약속에 대한 설명을 적어줘!</SecondMainText>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText = {setContext}
          multiline
          numberOfLines={4}
          value = {context}
        />
      </SafeAreaView>
    </UpperContentWrapper>
    


    <ButtonWrapper>
      <TouchableOpacity style={styles.submit} onPress={submit}>
        <SubmitView>
          <View>
            <SubmitButton>약속 정했다</SubmitButton>
          </View>
        </SubmitView>
      </TouchableOpacity>
    </ButtonWrapper>
    
  </MainView>
  )
}


export default WhenToMeet;
