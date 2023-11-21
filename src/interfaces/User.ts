export default interface Department {
    id: number
    name: string
}

export default interface Position {
    id: number
    name: string
    department: Department
}

export default interface User {
    id: number
    first_name: string
    last_name: string
    position: Position
}