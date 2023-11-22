import Position from "./Position"

export default interface Employee {
    id: number
    username: string
    first_name: string
    last_name: string
    position: Position
}