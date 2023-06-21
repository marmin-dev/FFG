export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert("위치 정보를 가져오는 데 실패했습니다");
        }
      );
    } else {
      alert("Geolocation이 지원되지 않는 브라우저입니다.");
    }
  });
};
