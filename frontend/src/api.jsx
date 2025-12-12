// const API = "https://d2d9eb052cf7.ngrok-free.app";   // <-- now reading from .env

// // const API = VITE_API_URL;

// export async function askQuestion(query) {
//   const res = await fetch(`${API}/ask`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query }),
//   });

//   if (!res.ok) throw new Error("API error");

//   return res.json();
// }

const API = "";

export async function askQuestion(query) {
  const res = await fetch(`${API}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error("API error");

  return res.json();
}
