import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles: string[];
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles, children }) => {
  // Получаем данные пользователя из localStorage
  const userDataString = localStorage.getItem(window.location.origin + "_pixelcrm_user_data");
  const userData = userDataString ? JSON.parse(userDataString) : null;

  // Извлекаем токен и роль пользователя
  const authToken = userData?.auth_token;
  const userRole = userData?.role;

  // Проверяем, есть ли токен и разрешенная роль
  if (!authToken || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children; // Если всё ОК — рендерим запрашиваемую страницу
};

export default PrivateRoute;
