import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	ToggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	const ToggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		ToggleTheme,
	}

};

