import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
	Dashboard,
	Settings,
	Home,
	Person,
	AccountBox,
	Logout,
	BarChart,
	Notifications,
	LocalHospital,
	Edit,
	PersonAddAlt,
	AdminPanelSettings,
} from '@mui/icons-material';
import { useMainContext } from '../../context/contexts_/MainContext';
import './Sidebar.css';
const Sidebar = () => {
	const {
		main_state: { istheme },
	} = useMainContext();
	return (
		<Container className={!istheme ? 'sidebar' : 'darktheme'}>
			<Box className="sidebar__page">
				<Box className="Links">
					<p className="text-muted">MAIN</p>
					<Box className="sidebar__nav">
						<Dashboard
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="/dashboard" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Dashboard
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box className="Links">
					<p className="text-muted">FEED</p>
					<Box className="sidebar__nav">
						<Home
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="/" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Feed
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box className="Links">
					<p className="text-muted">LISTS</p>
					<Box className="sidebar__nav">
						<Person
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="/users" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Users
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<PersonAddAlt
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="users/new" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								New user
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<Edit
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link
							to="users/a user id is here"
							className="sidebar__links"
						>
							<Typography className="title" variant="subtitle">
								Edit User
							</Typography>
						</Link>
					</Box>
				</Box>

				<Box className="Links">
					<p className="text-muted">Admin</p>
					<Box className="sidebar__nav">
						<AccountBox
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link
							to="admin/profile/an admin id is here"
							className="sidebar__links"
						>
							<Typography className="title" variant="subtitle">
								Profile
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<PersonAddAlt
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="admin/new" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								New Admin
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box className="Links">
					<p className="text-muted">USEFUL</p>
					<Box className="sidebar__nav">
						<BarChart
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link
							to="admin/profile/an admin id is here"
							className="sidebar__links"
						>
							<Typography className="title" variant="subtitle">
								Stats
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<Notifications
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="admin/new" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Notifications
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box className="Links">
					<p className="text-muted">Service</p>
					<Box className="sidebar__nav">
						<LocalHospital
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link
							to="admin/profile/an admin id is here"
							className="sidebar__links"
						>
							<Typography className="title" variant="subtitle">
								Sys Health
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<Settings
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="admin/new" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Settings
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box className="Links">
					<p className="text-muted">USER</p>
					<Box className="sidebar__nav">
						<AdminPanelSettings
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="/login" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Login
							</Typography>
						</Link>
					</Box>
					<Box className="sidebar__nav">
						<Logout
							sx={{
								color: !istheme ? 'purple' : 'violet',
								fontSize: '1.2rem',
							}}
						/>
						<Link to="/logout" className="sidebar__links">
							<Typography className="title" variant="subtitle">
								Logout
							</Typography>
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
export default Sidebar;
