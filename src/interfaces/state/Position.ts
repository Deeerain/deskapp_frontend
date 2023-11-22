import { Department } from './Department'

export default interface Position {
    id: number
    name: string
    department: Department
}