import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {highlight: props.highlight,
					  search: "search",
					  value: ''};
	}
	
	handleChange(e) {
		this.setState({ value: e.target.value });
	}


	render() {
		return (
		    <div className="NavigationBar">
		        <Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to='/'>Major Potential</Link>
						</Navbar.Brand>
					 <Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
					<Nav activeKey={this.state.highlight}>
						<NavItem eventKey={1} href="/colleges">
							Universities
						</NavItem>
						<NavItem eventKey={2} href="/cities">
							Cities
						</NavItem>
						<NavItem eventKey={3}  href="/majors">
							Majors
						</NavItem>
						<NavItem eventKey={4} href="/about">
							About
						</NavItem>
					</Nav>
					<Navbar.Form pullRight>
						<FormGroup>
							<FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange.bind(this)} />
						</FormGroup>{' '}
						<Link to={`/${this.state.search}/${this.state.value}`}><Button type="submit">Search</Button></Link>
					</Navbar.Form>
					</Navbar.Collapse>
				</Navbar>
		    </div>
		);
	}
}

export default NavigationBar;
