import React, {PureComponent} from 'react';
import {loginRequest, registrationRequest} from '../../actions/auth';
import {getloginError, getRegistationError} from '../../reducers/auth';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import ParticlesParams from './particles-params';
import logo from './res/Logo.svg';
import titles from './titles';
import * as AE from './AuthElements';
import {getIsAuthorized} from '../../reducers/auth';
import {Redirect} from 'react-router-dom';

export class AuthPage extends PureComponent {
  state = {
    isLoginMode: true,
    email: '',
    password: '',
  };

  handleClickSwitchMode = event => {
    this.setState(state => ({...state, isLoginMode: !state.isLoginMode}));

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  handleClickTry = event => {
    const {isLoginMode, email, password} = this.state;
    const {loginRequest, registrationRequest} = this.props;

    if (email && password) {
      if (isLoginMode) loginRequest({email, password});
      else registrationRequest({email, password});
    }
  };

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  };

  renderForm = () => {
    const {isLoginMode, email, password} = this.state;
    const {loginError, registationError} = this.props;

    const errorMsg = loginError || registationError;

    return (
      <AE.Form>
        <AE.FormBody>
          <AE.EmailField>
            <AE.EmailIcon />
            <AE.EmailInput
              type="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              placeholder="email"
            />
          </AE.EmailField>
          <AE.PasswordField>
            <AE.PasswordIcon />
            <AE.PasswordInput
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              placeholder="password"
            />
          </AE.PasswordField>
          {errorMsg && <p>{errorMsg}</p>}
          <AE.Button onClick={this.handleClickTry}>{titles.buttons[isLoginMode]}</AE.Button>
        </AE.FormBody>
      </AE.Form>
    );
  };

  renderFooter = () => {
    const {isLoginMode} = this.state;
    return (
      <AE.Footer>
        <p>
          {titles.linkTitle[isLoginMode]}{' '}
          <a href="/" onClick={this.handleClickSwitchMode}>
            {titles.link[isLoginMode]}
          </a>
        </p>
      </AE.Footer>
    );
  };

  render() {
    if (this.props.isAuthorized) return <Redirect to="/trade" />;

    return (
      <AE.Main>
        <AE.Container>
          <AE.Wrapper>
            <AE.Logo src={logo} alt="project logo" />
            {this.renderForm()}
            {this.renderFooter()}
          </AE.Wrapper>
        </AE.Container>
        <Particles params={ParticlesParams} />
      </AE.Main>
    );
  }
}

const mapStateToProps = store => ({
  loginError: getloginError(store),
  registationError: getRegistationError(store),
  isAuthorized: getIsAuthorized(store),
});

const mapDispatchToProps = {
  loginRequest,
  registrationRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
