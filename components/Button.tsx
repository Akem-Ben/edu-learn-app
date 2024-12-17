import React from 'react';
import { Text, Pressable } from 'react-native';

interface ButtonProps {
    title: string;
    action?: () => void
}

const Button:React.FC<ButtonProps> = ({title, action}: ButtonProps) => {
    return (
      <Pressable onPress={action} className='bg-blue-700 rounded-3xl justify-center items-center py-5 w-3/4'>
        <Text className='text-white font-bold text-lg'> {title} </Text>
      </Pressable>
    )
}

export default Button