import React,{useState} from "react";
import styled from "styled-components";
import { Touchable,Platform ,Button,View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import StyleSheet from 'react-native';

// const styles = StyleSheet.create({ 
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'white',
//   },
//   textInput: {
//       fontSize: 16,
//       color: '#000000',
//       height: 50, 
//       width: 300, 
//       borderColor: '#000000', 
//       borderWidth: 1, 
//       borderRadius: 12,
//       padding: 10
//   }
// })


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

export default function WhenToMeet({route}){
  
  const data = route.params.props.item;
  
  //전송할 데이터 목록
  const x = data.x;
  const y = data.y;
  const placeName = data.place_name;
  const address = data.road_address_name;

  const [date, setDate] = useState(new Date(1598051730000));
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

  return(
    <MainView>
      <MainText>약속 굳히기</MainText>
      <UpperContentWrapper>
        <SecondMainText>우리 여기서 만나기로 했어!</SecondMainText>
        <WhereToMeet>{placeName}</WhereToMeet>
      </UpperContentWrapper>
      <UpperContentWrapper>
        <SecondMainText>근데 언제 만나?</SecondMainText>
        <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
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
    </View>
        <WhereToMeet>{date.getFullYear()}</WhereToMeet>
        <WhereToMeet>{date.getMonth()}</WhereToMeet>
        <WhereToMeet>{date.getDate()}</WhereToMeet>
      </UpperContentWrapper>
    </MainView>
  )
}