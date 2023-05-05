import { useCallback, useEffect } from "react";

import styles from "./Toast.module.scss";
import { Link } from "react-router-dom";

const Toast = ({ toastlist, position, setAddCartModal }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setAddCartModal(toastListItem);
    },
    [toastlist, setAddCartModal]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <>
        <Link to="/store-cart">
            <div className={`${styles.container} ${styles[position]}`}>
            {toastlist.map((toast, i) => (
                <div
                key={i}
                className={`${styles.notification} ${styles.toast} ${styles[position]}`}
                style={{ backgroundColor: toast.backgroundColor }}
                >
                <button onClick={() => deleteToast(toast.id)}>X</button>
                <div>
                    <p className={styles.title}>{toast.title}</p>
                    <p className={styles.title}>{toast.product}</p>
                    <p className={styles.description}>{toast.description}</p>
                    <p className={styles.description}>{toast.tocart}</p>
                </div>
                </div>
            ))}
            </div>
        </Link>
    </>
  );
};

export default Toast;
