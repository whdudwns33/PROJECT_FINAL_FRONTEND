import { Background, InputContainer, Logo, InputBox, Link } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonAxios from "../utils/common/CommonAxios";
import { Common } from "../utils/common/Common";
import { useAuth } from "../context/AuthContext";

const SigninPage = () => {
  const navigator = useNavigate();
  const { loginRole, accessToLogin } = useAuth();

  const emailInputRef = useRef(null);
  // useRef로 돔에 직접 컨트롤.
  // 렌더링 될 때, 이메일 입력창에 포인트
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [emailInputRef]);

  const [inputEmail, setInputEmail] = useState();
  const [inputPw, setInputPw] = useState();

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangePw = (e) => {
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
  };

  const onClickLogin = async () => {
    // 로컬 스토리지 비우기
    const memberDto = { memberEmail: inputEmail, memberPassword: inputPw };
    try {
      const res = await CommonAxios.postAxios("member", "login", memberDto);
      console.log("로그인 정보 : ", res.data);
      if (res.data.grantType === "Bearer") {
        const accessToken = res.data.accessToken;
        Common.setAccessToken(accessToken);
        // 회원 권한 설정
        loginRole(res.data.role);
        accessToLogin(accessToken);
        alert("환영합니다!!");
        navigator("/");
      } else {
        alert("입력 정보를 확인하시오.");
      }
    } catch (error) {
      alert("네트 워크 연결이 불안정합니다.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <>
      <Background>
        <Link to="/">
          <Logo src={headlogo} alt="logo" />
        </Link>
        <InputContainer>
          <div id="title">Login</div>
          <InputBox
            id="inputid"
            placeholder="E-Mail"
            onChange={onChangeEmail}
            ref={emailInputRef}
          ></InputBox>
          <InputBox
            id="inputpw"
            type="password"
            placeholder="Password"
            onChange={onChangePw}
          ></InputBox>
          <div id="linktext">
            <Link to="/findid">
              <span id="forgetid">이메일이 기억나지 않아요</span>
            </Link>
            <Link to="/findpw">
              <span id="forgetpw">비밀번호가 기억나지 않아요</span>
            </Link>
          </div>
          <div
            id="signbutton"
            onClick={onClickLogin}
            onKeyDown={() => handleKeyDown}
            role="button"
            tabIndex={0}
          >
            Sign in
          </div>
          <Link to="/signup">
            <div id="linktext" style={{ textAlign: "center" }}>
              아직 계정이 없으신가요?
            </div>
          </Link>
        </InputContainer>
      </Background>
    </>
  );
};

export default SigninPage;
