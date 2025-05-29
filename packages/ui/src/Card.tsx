import React from 'react';
import { View, Text, Pressable, Platform, useWindowDimensions } from 'react-native';

interface CardProps {
  title: string;
  onPress?: () => void;
}

export function Card({ title, onPress }: CardProps) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const baseStyle = 'p-4 rounded-xl shadow-md';
  const bgColor = width > 768 ? 'bg-green-100' : 'bg-white';

  return (
    <Pressable
      className={\`\${baseStyle} \${bgColor}\`}
      onPress={onPress}
      accessibilityRole={isWeb ? 'button' : undefined}
    >
      <Text className="text-xl font-semibold">{title}</Text>
    </Pressable>
  );
}