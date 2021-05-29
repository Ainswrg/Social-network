import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToPropsForRedirect = (state) => ({
   isAuth: state.auth.isAuth,
});

export const withAuthRedirectFromLogin = (Component) => {

   class RedirectComponent extends React.Component {
      render() {
         if(this.props.isAuth) return <Redirect to='/profile' />

         return <Component {...this.props} />
      }
   }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

   return ConnectedAuthRedirectComponent;
}