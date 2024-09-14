import { useState, useEffect } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import {
	Careers,
	Checklist,
	Colleges,
	Dashboard,
	FinancialAid,
	ForgotPass,
	Landing,
	Login,
	Majors,
	MyCounselor,
	MyPoints,
	Profile,
	Scholarships,
	SignUp,
	Volunteering,
} from "./Pages/index"
import "./App.css"
import ProtectedRoute from "./Components/ProtectedRoute"
import scholarshipData from "./Pages/Scholarships/Scholarships-list.json"

function Logout() {
	localStorage.clear()
	return <Navigate to="/login" />
}

function SignUpAndLogout() {
	localStorage.clear()
	return <SignUp />
}

function App() {
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		const savedFavorites = localStorage.getItem("favorites")
		if (savedFavorites) {
			setFavorites(JSON.parse(savedFavorites))
		}
	}, [])

	const handleFavoriteToggle = (scholarship) => {
		setFavorites((prevFavorites) => {
			const isFavorite = prevFavorites.some(
				(fav) => fav.name === scholarship.name
			)
			const updatedFavorites = isFavorite
				? prevFavorites.filter((fav) => fav.name !== scholarship.name)
				: [...prevFavorites, scholarship]

			localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
			return updatedFavorites
		})
	}

	const clearFavorites = () => {
		setFavorites([])
		localStorage.removeItem("favorites")
	}

	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUpAndLogout />} />
					<Route path="/forgot-password" element={<ForgotPass />} />
					<Route
						path="/dashboard"
						element={
							// <ProtectedRoute>
							<Dashboard
								favorites={favorites}
								clearFavorites={clearFavorites}
								onToggleFavorite={handleFavoriteToggle}
							/>
							// </ProtectedRoute>
						}
					/>
					<Route path="/checklist" element={<Checklist />} />
					<Route path="/counselor" element={<MyCounselor />} />
					<Route path="/points" element={<MyPoints />} />
					<Route path="/financial-aid" element={<FinancialAid />} />
					<Route
						path="/scholarships"
						element={
							<Scholarships
								scholarshipData={scholarshipData}
								favorites={favorites}
								onToggleFavorite={handleFavoriteToggle}
							/>
						}
					/>
					<Route path="/colleges" element={<Colleges />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/majors" element={<Majors />} />
					<Route path="/volunteering" element={<Volunteering />} />
					<Route
						path="/profile"
						element={
							<Profile
								favorites={favorites}
								clearFavorites={clearFavorites}
								onToggleFavorite={handleFavoriteToggle}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
