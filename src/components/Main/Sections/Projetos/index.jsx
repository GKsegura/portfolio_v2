import { useState } from 'react';
import languages from '../../../../data/languages.json'; // 👈 importa aqui
import projetosData from '../../../../data/projetos.json';
import Modal from './Modal';
import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';

const getStackEmoji = (stack) => {
    switch (stack.toLowerCase()) {
        case 'full stack': return '🌐';
        case 'front-end': return '💻';
        case 'back-end': return '⚙️';
        default: return '📦';
    }
};

const Projetos = () => {
    const [selectedProjeto, setSelectedProjeto] = useState(null);

    const openModal = (projeto) => setSelectedProjeto(projeto);
    const closeModal = () => setSelectedProjeto(null);

    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {projetosData.map((projeto) => (
                    <div key={projeto.id}>
                        <ProjetoCard projeto={projeto} onVerMais={() => openModal(projeto)} />
                    </div>

                ))}
            </div>

            {selectedProjeto && (
                <Modal
                    projeto={selectedProjeto}
                    onClose={closeModal}
                    getStackEmoji={getStackEmoji}
                    languages={languages}
                />
            )}
        </section>
    );
};

export default Projetos;
