import React from "react";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div style={styles.loader}></div>
      <p style={styles.text}>Загрузка...</p>
    </div>
  );
};

const styles = {
  loaderWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loader: {
    border: "8px solid #f3f3f3", /* Light grey */
    borderTop: "8px solid #3498db", /* Blue */
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
  },
  text: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#3498db",
  },
};



export default Loader;
