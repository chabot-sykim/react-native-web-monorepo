import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Card } from 'ui';

export default function App() {
  return (
    <SafeAreaView>
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Mobile App</Text>
        <Card title="Hello from Mobile!" />
      </View>
    </SafeAreaView>
  );
}