import styles from "./index.module.scss";
import { state } from "../_app";
import Icons from "../../src/components/Icons/Icons";
import { useContext, useCallback } from "react";
import ConfirmModal from "../../src/components/ConfirmModal";

const User_settings = () => {
  const {
    icon,
    client,
    color,
    setColor,
    actModal,
    visibilityModal,
    setVisibilityModal,
  } = useContext(state);

  const save = useCallback(() => {
    client
      .patch(`/users/${localStorage.getItem("id")}`, {
        icon: icon,
        borderColor: color,
      })
      .then(() => window.location.reload());
  }, [icon, color]);

  const activeModal = () => {
    setVisibilityModal(true);
  };

  const deleteAccount = useCallback(() => {
    client
      .delete(`/users/${localStorage.getItem("id")}`)
      .then(() => localStorage.clear())
      .then(() => window.location.reload());
  }, []);

  return (
    <>
      <div className={styles.User_settings}>
        <h1>Settings</h1>
        <div className={styles.box}>
          <div className={styles.box1}>
            <p>Icons</p>
            <Icons icon={icon} />
            <div className={styles.box2}>
              <div>
                <p>Border color</p>
                <input
                  value={color}
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            </div>
            <button onClick={save}>Save</button>
          </div>
          <div className={styles.box3}>
            <p onClick={activeModal}>Delete account</p>
            <p>You will lose your saves and credentials.</p>
          </div>
        </div>
      </div>
      {visibilityModal && (
        <div>
          <ConfirmModal
            actModal={actModal}
            phrase={"Are you sure?"}
            onClickbtn1={deleteAccount}
            onClickbtn2={() => setVisibilityModal(false)}
          />
        </div>
      )}
    </>
  );
};

export default User_settings;
