import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  ButtonGroup,
  Button,

} from 'reactstrap';
import { logoutUser } from '../../actions/user';
import { openSidebar, closeSidebar, changeSidebarPosition, changeSidebarVisibility } from '../../actions/navigation';

import avatar from '../../images/people/a5.jpg';

import s from './Header.module.scss';
import 'animate.css'

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = {
      visible: true,
      settingsOpen: false,
    };
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  doLogout() {
    this.props
      .dispatch(logoutUser());
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar())
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    return (
      <Navbar className={`d-print-none ${s.root}`}>
        <Nav className="ml-md-0 d-flex nav-responsive">
          <Dropdown nav isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className={`${s.notificationsMenu}`} style={{ marginRight: 'auto' }}>
            <DropdownToggle nav caret style={{ color: "#f4f4f5", padding: 0 }}>
              <span className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}>
                <img src={avatar} alt="..." />
              </span>
              <span className={`small ${s.accountCheck}`}>Shivang Awasthi</span>
            </DropdownToggle>
          </Dropdown>
          <NavItem className={`${s.divider} text-white`} />
          <Dropdown nav isOpen={this.state.settingsOpen} toggle={this.toggleSettingsDropdown}>
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <i className="glyphicon glyphicon-cog" />
            </DropdownToggle>
            <DropdownMenu className={`${s.dropdownMenu} ${s.settings}`}>
              <h6>Sidebar on the</h6>
              <ButtonGroup size="sm">
                <Button color="primary" onClick={() => this.moveSidebar('left')} className={this.props.sidebarPosition === 'left' ? 'active' : ''}>Left</Button>
                <Button color="primary" onClick={() => this.moveSidebar('right')} className={this.props.sidebarPosition === 'right' ? 'active' : ''}>Right</Button>
              </ButtonGroup>
              <h6 className="mt-2">Sidebar</h6>
              <ButtonGroup size="sm">
                <Button color="primary" onClick={() => this.toggleVisibilitySidebar('show')} className={this.props.sidebarVisibility === 'show' ? 'active' : ''}>Show</Button>
                <Button color="primary" onClick={() => this.toggleVisibilitySidebar('hide')} className={this.props.sidebarVisibility === 'hide' ? 'active' : ''}>Hide</Button>
              </ButtonGroup>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink onClick={this.doLogout} className={`${s.navItem} text-white`} href="#">
              <i className="glyphicon glyphicon-off" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-none">
            <NavLink onClick={this.toggleSidebar} className={`${s.navItem} text-white`} href="#">
              <i className="fa fa-bars" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar >
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

