import { defineStore } from "pinia";
import { useUserStore } from "./user_store";

import { login } from "../api/auth";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        access_token: localStorage.getItem('access_token'),
        refres_token: localStorage.getItem('refresh_token'),
        is_authencicated: Boolean(localStorage.getItem('is_authenticated')),
    }),
    actions: {
        async login(username_or_email: string, password: string) {
            try {
                const user_data = await login({
                    username: username_or_email,
                    password: password
                })

                localStorage.setItem('access_token', user_data.access)
                localStorage.setItem('refresh_token', user_data.refresh)

                const employeeStore = useUserStore()

                await employeeStore.LoadCurrentUserData()

                localStorage.setItem('is_authenticated', '1')

                return true

            }catch(err) {
                console.error(err)
            }

            return false
        },
        async verify_token(token: string) {
            return
        },
        async logout() {
            return
        }
    }
})