export const fetchAndProccess = async (endpoint) => {
  const res = await fetch(endpoint);
  return await res.json();
};

export const fetchAndPostTask = async (endpoint, task) => {
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });
  if (res.error) {
    console.log(res.error);
  }
};

export const fetchAndDeletTask = async (endpoint, taskId) => {
  const res = await fetch(`${endpoint}/${taskId}`, {
    method: "DELETE",
  });
  if (res.error) {
    console.log(res.error);
  }
};

export const fetchAndPatchIsFav = async (endpoint, task) => {
  const res = await fetch(`${endpoint}/${task.id}`, {
    method: "PATCH",
    body: JSON.stringify({ isFav: task.isFav }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.error) {
    console.log(res.error);
  }
};
