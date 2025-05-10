import { configureStore } from "@reduxjs/toolkit";

// Пример редьюсера (можно добавить свои редьюсеры)
const store = configureStore({
  reducer: {
    // Здесь будут твои редьюсеры
  },
});

export default store;
