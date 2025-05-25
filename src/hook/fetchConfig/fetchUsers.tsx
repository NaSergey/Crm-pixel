import { apiRequest } from '../../services/ApiReq';

type UserQueryConfig = {
  select?: string[];
  where?: Record<string, any>[];
  transform?: (data: any[]) => any;
  single?: boolean;
};

export const fetchUsers = async (
  config: UserQueryConfig,
  url: string = '/users/get_users/'
) => {
  const result = await apiRequest(url, {
    select: config.select || ['id', 'name'],
    where: config.where || [],
  });

  if (!result?.success || !result.data) {
    throw new Error(result?.info || 'Fetch error');
  }

  const data = config.transform ? config.transform(result.data) : result.data;

  return config.single ? data[0] : data;
};
