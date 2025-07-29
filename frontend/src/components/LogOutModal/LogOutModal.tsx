import styles from "./LogOutModal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message?: string;
}

const LogOutModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    message = "Are you sure you want to logout?",
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.containerBackground} onClick={onClose}>
            <div className={styles.logoutModal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {message}
                    </h2>
                    <div className={styles.logoutModalBtn}>
                        <button
                            onClick={onClose}
                            className={styles.cancelButton}
                        >
                            No
                        </button>
                        <button
                            onClick={onConfirm}
                            className={`${styles.confirmButton} ${styles.redButton}`} 
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
