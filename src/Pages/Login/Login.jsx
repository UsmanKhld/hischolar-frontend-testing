import React from "react"
import "./Login.css"
import { useState } from "react"
import api from "../../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants"

export const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		setLoading(true)
		e.preventDefault()
		navigate("/dashboard")

		// try {
		// 	const res = await api.post("/api/token/", { username, password })
		// 	localStorage.setItem(ACCESS_TOKEN, res.data.access)
		// 	localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
		// 	navigate("/dashboard")
		// } catch (error) {
		// 	alert(error)
		// } finally {
		// 	setLoading(false)
		// }
	}

	return (
		<div className="background_color flex justify-center items-center">
			<div className=" rounded-xl h-128 shadow-lg w-96 bg-white py-9 px-5">
				<div className="flex justify-center text-6xl font-serif text-blue-700 mb-12 ">
					Login
				</div>
				<form onSubmit={handleSubmit}>
					<div className="inputs">
						<div className="input">
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Username"
								className="input-field"
							/>
							<label
								htmlFor="input-field"
								className="input-label"
							>
								Email
							</label>
							<span className="input-highlight"></span>
						</div>
						<div className="input">
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								className="input-field"
							/>
							<label
								htmlFor="input-field"
								className="input-label"
							>
								Password
							</label>
							<span className="input-highlight"></span>
						</div>
					</div>
					{loading ? (
						<button
							disabled
							className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-white rounded-full transition-all ease-in-out shadow-md active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r
    before:from-blue-500 before:to-blue-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full mr-4 mb-4"
						>
							Loading...
						</button>
					) : (
						<button type="submit" className="form_buttons">
							Login
						</button>
					)}
				</form>
				<a href="/forgot-password">
					<button className="form_buttons">Forgot Password</button>
				</a>
				<a href="/sign-up">
					<button className="form_buttons">Create an account</button>
				</a>
			</div>
		</div>
	)
}

export default Login
