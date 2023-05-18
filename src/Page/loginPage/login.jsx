import React, { useState } from "react";
import styled from "./login.module.scss";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

export default function LoginAuth() {
	const [value, setValue] = useState({
		username: "",
		password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleLogin = async () => {
		try {
			const { data } = await axios.post(
				"http://159.223.57.121:8090/auth/login",
				{
					Username: value.username,
					Password: value.password,
				}
			);
			localStorage.setItem("_q", data.accessToken);
			window.location.reload();
		} catch (error) {
			toast.error("login error");
		}
	};
	return (
		<>
			<div className={styled.loginPage}>
				<div className={styled.contentContainer}>
					<div className={styled.introductionContainer}>
						<h1 className={styled.introductionContent}>
							Selamat Datang <br /> Marketplace Nabil Amran
						</h1>
					</div>
					<div className={styled.loginContainer}>
						<h1 className={styled.loginContent}>LOGIN</h1>
						<div className={styled.inputContainer}>
							<input
								className={styled.inputContent}
								type="text"
								placeholder="Username"
								onChange={handleChange("Username")}
							/>
							<input
								className={styled.inputContent}
								type="password"
								name="Password"
								id="password"
								placeholder="Password"
								onChange={handleChange("Password")}
							/>
							<button onClick={handleLogin} className={styled.submitButton}>
								Submit
							</button>
							<a className={styled.registerPlace} href="/auth/register">
								Belum punya Akun?
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
