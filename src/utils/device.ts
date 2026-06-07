const DEVICE_ID_KEY = 'pharmaIntelDeviceId';

export const getDeviceId = () => {
  const existingDeviceId = localStorage.getItem(DEVICE_ID_KEY);

  if (existingDeviceId) {
    return existingDeviceId;
  }

  const deviceId =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  localStorage.setItem(DEVICE_ID_KEY, deviceId);
  return deviceId;
};

