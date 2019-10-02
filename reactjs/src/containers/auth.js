import React from 'react';
export default function container(Component) {
  class AuthContainer extends React.Component {
    state = {
      loggedIn: false,
    }

    render() {
      const { loggedIn } = this.state;
      return (
        <Component
          /* pass all other props that are being passed to this component forward */
          {...this.props}
          loggedIn={loggedIn}
        />
      );
    }
  }
  return AuthContainer;
}
