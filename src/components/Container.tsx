import React from 'react';
import { View, ViewProps } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { cn } from '@/libs/utils';

type ContainerProps = ViewProps & {

}

export function Container({ ...rest }: ContainerProps) {

  return (
    <SafeAreaProvider> 
      <View {...rest}  className={cn(rest.className, `flex-1 items-center bg-zinc-100 pt-11 px-4`)}>
        {rest.children}
      </View>
    </SafeAreaProvider>
  )
}