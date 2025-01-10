import { classNames } from 'shared/lib/classNames/ClassNames';
import { FC } from 'react';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.page__loader, {}, [className])}>
            <Loader />
        </div>
    );
};
