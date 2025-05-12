type PropsType = {
    students: StudentsArr[]
}

type StudentsArr = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: PropsType) => {
    return (
        <ul>
            {props.students.map((studentObj) => {
                return (
                    <li key={studentObj.id}>
                        <span>{studentObj.name}</span>
                        <span> {studentObj.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}
