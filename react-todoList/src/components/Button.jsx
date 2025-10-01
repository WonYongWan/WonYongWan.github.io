import styles from './Button.module.scss';

function Button({ type = '', text }) {
  return <button className={[styles.button, styles[`${type}`]].join(' ')}>{text}</button>;
}

export default Button;
