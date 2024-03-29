import React from 'react';
import '../css/Header.css';
import { Box, IconButton, Avatar } from '@mui/material';
import { Menu, DarkMode, WbSunny } from '@mui/icons-material';
import { useMainContext } from '../context/contexts_/MainContext';
import { useNavigate } from 'react-router-dom';
const Header = () => {
	const {
		main_state: { istheme },
		main_dispatch,
	} = useMainContext();
	const navigate = useNavigate();
	return (
		<div className="header">
			<Box>
				<h3 onClick={() => navigate('/')}>Logo Here</h3>
			</Box>
			<Box className="toggle__button">
				{istheme ? (
					<IconButton
						onClick={() =>
							main_dispatch({ type: 'THEME', payload: istheme })
						}
					>
						<DarkMode />
					</IconButton>
				) : (
					<IconButton
						onClick={() =>
							main_dispatch({ type: 'THEME', payload: istheme })
						}
					>
						<WbSunny />
					</IconButton>
				)}
				<IconButton className="menu">
					<Menu />
				</IconButton>

				<Avatar />
			</Box>
		</div>
	);
};

export default Header;
