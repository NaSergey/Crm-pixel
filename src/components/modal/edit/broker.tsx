import { useEffect, useState } from 'react';
import { apiRequest } from '../../../services/ApiReq'; // Импорт вашего apiRequest
import Input from '../../ui/select/select';
import Button from '../../ui/button/button';

const defaultManager = {
  label: 'select',
  value: null,
  leads_display: 'full',
  brokers_display: 'all',
  partners_display: 'all',
  access_to_create_broker: '0',
};

const Partner = ({ row, onClose }) => {
  const [partnerData, setPartnerData] = useState({
    name: '',
    email: '',
    role: '',
    comment: '',
    partner_token: '',
    manager: defaultManager,
    leads_display: 'full',
    brokers_display: 'all',
    partners_display: 'all',
    access_to_create_broker: '0',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!row?.partner) return;

    const params = {
      select: [
        'name',
        'email',
        'role',
        'comment',
        'partner_token',
        'manager',
        'leads_display',
        'brokers_display',
        'partners_display',
        'access_to_create_broker',
      ],
      where: [{ id: row.partner }],
    };

    apiRequest('/users/get_users/', params)
      .then((result) => {
        if (result && result.success && result.data?.length) {
          const data = result.data[0];
          setPartnerData({
            ...data,
            manager: data.manager || defaultManager,
          });
        } else {
          console.error('Ошибка получения данных: ', result?.error || 'Неизвестная ошибка');
        }
      })
      .catch((err) => {
        console.error('Ошибка запроса: ', err);
      })
      .finally(() => setLoading(false));
  }, [row?.id]);

  const handleChange = (field) => (e) => {
    setPartnerData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    // логика сохранения
  };

  const handleAddLeads = () => {
    // логика добавления
  };

  const handleUpdateLeads = () => {
    // логика обновления
  };

  const handleDelete = () => {
    // логика удаления
  };

  return (
    <div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Партнёр</h2>

          {/* Пример отображения части полей */}
          {/* <Input
            value={partnerData.name}
            onChange={handleChange('name')}
            placeholder="Name"
          />
          <Input
            value={partnerData.email}
            onChange={handleChange('email')}
            placeholder="Email"
          />
          <Input
            value={partnerData.comment}
            onChange={handleChange('comment')}
            placeholder="Comment"
          />
          <Input
            value={partnerData.role}
            onChange={handleChange('role')}
            placeholder="Role"
          /> */}

          <div className="grid grid-cols-2 gap-3 mb-4 mt-4">
            <Button onClick={handleAddLeads} className="bg-indigo-600 hover:bg-indigo-700">
              Add leads integration code
            </Button>
            <Button onClick={handleUpdateLeads} className="bg-yellow-600 hover:bg-yellow-700">
              Update leads integration code
            </Button>
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              Save
            </Button>
            <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Partner;
