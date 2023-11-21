import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";
import { useEmployeeStore } from "./employee_store";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        access_token: localStorage.getItem('access_token'),
        refres_token: localStorage.getItem('refresh_token'),
        is_authencicated: false
    }),
    actions: {
        async login(username_or_email: string, password: string) {
            try {
                const response = await axios.post('auth/token/', {
                    username: username_or_email,
                    password: password,
                })

                localStorage.setItem('access_token', response.data['access_token'])
                localStorage.setItem('refresh_token', response.data['access_token'])

                const employeeStore = useEmployeeStore()

                await employeeStore.LoadEmployeeData()

            }catch(err) {
                console.error(err)
            }
        },
        async verify_token(token: string) {
            try {
                const response = await axios.post('auth/token/verify/', {
                    access_token: token
                })
            }catch(err) {
                console.error(err)
            }
        },
        async logout() {
            return
        }
    }
})