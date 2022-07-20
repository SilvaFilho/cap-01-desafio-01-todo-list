import { Header } from "./components/Header";

import styles from "./App.module.css";
import iconPlus from "./assets/icon-plus.svg";
import EmptyList from "./components/EmptyList";

const taskList = [];

export function App() {
    return (
        <div className={styles["container-app"]}>
            <Header />

            <div className={styles["container-add-task"]} >
                <input type="text" />

                <button>
                    Criar

                    <img src={iconPlus} alt="ícone para adicionar nova tarefa" />
                </button>
            </div>

            <main className={styles["container-tasks"]} >
                <div className={styles["container-brief-tasks"]} >
                    <div className={styles["container-tasks-created"]} >
                        <span>Tarefas criadas</span>
                        <span>0</span>
                    </div>

                    <div className={styles["container-tasks-finished"]} >
                        <span>Concluídas</span>
                        <span>0</span>
                    </div>
                </div>

                <div className={styles["container-details-tasks"]}>
                    {!taskList.length && <EmptyList /> }
                </div>
            </main>
        </div>
    );
}
