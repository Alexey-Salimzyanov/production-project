import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = (props :NotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
