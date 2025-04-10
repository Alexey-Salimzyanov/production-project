import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
    PRIMARY_INVERTED = 'primaryInverted',
    SECONDARY_INVERTED = 'secondaryInverted',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
