import { Header } from "./components/Header";
import { EmptyList } from "./components/EmptyList";

import styles from "./App.module.css";
import iconPlus from "./assets/icon-plus.svg";
import iconDelete from "./assets/icon-delete.svg";

const taskList = [""];

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
                        <span>{taskList.length || "0"}</span>
                    </div>

                    <div className={styles["container-tasks-finished"]} >
                        <span>Concluídas</span>
                        <span>{taskList.length || "0"}</span>
                    </div>
                </div>

                <div className={`
                ${styles["container-details-tasks"]}
                ${taskList.length && styles["list-tasks"]}
                `} >
                    {/* {!taskList.length && <EmptyList /> } */}
                    {
                        taskList.length ?
                            <div className={styles.task} >
                                <input type="checkbox" name="" id="" />

                                <p>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. 
                                    Duis vel sed fames integer.
                                </p>

                                <button type="button" >
                                    <img src={iconDelete} alt="ícone de apagar tarefa" />
                                </button>
                            </div> :
                            <EmptyList />
                    }
                </div>
            </main>
        </div>
    );
}
