import React from 'react';

const NotFoundPage = () => {
	const notFoundStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: 'black', // You can set your desired background color
		color: 'white',
		fontSize: '3rem', // Adjust the font size as needed
	};

	return (
		<div style={notFoundStyle}>
			<h1>404 - Not Found</h1>
		</div>
	);
};

export default NotFoundPage;
