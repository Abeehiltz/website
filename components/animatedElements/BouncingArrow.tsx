import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './BouncingArrow.module.css';

export default function BouncingArrow(props) {
  return <ArrowDownIcon {...props} className={styles.bounce} />;
}
