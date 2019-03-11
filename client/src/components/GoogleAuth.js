import React from 'react';
import { connect } from 'react-redux';


import { SignIn, SignOut } from 'actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '678004991275-v60d6tngp8h6m7civv3je3abar4qaqtr.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
          this.props.SignIn(this.auth.currentUser.get().getId());
      }
      else {
        this.props.SignOut();
      }
  }

  onSignInClick = () => {
      this.auth.signIn();
  }

  onSignOutClick = () => {
      this.auth.signOut();
  }

    renderAuthButton() {
        const { isSignedIn } = this.props;
        if (isSignedIn === null) {
            return null;
        }
        else if (isSignedIn === false) {
            return (
              <button className='btn-login-google' onClick={ this.onSignInClick }> Sign in </button>
            );
        }
          return (
            <button className='btn-login-google' onClick={ this.onSignOutClick }> Sign out </button>
          );
    }

    render() {
        return (
          <div>
            {this.renderAuthButton()}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
