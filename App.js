import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ProfilesScreen from './Screen/ProfilesScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ProfilesScreen />
    </SafeAreaView>
  );
}