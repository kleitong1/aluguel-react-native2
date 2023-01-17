import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from '../data/users'
import { Avatar } from 'react-native-elements'
import UserForm from './UserForm'

export default props => {

    function getUserItem({ item: user }) {
 
        return (
        <ListItem 
        bottomDivider 
        // key={user.id}
        // title={user.name}
        // subtitle={user.email}
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar 
        rounded source={{ uri: user.avatarUrl }}
        />
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            
        </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}



       // return (
        //     <ListItem
        //     Avatar rounded source={{uri: user.avatarUrl}}
        //     key={user.id}
        //     title={user.name}
        //     subtitle={user.email} 

        //      />



        // )