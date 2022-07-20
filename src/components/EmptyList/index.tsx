import styles from "./EmptyList.module.css";

import iconClipboard from "../../assets/icon-clipboard.svg";

export default function EmptyList() {
    return (
        <div className={styles["container-emptylist"]} >
            <img src={iconClipboard} alt="ícone de lista de tarefas" />

            <p>
                <strong>Você ainda não tem tarefas cadastradas.</strong>

                <br />

                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}
