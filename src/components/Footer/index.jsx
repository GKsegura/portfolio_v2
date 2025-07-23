import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Desenvolvido por <strong>José Segura</strong> • © {new Date().getFullYear()}
            </p>
            <p>
                Projeto desenvolvido utilizando <strong>React</strong> com <strong>JavaScript</strong> e <strong>Vite</strong>.
            </p>
            <div className={styles.links}>
                <a href="https://github.com/GKsegura" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.icon} /> GitHub
                </a>
                <a href="mailto:jose.segura.ms@gmail.com">
                    <FaEnvelope className={styles.icon} /> Contato
                </a>
                <a href="https://www.linkedin.com/in/jose-a-segura-m-da-silva/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.icon} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/_jose.segura/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} /> Instagram
                </a>
            </div>
        </footer>
    );
}
