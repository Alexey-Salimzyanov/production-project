import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Suspense, useContext, useState } from "react"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/ClassNames"

const App = () => {

	const { theme, ToggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={ToggleTheme}>Toggle</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPageAsync />} />
					<Route path="/" element={<MainPageAsync />} />
				</Routes>
			</Suspense>

		</div>
	)
}

export default App