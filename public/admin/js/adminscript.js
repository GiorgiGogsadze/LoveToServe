import { showAlert } from "./alerts.js";
const logoutBtn = document.querySelector(".logout-btn");
const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `/api/v1/admin/logout`,
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged out successfully");
      window.setTimeout(() => {
        location.assign("/login");
      }, 1000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
logoutBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await logout();
});

export const deleteItem = async (which, id, element) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/${which}/${id}`,
    });
    element.remove();
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
