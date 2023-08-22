import React from 'react';
import { NativeBaseProvider } from 'native-base';

interface Props {
	children: React.ReactNode;
  }



const AppProvider = ({ children }: Props) => {

	return <NativeBaseProvider>{children}</NativeBaseProvider>;
};


export default AppProvider