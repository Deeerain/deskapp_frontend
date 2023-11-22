import axios from "axios";
import { defineStore } from "pinia";
import Employee from "../interfaces/state/Employee";

export const useEmployeeStore = defineStore('employeeStore', {
    state: () => (<Employee>{
        username: "Admin",
        first_name: "Вася",
        last_name: "Пупкин",
        position: {
            name: "Старший программист",
            department: {
                name: "IT",
            }
        }
    }),
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
    },
    getters: {
        get_employee: (state) => {
            return state
        }
    }
})