import { showAlert } from "./alerts.js";
const loginForm = document.querySelector(".login-form");

const login = async (password) => {
  try {
    const res = await axios({
      method: "POST",
      url: `/api/v1/admin/login`,
      data: {
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully");
      window.setTimeout(() => {
        location.assign("/admin");
      }, 1000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const password = loginForm.querySelector("#password").value;
  await login(password);
});
