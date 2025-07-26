import { useEffect, useState } from 'react';
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
    const [projetos, setProjetos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProjeto, setSelectedProjeto] = useState(null);

    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await fetch('http://localhost:8080/projetos');
                if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
                const data = await response.json();

                const projetosTratados = data.map((projeto) => ({
                    ...projeto,
                    languages: projeto.tecnologias
                        ? projeto.tecnologias.split(',').map((lang) => lang.trim())
                        : [],
                }));

                setProjetos(projetosTratados);
                console.log(projetosTratados);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjetos();
    }, []);


    const openModal = (projeto) => setSelectedProjeto(projeto);
    const closeModal = () => setSelectedProjeto(null);

    if (loading) return <p>Carregando projetos...</p>;
    if (error) return <p>Erro ao carregar: {error}</p>;

    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {projetos.map((projeto) => (
                    <div key={projeto.idProjeto}>
                        <ProjetoCard projeto={projeto} onVerMais={() => openModal(projeto)} />
                    </div>
                ))}
            </div>
            {selectedProjeto && (
                <Modal
                    projeto={selectedProjeto}
                    onClose={closeModal}
                    getStackEmoji={getStackEmoji}
                />
            )}
        </section>
    );
};

export default Projetos;
