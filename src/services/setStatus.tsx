import { apiRequest } from "./ApiReq";

export const handleStatusClick = async (row, updateRowCallback) => {
    console.log('Click:', row); 
  const res = await apiRequest("/campaigns/set_status_campaign/", {
    campaign_id: row.id,
  });

  if (res && res.success) {
    const updatedStatus = row.status === "ON" ? "OFF" : "ON";
    updateRowCallback(row.id, updatedStatus);
  } else {
    alert("Ошибка: " + res?.info);
  }
};
