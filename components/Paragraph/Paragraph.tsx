import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({children, size='m', className, ...props}: ParagraphProps): JSX.Element => {
	return (
		<p {...props} className={cn(
			styles.paragraph, className,
			{[styles.xs]: size == 'xs',
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.l]: size == 'l',
			[styles.xl]: size == 'xl',
			[styles.xxl]: size == 'xxl'
		}
		)}>
		{children}
		</p>
	);
};
