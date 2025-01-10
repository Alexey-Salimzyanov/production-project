import { classNames } from 'shared/lib/classNames/ClassNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('lds-dual-ring', {}, [className])}>
            <div />
        </div>
    );
};
