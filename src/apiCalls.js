let promise = fetch("http://localhost:3001/api/v1/reservations").then(
  (res) => {
    if (res.ok){
    return res.json()}
    });

export { promise };
