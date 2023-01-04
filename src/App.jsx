import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useMainContext } from './context/contexts_/MainContext';
import Layout from './components/layout/Layout';
import {
	Feed,
	Dashboard,
	Login,
	List,
	Register,
	Single,
} from './pages';
function App() {
	const {
		main_state: { istheme },
		main_dispatch,
	} = useMainContext();

	return (
		<Layout>
			<Routes>
				<Route path="/">
					<Route index element={<Feed />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="login" element={<Login />} />
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route path="new" element={<Register />} />
					</Route>
					<Route path="admin">
						<Route index element={<List />} />
						<Route path=":adminId" element={<Single />} />
						<Route path="new" element={<Register />} />
					</Route>
				</Route>
			</Routes>
		</Layout>
	);
}
export default App;
