// src/styles/reactSelectStyles.js

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#272b30",
    border: "none",
    boxShadow: state.isFocused ? "0 0 5px rgba(255, 255, 255, 0.5)" : "none",
    color: "white",
    
    borderRadius: "25px",
    padding: "0px 10px",
    transition: "box-shadow 0.2s ease-in-out",

  }),
  input: (base) => ({
    ...base,
    color: "white", // <== добавлено
  }),
  singleValue: (base) => ({ ...base, color: "white" }),
  placeholder: (base) => ({ ...base, color: "rgba(255, 255, 255, 0.7)" }),
  menu: (base) => ({ ...base, backgroundColor: "#272b30" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#646cff" : "#272b30",
    color: "white",
  }),
};

  
export default customStyles;
