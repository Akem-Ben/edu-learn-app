import Button from '@/components/Button';
import React from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

 const Welcome = () => {
    return (
      <View className='bg-white gap-4 p-4 flex-1 w-full text-center justify-center items-center'>
        <Animated.View className='w-full'
        entering={FadeInDown.duration(300).delay(200).springify()}>
            <Text className='text-5xl text-center leading-[3.5rem]'
            style={{fontFamily: 'BarlowExtraBold'}}>
                Discover and improve your skills.
            </Text>
        </Animated.View>

        <Animated.View className='w-full'
        entering={FadeInDown.duration(300).delay(400).springify()}>
            <Text className='text-xl text-center leading-[2rem]'
            style={{fontFamily: 'BarlowSemiBold'}}>
                Learn from the best courses & tutorials 🚀
            </Text>
        </Animated.View>

        <Animated.View className='w-full justify-center items-center mt-8'
        entering={FadeInDown.duration(300).delay(600).springify()}>
            <Button title={'Click Me'} />
        </Animated.View>

      </View>
    )
}


export default Welcome