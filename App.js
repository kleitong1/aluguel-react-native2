import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserForm from './src/views/UserForm'
import UserList from './src/views/UserList'
import { Button, Icon } from 'react-native-elements'

const Stack = createNativeStackNavigator()

export default props => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
            <Stack.Screen 
                name="UserList"
                component={UserList}
                options={() => {
                  return {
                    title: "Lista de inquilinos",
                    headerRight: () => (
                      <Button 
                        type="clear"
                        icon={<Icon name="add" size={25} color="white" />}
                        />
                    )
                  }
                }}               
            />

        <Stack.Screen 
                name="UserForm"
                component={UserForm}
                options={{
                  title: "Formulário de Usuarios"
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}