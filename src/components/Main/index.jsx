import styles from './Main.module.css';
import Contato from './Sections/Contato';
import Projetos from './Sections/Projetos';
import Sobre from './Sections/Sobre';

export default function Main() {
    return (
        <main className={styles.main}>
            <Sobre />
            <Projetos />
            <Contato />
        </main>
    );
}
