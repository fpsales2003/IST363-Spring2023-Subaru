import classNames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classNames.bind(styles);

const Heading = ({children,
    level,
    textAlign
}) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    const headingClasses = cx({
        heading: true,
        [`heading${level}`] : level,
        [`text-align-${textAlign}`] : textAlign
    });

    return <Tag className={headingClasses}>
        {children}
    </Tag>
}
export default Heading;