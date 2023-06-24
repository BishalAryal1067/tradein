import { defineStore } from "pinia";
import router from "../router/router";
import { watch, ref } from "vue";

export const createUserStore = defineStore("users", {
  state: () => {
    return {
      usersList: JSON.parse(localStorage.getItem("users")) || [],
      organizationList: [],
      organizationData: [],
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    };
  },
  getters: {
    allUsers() {
      try {
        return Object.values(JSON.parse(localStorage.getItem("users")));
      } catch (err) {
        return false;
      }
    },
    getData() {
      return this.organizationData;
    },
    currentUserId() {
      return this.currentUser[0].email;
    },
  },

  actions: {
    addUser(user) {
      this.usersList.push(user);
      localStorage.setItem("users", JSON.stringify(this.usersList));
    },
    addOrganizationData(data) {
      localStorage.setItem("organizationData", JSON.stringify(data));
    },
    deleteUser(email) {
      localStorage.setItem(
        "users",
        JSON.stringify(this.usersList.filter((user) => user.email != email))
      );
    },
    saveCurrentUserData(){
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  },
});
