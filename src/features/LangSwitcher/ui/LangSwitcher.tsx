import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';

interface LangSwitcherProps {
	className?: string;
    short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            variant={ButtonVariant.BACKGROUND_INVERTED}
            onClick={toggle}
        >
            {short ? t('Краткий Язык') : t('Язык')}
        </Button>
    );
};
