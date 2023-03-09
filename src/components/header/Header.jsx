import { Component } from "react";
import { connect } from "react-redux";
import './header.css'

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header
        className="header"
      >
        <h3>{`Bem vindo: ${name}`}</h3>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.userReducer.name,
})

export default connect(mapStateToProps)(Header)