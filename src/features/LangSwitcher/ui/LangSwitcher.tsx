import { Button, VariantButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const {className} = props

	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			variant={VariantButton.CLEAR}
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	)

}


