import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  FormFeedback,
  InputGroup,
  Label,
  FormGroup,
  Button,
} from "reactstrap";
import { MobileView, BrowserView } from "react-device-detect";
import { validateAll } from "indicative/validator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { DoubleArrow } from "@material-ui/icons";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import { UserAction } from "../../actions/user";

import Loader from "../repeats/loader/Loader";

import Nav from "../web/nav/Nav";

import webLoginBg from "../../assets/images/opening/webLoginBg.jpg";

import "./Opening.css";

const Login = () => {
  let navigate = useNavigate();

  const loader = useSelector((state) => state.loader);

  const user = useSelector((state) => state.user);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const userAction = UserAction();

  const [state, setState] = useState({
    email: "",
    password: "",
    error: [],
  });

  const { email, password, error } = state;

  const onChangeValue = (e) => {
    let value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const rules = {
      email: "required|email",
      password: "required|string|min:6",
    };
    const message = {
      "email.string": "Email Must Be String.",
      "email.required": "Email is Required.",
      "email.email": "Please Enter Valid Email.",
      "password.required": "Password is Required.",
      "password.string": "Password Must Be String.",
      "password.min": "Password Must Be More Then 6 Character.",
    };

    validateAll(state, rules, message)
      .then(async () => {
        setState({
          ...state,
          error: [],
        });

        let data = {};

        /*data.firstName = "Mike";
        data.lastName = "Tyson";
        data.phone = "+74951270777";*/
        data.email = email;
        data.password = password;

        userAction.signIn(data);
      })
      .catch((errors) => {
        const formattedErrors = {};
        if (errors) {
          errors.forEach(
            (error) => (formattedErrors[error.field] = error.message)
          );
        }
        setState({
          ...state,
          error: formattedErrors,
        });
      });
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Loader loader={loader.loader} />
      <MobileView>
        <div className="PageDad">
          <div className="page openingPage">
            <div className="firstPage loginPage">
              <div className="loginArrowDiv">
                <Link to="/first">
                  <img
                    className="loginArrow"
                    src="/images/opening/rightArrow.png"
                  />
                </Link>
              </div>
              <div className="loginHDiv">
                <div className="loginH">
                  ברוכה הבאה, <br />
                  שרה
                </div>
              </div>
              <div className="firstPageContent loginPageContent">
                <Form className="form" role="form">
                  <div className="loginPageInputsAndBtns">
                    <div className="loginPageInputs">
                      <InputGroup>
                        {/* <div className="emailDiv"> */}
                        <Input
                          type="text"
                          className="email"
                          invalid={error && error.email ? true : false}
                          placeholder="אימייל"
                          id="email"
                          name="email"
                          value={email ? email : ""}
                          onChange={(e) => onChangeValue(e)}
                        />
                        <DoubleArrow className="double-arrow" />
                        {/* <img src={doubleArrow} /> */}
                        {/* </div> */}
                      </InputGroup>
                      <p className="loginFormFeedback">
                        {error && error.email ? error.email : ""}
                      </p>

                      <InputGroup className="passwordDiv">
                        <Input
                          type={visiblePassword ? "text" : "password"}
                          className="password"
                          invalid={error && error.password ? true : false}
                          placeholder="סיסמה"
                          id="password"
                          name="password"
                          value={password ? password : ""}
                          onChange={(e) => onChangeValue(e)}
                        />
                        <span
                          className="password-show-hide"
                          onClick={() => setVisiblePassword(!visiblePassword)}
                        >
                          {visiblePassword ? (
                            <Visibility className="visible" />
                          ) : (
                            <VisibilityOff className="visibleoff" />
                          )}
                        </span>
                      </InputGroup>
                      <p className="loginFormFeedback">
                        {error && error.password ? error.password : ""}
                      </p>

                      <div className="forget">שכחת את הסיסמה?</div>
                    </div>
                    <div className="firstPageBtns loginPageBtns">
                      <div
                        className="loginBtn loginLoginBtn"
                        onClick={(e) => submitLogin(e)}
                      >
                        התחברי
                      </div>

                      <div className="orDiv">
                        <div className="or">או</div>
                      </div>
                      <Link to="/signup">
                        <div className="signinBtn loginSigninBtn">הרשמי</div>
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <Nav />
        <div className="webLogin rtl d-flex justify-content-center align-items-center flex-column">
          <div className="webLoginMain">
            <div className="webLoginCard">
              <div className="container">
                <Button
                  type="button"
                  className="webLoginImgBtn"
                  onClick={goToSignUp}
                >
                  הרשמי
                </Button>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="webLoginImgDiv">
                      <img
                        src={webLoginBg}
                        className="webLoginImg"
                        alt="login"
                      />
                      <h1 className="webLoginImgH">ברוכה הבאה</h1>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="webLoginCardText">
                      <h1 className="webLoginCardTextH">התחברי לחשבון שלך</h1>
                      <div className="webLoginCardForm">
                        <Form className="form" role="form">
                          <FormGroup className="webLoginFormGroup">
                            <Label className="webLoginCardFormLabel">
                              כתובת מייל או שם משתמש
                            </Label>
                            <InputGroup>
                              <MailOutlineIcon className="formMailIcon" />
                              <Input
                                type="text"
                                className="webLoginCardFormEmail"
                                invalid={error && error.email ? true : false}
                                id="email"
                                name="email"
                                value={email ? email : ""}
                                placeholder="הכניסי כתובת מייל או שם משתמש"
                                onChange={(e) => onChangeValue(e)}
                              />
                            </InputGroup>
                            <p className="webLoginFormFeedback">
                              {error && error.email ? error.email : ""}
                            </p>
                          </FormGroup>
                          <FormGroup className="webLoginFormGroup">
                            <Label className="webLoginCardFormLabel">
                              סיסמה
                            </Label>
                            <InputGroup>
                              <span
                                className="webPasswordShowHide"
                                onClick={() =>
                                  setVisiblePassword(!visiblePassword)
                                }
                              >
                                {visiblePassword ? (
                                  <Visibility className="webPasswordVisible" />
                                ) : (
                                  <VisibilityOff className="webPasswordVisibleoff" />
                                )}
                              </span>
                              <Input
                                type={visiblePassword ? "text" : "password"}
                                className="webLoginCardFormPassword"
                                invalid={error && error.password ? true : false}
                                id="password"
                                name="password"
                                value={password ? password : ""}
                                placeholder="הכניסי סיסמה"
                                onChange={(e) => onChangeValue(e)}
                              />
                            </InputGroup>
                            <p className="webLoginFormFeedback">
                              {error && error.password ? error.password : ""}
                            </p>
                          </FormGroup>
                          <div className="webLoginForPassAndRemMeDiv">
                            <div className="webLoginRememberMeDiv">
                              <InputGroup>
                                <Label className="webLoginRememberMeLabel">
                                  זכור אותי
                                </Label>
                                <Input
                                  type="checkbox"
                                  className="webLoginRememberMe"
                                  id="rememberMe"
                                  name="rememberMe"
                                />
                              </InputGroup>
                            </div>
                            <div className="webLoginForgotPasswordDiv">
                              <Link
                                to={"#"}
                                className="webLoginForgotPasswordLink"
                              >
                                <p className="webLoginForgotPasswordText">
                                  שכחת את הסיסמה?
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div className="webLoginFormBtnDiv">
                            <Button
                              type="button"
                              className="webLoginCardFormLoginBtn"
                              onClick={(e) => submitLogin(e)}
                            >
                              התחברי
                            </Button>
                          </div>
                        </Form>
                      </div>
                      <span className="instantLoginLine">
                        <h2>
                          <span>התחברות מהירה</span>
                        </h2>
                      </span>
                      <div className="webLoginGoogleBtnDiv mt-4">
                        <Button className="webLoginGoogleBtn">
                          <GoogleIcon />
                          התחברי דרך גוגל
                        </Button>
                      </div>
                      <div className="webLoginFacebookBtnDiv mt-3">
                        <Button className="webLoginFacebookBtn">
                          <FacebookIcon />
                          התחברי דרך פייסבוק
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
};

export default Login;