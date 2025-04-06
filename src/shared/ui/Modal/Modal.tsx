import { classNames } from 'shared/lib/classNames/ClassNames';
import {
    MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { log } from 'console';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 100;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content, {}, [cls[theme]])}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
