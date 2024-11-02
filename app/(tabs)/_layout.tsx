import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '@/constants';

const TabIcon = ({ icon, color, focused, name }: { icon: any, color: any, focused: boolean, name: string }) => {
  return (
    <View
      className='items-center justify-center gap-2'
    >
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color }}
      >{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "blue",
          height: 84
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name={'Home'}
            />
          )
        }}
      >

      </Tabs.Screen>
      <Tabs.Screen
        name='bookmark'
        options={{
          headerShown: false,
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              focused={focused}
              name={'Bookmark'}
            />
          )
        }}
      >

      </Tabs.Screen>
      <Tabs.Screen
        name='create'
        options={{
          headerShown: false,
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              focused={focused}
              name={'Create'}
            />
          )
        }}
      >

      </Tabs.Screen>
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
              name={'Profile'}
            />
          )
        }}
      >

      </Tabs.Screen>
    </Tabs>
  )
}

export default TabsLayout