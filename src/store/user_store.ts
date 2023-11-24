import { defineStore } from "pinia";
import { get_me, IUser } from "../api/users";


export const useUserStore = defineStore('userStore', {
    state: () => (<IUser>{
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
        async LoadCurrentUserData() {
            try {
                const response = await get_me()

                console.log(response);
                

                this.username = response.username
                this.first_name = response.first_name
                this.last_name = response.last_name
                this.email = response.last_name
                this.id = response.id
                this.telephone = response.telephone
                this.position = response.position
            }catch(err) {
                console.log(err)
            }
        }
    },
    getters: {
        get_user: (state) => {
            return state
        }
    }
})