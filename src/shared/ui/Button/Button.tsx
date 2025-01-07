import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum VariantButton{
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	variant: VariantButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const {className, children, variant, ...otherProps} = props

	return (
		<button 
		className={classNames(cls.Button, {}, [className, cls[variant]])}
		{...otherProps}
		>
			{children}
		</button>
	)
}

