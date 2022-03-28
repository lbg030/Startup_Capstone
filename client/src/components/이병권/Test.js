import { React, useState } from "react";
import Axios from "axios";
function Test() {
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_id: "",
    user_password: "",
    user_password_confirm: "",
    user_email: "",
    user_mobile: "",
    user_gender: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    console.log(userInfo);
  };

  const submitUserInfo = () => {
    Axios.post("http://localhost:4000/api/insert", {
      user_name: userInfo.user_name,
      user_id: userInfo.user_id,
      user_password: userInfo.user_password,
      user_password_confirm: userInfo.user_password_confirm,
      user_email: userInfo.user_email,
      user_mobile: userInfo.user_mobile,
      user_gender: userInfo.user_gender,
    }).then(() => {
      alert("등록 완료!");
    });
  };

  return (
    <div className="Test">
      <h1>회원가입</h1>
      <div className="form-wrapper">
        <input
          className="user_name"
          type="text"
          placeholder="이름"
          onChange={getValue}
          name="user_name"
        />
        <input
          className="user_id"
          type="text"
          placeholder="아이디"
          onChange={getValue}
          name="user_id"
        />
        <input
          className="user_password"
          type="text"
          placeholder="비밀번호"
          onChange={getValue}
          name="user_password"
        />
        <input
          className="user_password_confirm"
          type="text"
          placeholder="비밀번호 확인"
          onChange={getValue}
          name="user_password_confirm"
        />
        <input
          className="user_email"
          type="text"
          placeholder="이메일"
          onChange={getValue}
          name="user_email"
        />
        <input
          className="user_mobile"
          type="text"
          placeholder="핸드폰 번호"
          onChange={getValue}
          name="user_mobile"
        />
        <input
          className="user_gender"
          type="text"
          placeholder="성별"
          onChange={getValue}
          name="user_gender"
        />
      </div>
      <button className="submit-button" onClick={submitUserInfo}>
        입력
      </button>
    </div>
  );
}

export default Test;
