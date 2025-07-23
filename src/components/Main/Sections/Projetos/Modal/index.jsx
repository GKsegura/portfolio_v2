import React from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import styles from './Modal.module.css';

const Modal = ({ projeto, onClose, getStackEmoji, languages }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.projeto} onClick={e => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    <FaTimes size={20} />
                </button>
                <h3>{projeto.title}</h3>

                <div className={styles.projetoConteudo}>

                    {/* LADO ESQUERDO */}
                    <div className={styles.left}>
                        <img src={projeto.image} alt={projeto.title} className={styles.projetoImage} />

                        {projeto.year && (
                            <small className={styles.year}>
                                Desenvolvido em: {projeto.year}
                            </small>
                        )}

                        <ul className={styles.languages}>
                            {projeto.languages.map((tec, index) => {
                                const key = tec.toLowerCase().replace(/\s+/g, '');
                                const iconUrl = languages[key];
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
                        <p>
                            {projeto.description.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <div className={styles.stackContainer}>
                            {projeto.stack && (
                                <span className={styles.stack}>
                                    <strong>{getStackEmoji(projeto.stack)} Stack:</strong> {projeto.stack}
                                </span>
                            )}
                        </div>

                        <div className={styles.linkContainer}>
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <FaGithub className={styles.icon} />
                                Ver projeto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
