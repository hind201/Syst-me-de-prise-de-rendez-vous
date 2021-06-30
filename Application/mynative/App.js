import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Admin from './src/Admin'
import User from './src/User'
import ScreenC from './src/ScreenC'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 
const Drawer = createDrawerNavigator();



function App(){
  return(
   <NavigationContainer>
   <Drawer.Navigator
   initialRouteName= 'Admin'
   drawerPosition='left'
   drawerType='front'
   edgeWidth={100}
   hideStatusBar={false}
   overlayColor='#000000090'
   drawerStyle={{
     backgroundColor:'#822659',
     with:250
   }}
   screenOptions={{
     headerShown:true, 
     swipeEnabled:true,
     gestureEnabled :true,
     headerTitleAlign:'center',
     headerStyle:{
       backgroundColor:'#B34180'
     } ,
     headerTintColor:'#ffffff',
     headerTitleStyle:{
       fontSize:25,
       fontWeight:'bold'
     }  ////brger
   }}
   >
     <Drawer.Screen 
     name="Admin"
     component = {Admin}
     options={{
       title:'Admin',
       drawerIcon:({focused}) =>(
        <FontAwesome5
        name='user-lock'
        size={focused ? 25 : 20}
        color = {focused ? '#E36BAE' : '#999999'}
        />
      )
    }}
     
    
     />
     <Drawer.Screen 
     name="User"
     component = {User}
     options={{
       title:'User',
       drawerIcon:({focused}) =>(
         <FontAwesome5
         name='users-cog'
         size={focused ? 25 : 20}
         color = {focused ? '#E36BAE' : '#999999'}
         />
       )
     }}
     />
      <Drawer.Screen Admins
     name="Screen_C"
     component = {ScreenC}
     options={{
       title:'Rendez-vous',
       drawerIcon:({focused}) =>(
         <FontAwesome5
         name='users-cog'
         size={focused ? 25 : 20}
         color = {focused ? '#E36BAE' : '#999999'}
         />
       )
     }}
     />
 </Drawer.Navigator>

   </NavigationContainer>
  )
}
 

export default App