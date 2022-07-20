import styles from "./Header.module.css";

import logoTodoList from "../../assets/logo-todo-list.svg";

export function Header() {
    return (
        <div className={styles["container-header"]}>
            <img src={logoTodoList} alt="logo do aplicativo" />
        </div>
    );
}
