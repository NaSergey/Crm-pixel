import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../../services/ApiReq";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (data: { login: string; password: string }) =>
      apiRequest("/auth/login/", data),
    onSuccess: (response) => {

      if (response?.success) {
        localStorage.setItem(
          window.location.origin + "_pixelcrm_user_data",
          JSON.stringify(response.data)
        );
        localStorage.setItem(
          window.location.origin + "_pixelcrm_check_last_auth_date",
          String(Date.now())
        );
        console.log("Успешный вход!");
        navigate("/main");
      } else {
        alert("Ошибка: " + (response?.info || "Неизвестная ошибка"));
      }
    },
    onError: (error) => {
      alert("Ошибка запроса: " + error);
    },
  });

  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login || !password) {
      alert("Введите логин и пароль");
      return;
    }
    mutation.mutate({ login, password });
  };

  return (
    <div className="bg-[#472616] border-[#F44900] border p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-center">Authorization</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-200 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-200 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:border-[#F44900]"
          disabled={mutation.isPending} // Делаем кнопку неактивной во время запроса
        >
          {mutation.isPending ? "Logging in..." : "Log In"}
        </button>
      </form>
      {mutation.isError && (
        <p className="text-red-500 text-center mt-2">
          Ошибка: {mutation.error.message}
        </p>
      )}
    </div>
  );
}

export default Login;
