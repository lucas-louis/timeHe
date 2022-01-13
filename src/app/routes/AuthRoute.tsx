import { Route, RouteProps } from 'react-router-dom';

import { Text, VStack } from '@chakra-ui/react';

import { Header } from 'components/Header';

import '@fontsource/sora';

import { eventName, eventSubName, titleColor } from 'config/AppConfig';

type AuthRouteProps = { children: JSX.Element } & RouteProps;

const AuthRoute = ({ children, ...rest }: AuthRouteProps): JSX.Element => (
	<Route {...rest}>
		<Header />
		<VStack spacing="24px" mt="32px">
			<VStack>
				<Text
					fontSize={{
						base: '24px',
						sm: '48px',
						md: '64px',
						lg: '96px',
					}}
					fontWeight="700"
					color={titleColor}
					id="ipc-title"
					textAlign="center"
					fontFamily="Sora"
				>
					{eventName}
				</Text>
				<Text
					fontSize={{
						base: '16px',
						sm: '32px',
					}}
					fontWeight="700"
					color={titleColor}
					id="ipc-title"
					textAlign="center"
					fontFamily="Sora"
				>
					{eventSubName}
				</Text>
			</VStack>
			<VStack w={{ base: '85%', md: '70%', xl: '50%' }}>{children}</VStack>
		</VStack>
	</Route>
);

export default AuthRoute;
