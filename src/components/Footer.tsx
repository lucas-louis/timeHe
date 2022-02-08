import { Box, Text, Center, Image, Link } from '@chakra-ui/react';

export const Footer = (): JSX.Element => (
	<Box zIndex={100} height="40px !important" minH="40px !important">
		<Center as="footer" w="100vw" h="40px" position="fixed" left="0" bottom="0">
			<Text color="white">⚡ by</Text>
			<Link href="https://github.com/lucas-louis/timeHe" isExternal>
				<Image
					src="https://raw.githubusercontent.com/lucas-louis/timeHe/3b35df9a2ff83411f21a283a43932ca51142a20e/.github/assets/timeHe-white-logo.svg"
					w="48px"
					ml="6px"
				/>
			</Link>
		</Center>
	</Box>
);
