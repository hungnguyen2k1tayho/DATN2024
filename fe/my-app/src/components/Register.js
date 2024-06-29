import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const repose = await axios.post("/api/register", { email, password });
      console.log(repose.data);
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng ký ", error);
    }
  };

  return (
    <div className="register-gr">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  );
}

export default Register;
