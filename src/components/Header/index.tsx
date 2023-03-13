import styles from './Header.module.css';

import ingiteLogo from '../../assets/ignite-logo.svg';
export function Header() {
  return(
    <header className={styles.header}>
      <img src={ingiteLogo} alt="Logotipo do Ignite Feed" />
    </header>
  );
}