import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

import CodeLayout from '../CodeDisplay/Layout/CodeLayout';

class HomePage extends Component {
	state = {
		Show_Styled_Content: false,
		data: {}
	}

	async componentDidMount() {
		try {
			let data = await axios.get('http://localhost:8000/');
			let resume_Data = data.data.info
			console.log(resume_Data);
			this.setState(prevState => ({
				data: {...prevState.data, resume_Data}
			}));
			
		} catch(error) {

		}
	}

	render() {
		return(
			<Container>
				<Button variant="primary" size="lg" block>{this.state.Show_Styled_Content ? 'Un-Style Content': 'Style Content'}</Button>
				{/* Display code */}
				<CodeLayout data={this.state.data}/>
			</Container>
		)
	}
}

export default HomePage;