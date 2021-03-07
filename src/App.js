import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import animation from "./components/contacts/AnimationContacts.module.css";
import PoneBook from "./components/phonebook";
import Form from "./components/form";
import ContactList from "./components/contacts";
import Filter from "./components/filter";
import { connect } from "react-redux";
import { fetchContacts } from "../src/redux/pb-operations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        <PoneBook />
        <Form />
        <Filter />
        <CSSTransition
          in={true}
          timeout={250}
          unmountOnExit
          classNames={animation}
        >
          <ContactList />
        </CSSTransition>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
