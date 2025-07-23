import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>&lt;/&gt; José Segura<span className={styles.ponto}>.</span></div>
            <nav className={styles.nav}>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </header >
    );
}
