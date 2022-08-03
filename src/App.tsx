import { CheckCircle, PlusCircle, Trash } from "phosphor-react";
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

                {/* <button>
                    Criar

                    <img src={iconPlus} alt="ícone para adicionar nova tarefa" />
                </button> */}
                <button>
                    Criar

                    <PlusCircle size={16} alt="ícone para adicionar nova tarefa" />
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
                ${taskList.length ? styles["list-tasks"] : styles["border-datails-task"]}
                `} >
                    {/* {!taskList.length && <EmptyList /> } */}
                    {
                        taskList.length ?
                            <>
                                <div className={styles.task} >
                                    {/* <label className="container-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label> */}
                                    {/* <button onClick={() => console.log("Clicou.")} >
                                        <CheckCircle size={20} weight="regular" color="var(--blue-400)" />
                                    </button> */}
                                    <div className={styles["container-checkbox"]}>
                                        <input type="checkbox" name="task-done" id="checked-task-01" />
                                        <label htmlFor="checked-task-01" ></label>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Praesentium fugit id reiciendis suscipit si perferendis corporis,
                                        excepturi sit ab quibusdam recusandae vero harum quos
                                        quo cumque ut est minus?
                                        Consectetur, suscipit autem.
                                    </p>

                                    {/* <button type="button" title="Apagar tarefa" >
                                        <img src={iconDelete} alt="ícone de apagar tarefa" />
                                    </button> */}
                                    <button type="button" title="Apagar tarefa" className="delete" >
                                        <Trash size={18} alt="ícone de apagar tarefa" />
                                    </button>
                                </div>

                                <div className={styles.task} >
                                    {/* <input type="checkbox" name="" id="" /> */}
                                    <div className={styles["container-checkbox"]}>
                                        <input type="checkbox" name="task-done" id="checked-task-02" />
                                        <label htmlFor="checked-task-02" ></label>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Praesentium fugit id reiciendis perferendis corporis,
                                        excepturi sit ab quibusdam recusandae vero harum quos
                                        quo cumque ut est minus?
                                        Consectetur, suscipit autem.
                                    </p>

                                    <button type="button" title="Apagar tarefa" >
                                        <Trash size={18} alt="ícone de apagar tarefa" />
                                    </button>
                                </div>
                            </> :
                            <EmptyList />
                    }
                </div>
            </main>
        </div>
    );
}
