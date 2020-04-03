import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { signup, resetRegister } from "../../../redux/actions/userActions";
import { isEmail, isValidUsername, isValidPassword, isValidname, isPhonenumber} from '../../../helpers/validations/signup';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone: "",
        password: ""
      },
      errors: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
      }
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    const { user, errors } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: ''
      }
    });
  };

  onRegister = e => {
    e.preventDefault();
    const { user, errors } = this.state;
    const { firstname, lastname, username, email, phone, password } = user;

    if (!isValidname(firstname)) {
      this.setState({
        errors: {
          ...errors,
          firstname: 'Firstname must be valid'
        }
      });
    } else if (!isValidname(lastname)) {
      this.setState({
        errors: {
          ...errors,
          lastname: 'Lastname must be valid'
        }
      });
    } else if (!isValidUsername(username)) {
      this.setState({
        errors: {
          ...errors,
          lastname: 'Username must be valid'
        }
      });
    } else if (!isEmail(email)) {
      this.setState({
        errors: {
          ...errors,
          email: 'Email must be valid'
        }
      });
    } else if (!isPhonenumber(phone)) {
      this.setState({
        errors: {
          ...errors,
          phone: 'Phone must be valid'
        }
      });
    } else if (isValidPassword(password) === false) {
      this.setState({
        errors: {
          ...errors,
          password: 'Password must be valid'
        }
      });
    } else {
      this.props.signup(this.state.user);
    }
  };

  render() {
    const { firstname, lastname, email, username, phone, password } = this.state.errors;
    if (this.props.auth.registered) {
      this.props.resetRegister();
      return <Redirect to="/login" />;
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onRegister}>
                    <h1>Register</h1>
                    <p className="text-muted">
                      Create your account or <Link to="/login">Login</Link>
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        onChange={this.onChange}
                        name="firstname"
                        placeholder="Firstname"
                        autoComplete="firstname"
                        invalid={firstname !== '' ? true : false }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        onChange={this.onChange}
                        name="lastname"
                        placeholder="Lastname"
                        autoComplete="lastname"
                        invalid={lastname !== '' ? true : false }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        onChange={this.onChange}
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        invalid={username !== '' ? true : false }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        onChange={this.onChange}
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        invalid={email !== '' ? true : false }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        onChange={this.onChange}
                        name="phone"
                        placeholder="Phonenumber"
                        autoComplete="phone"
                        invalid={phone !== '' ? true : false }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        onChange={this.onChange}
                        name="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        invalid={password !== '' ? true : false }
                      />
                    </InputGroup>
                    <Button color="success" block>
                      {this.props.auth.registering
                        ? "Creating account..."
                        : "Create Account"}
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  signup,
  resetRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
