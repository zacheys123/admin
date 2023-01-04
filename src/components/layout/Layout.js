import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';
import Sidebar from '../homepage/Sidebar';
import './Layout.css';
function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<Box className="children">
				<Sidebar />
				{children}
			</Box>

			<Footer />
		</div>
	);
}
export default Layout;
