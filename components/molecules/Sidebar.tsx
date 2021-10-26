import { Box } from '@chakra-ui/react';
import Account from '../atoms/Account';

const SidebarUI = () => {
	return (
		<Box
			h="100vh"
			minW="180px"
			transition="all .2s"
			px="4"
			shadow="dark-lg"
			pos="relative"
		>
			<Account />
		</Box>
	);
};

export default function Sidebar(): JSX.Element {
	return <SidebarUI />;
}