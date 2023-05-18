import React, { useState } from "react";
import styled from "./register.module.scss";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

export default function RegisterAuth() {
	const [value, setValue] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleRegister = async () => {
		try {
			await axios.post("http://159.223.57.121:8090/auth/register", {
				nama: value.nama,
				email: value.email,
				password: value.password,
			});
			toast.success("register sukses");
		} catch (error) {
			toast.error("register error");
		}
	};
	return (
		<>
			<div className={styled.registerPage}>
				<div className={styled.contentContainer}>
					<div className={styled.introductionContainer}>
						<h1 className={styled.introductionContent}>
							Selamat Datang <br /> Marketplace Nabil Amran
						</h1>
					</div>
					<div className={styled.registerContainer}>
						<h1 className={styled.registerContent}>REGISTER</h1>
						<div className={styled.inputContainer}>
							<input
								className={styled.inputContent}
								type="text"
								placeholder="Username"
								onChange={handleChange("Username")}
							/>
							<input
								className={styled.inputContent}
								type="text"
								placeholder="Profile Name"
								onChange={handleChange("profileName")}
							/>
							<input
								className={styled.inputContent}
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								onChange={handleChange("Password")}
							/>
							<button onClick={handleRegister} className={styled.submitButton}>
								Submit
							</button>
							<a className={styled.registerPlace} href="/auth/login">
								Sudah Punya Akun
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
