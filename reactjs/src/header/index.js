import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContainer from '../containers/auth';
class Header extends React.Component {
  logUserOut = () => {
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
          <h1>
            <Link to="/" className={styles.header__brand}>Decision Maker</Link>
          </h1>
          <div className={styles.links}>
            {loggedIn && (
            <React.Fragment>
            <Link to="/admin/decisions" className={styles.header__link}>Dashboard</Link>
            <Link to="/admin/decisions/new" className={styles.header__link}>Create a new decision</Link>
              <a href="/logout" className={styles.header__link}>Logout</a>
            </React.Fragment>
            )}

            {!loggedIn && (
            <Link to="/login" className={styles.header__link}>Login</Link>
            )}

          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: false,
};

export default AuthContainer(Header);
