import React, { useState } from 'react';

import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
 import DatePicker from 'react-native-datepicker';
// import  DatePicker from 'react-native-modal-datetime-picker';

const styles = StyleSheet.create({
  body:{

flex:1,
justifyContent:'center',
alignItems:'center',

  },
 
  btn: {
    width: 300,
   
    marginTop: 50,
    backgroundColor: 'red',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#E36BAE',

    borderWidth: 1,
  },
  datePickerStyle: {
    width: 300,
    marginTop: 20,
    borderColor: '#E36BAE'
  },
  datePickerStyle2: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#E36BAE'
  
  },
});

const Planing = () => {
  const [data, setData] = useState('');
  const [datDepart, setDatDepart] = useState('01-01-2021');
  const [datFin, setDatFin] = useState('01-01-2021');

  const sendData = async () => {
    fetch('http://172.16.11.172:3000/date/planing', { 
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalRDV: parseInt(data, 10),
        dateDepart: datDepart,
        dateFin: datFin,
      }),
    });
  };
  return (
    <View style={styles.body}>
    <View style={styles.myform}>
      <Text style={{ 
        textAlign: 'center', 
        fontSize: 40,   
        color:'#822659',
        marginBottom: 60,
         }}>
       Create
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setData}
          value={data}
          placeholder="total RDV"
          keyboardType="numeric"
        />
        <DatePicker
          style={styles.datePickerStyle}
          date={datDepart}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
         
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              
            },
           
          }}
          onDateChange={dateDepart => setDatDepart(dateDepart)}
        />
        <DatePicker
          style={styles.datePickerStyle2}
          date={datFin} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
         
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              
            },
           
          }}
          onDateChange={dateFin => setDatFin(dateFin)}
        />
        <Button
          onPress={sendData}
          title="send"
          color="#822659"
          style={styles.btn}
        />
      </SafeAreaView>
    </View>
    </View>
  );
};

export default Planing;
