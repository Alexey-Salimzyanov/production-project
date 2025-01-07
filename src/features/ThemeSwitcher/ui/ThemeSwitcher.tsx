import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/ClassNames";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, VariantButton } from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { className } = props

	const { theme, ToggleTheme } = useTheme()

	return (
		<Button
			variant={VariantButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={ToggleTheme}>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
}