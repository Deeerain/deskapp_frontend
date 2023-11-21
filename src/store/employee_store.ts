import axios from "axios";
import { defineStore } from "pinia";
import Employee from "../interfaces/state/Employee";

export const useEmployeeStore = defineStore('employeeStore', {
    state: () => (<Employee>{}),
    actions: {
        async LoadEmployeeData() {
            try {
                const response = await axios.get('employees/me/')
                this.id = response.data.id
                this.username = response.data.username
                this.first_name = response.data.first_name
                this.last_name = response.data.last_name
            }catch(err) {
                console.log(err)
            }
        }
    }
})