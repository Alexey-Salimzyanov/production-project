import { classNames } from 'shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

export function Navbar(props: NavbarProps) {
    const { className } = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
            </div>
        </div>
    );
}
