let getPromise = fetch("http://localhost:3001/api/v1/reservations").then(
  (res) => {
    if (res.ok) {
      return res.json();
    }
  }
);

const deletePromise = (id) => {
  fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: "DELETE",
  }).then((res) => {
    console.log(res)
    if (res.ok) {
      return res.json();
    }
  });
};

export { getPromise, deletePromise };
