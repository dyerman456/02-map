type CarsArrayType = {
    manufacturer: string,
    model: string
}

type PropsType = {
    topCars: CarsArrayType[]
}

export const Cars = (props: PropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((carsArrObj, index) => {
                return (
                    <tr key={index}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            {carsArrObj.manufacturer}
                        </td>
                        <td>
                            {carsArrObj.model}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
