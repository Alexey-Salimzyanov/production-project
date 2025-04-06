import { classNames } from 'shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

export function Navbar(props: NavbarProps) {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima perspiciatis alias eaque, quia laboriosam earum eos velit blanditiis sed voluptatibus perferendis vitae saepe sapiente in cumque expedita. Enim, distinctio.
            </Modal>
        </div>
    );
}
