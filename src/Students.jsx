import {useState, useRef} from "react"


function StudentDetails() {
const [studentsList, setStudentsList] = useState([])
const formRef = useRef()

return( <div>
    <form ref={formRef}>
        <input type="text" name="name" />
        <input type="age" name="age" />
        <input type="year" name="year" />
    </form>
    <button onClick={() => {
        let arr = [...studentsList];
        arr.push({
            name: formRef.current.name.value,
            age: formRef.current.age.value,
            year: formRef.current.year.value
        })
        setStudentsList(arr);
        console.log(studentsList)
    }}>Add Student</button>
    {studentsList.map((student,i) => {
        return <div key={i}>
            <p>name: {student.name}</p>
            <p>age: {student.age}</p>
            <p>year: {student.year}</p>
            <button onClick={() => {
                let arr = [...studentsList];
                arr.splice(i,1);
                setStudentsList(arr)
            }}>x</button>
        </div>
    })}
</div>)
}



export default function Students() {
return(<StudentDetails></StudentDetails>)
}

