import { FaGithub, FaTimes } from 'react-icons/fa';
import languages from '../../../../../data/languages.json'; // importa direto o JSON
import styles from './Modal.module.css';

const Modal = ({ projeto, onClose, getStackEmoji }) => {
    const getIcon = (tec) => {
        const key = tec.toLowerCase().replace(/\s+/g, '');
        return languages?.[key];
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.projeto} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    <FaTimes size={20} />
                </button>

                <h3>{projeto.nomeProjeto}</h3>

                <div className={styles.projetoConteudo}>
                    {/* LADO ESQUERDO */}
                    <div className={styles.left}>
                        <img
                            src={projeto.imagemProjeto}
                            alt={projeto.nomeProjeto}
                            className={styles.projetoImage}
                        />

                        {projeto.anoDesenvolvimento && (
                            <small className={styles.year}>
                                Desenvolvido em: {projeto.anoDesenvolvimento}
                            </small>
                        )}

                        <ul className={styles.languages}>
                            {projeto.languages?.map((tec, index) => {
                                const iconUrl = getIcon(tec);
                                return (
                                    <li key={index}>
                                        {iconUrl && (
                                            <img
                                                src={iconUrl}
                                                alt={tec}
                                                onError={(e) => (e.target.style.display = 'none')}
                                            />
                                        )}
                                        {tec}
                                    </li>
                                );
                            })}
                        </ul>

                        {projeto.status && (
                            <span className={`${styles.status} ${styles[projeto.status.toLowerCase().replace(/\s/g, '')]}`}>
                                {projeto.status}
                            </span>
                        )}
                    </div>

                    {/* LADO DIREITO */}
                    <div className={styles.right}>
                        <div className={styles.stackContainer}>
                            {projeto.stack && (
                                <span className={styles.stack}>
                                    <strong>{getStackEmoji(projeto.stack)} Stack:</strong> {projeto.stack}
                                </span>
                            )}
                        </div>

                        <div className={styles.description}>
                            {projeto.descricao?.split('\n').map((line, i) => (
                                line.trim() ? <p key={i}>{line}</p> : <br key={i} />
                            ))}
                        </div>

                        <div className={styles.linkContainer}>
                            {projeto.urlGithub && (
                                <a
                                    href={projeto.urlGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    <FaGithub className={styles.icon} />
                                    Ver projeto
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
