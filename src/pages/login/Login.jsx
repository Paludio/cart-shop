import { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin as userLoginAction } from '../../redux/actions/user.action'
import './login.css'

class Login extends Component {
  state = {
    name: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  onClick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { name } = this.state;

    dispatch(userLoginAction({ name, isLogged: true }));
  }

  render() {
    const { name } = this.state;
    const { history, isLogged} = this.props;
    
    console.log(isLogged);

    if (isLogged) history.push('/cart');

    return (
      <form
        className="formLogin"
        onSubmit={(event) => this.onClick(event)}
      >
        <label>
          <h3>Nome</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <button
          type='submit'
        >
          Entrar
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.userReducer.isLogged,
});


export default connect(mapStateToProps)(Login);