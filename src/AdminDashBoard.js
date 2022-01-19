import React,{useState,useEffect} from 'react'
import axios from 'axios'
import TableData from './TableData'

export default function StudentDashboard(props){
    const [data , setData] = useState([])
    const [filterData , setFilterData] = useState([])
    const [toggle , setToggle] = useState(false)
    const [role , setRole] = useState([])

    useEffect(() => {
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
            .then((response)=>{
                //console.log(response.data)
                setData(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    const handleFrontEnd =(e)=>{
        const result =data.filter(ele =>{
            return ele.jobTitle ==='Front-End Developer'
        })
        setRole(e.target.name)
        setFilterData(result)
        setToggle(true)
    }

    const handleNode =(e) =>{
        const result =data.filter(ele =>{
            return ele.jobTitle === 'Node.js Developer' 
        })
        setRole(e.target.name)
        setFilterData(result)
        setToggle(true)
    }

    const handleMEAN =(e)=>{
        const result =data.filter(ele =>{
            return ele.jobTitle === 'MEAN Stack Developer'
        })
        setRole(e.target.name)
        setFilterData(result)
        setToggle(true)
    }
    
    const handleFull=(e)=>{
        const result =data.filter(ele =>{
            return ele.jobTitle === 'FULL Stack Developer'
        })
        setRole(e.target.name)
        setFilterData(result)
        setToggle(true)
    }

    const editStatus = (updated)=>{
        const result = filterData.map(ele=>{
            if(ele._id === updated.id){
                return {...ele , ...updated}
            } else{
                return {...ele}
            }
        })
        setFilterData(result)
    }

    return(
    <div>
        <h2>Admin Dashboard</h2>
        <button onClick={handleFrontEnd} name ='Front-End Developer'>Front-End Developer</button>|
        <button onClick ={handleNode} name ='Node.js Developer'>Node.js Developer</button>|
        <button onClick ={handleMEAN} name ='MEAN Stack Developer'>MEAN Stack Developer</button>|
        <button onClick={handleFull} name ='FULL Stack Developer'>FULL Stack Developer</button>
        {toggle ? (<div>
            <h2>{role}</h2>
            <p>list of candidates applied for {role} job </p>
            <TableData filterData = {filterData} editStatus ={editStatus}/>
        </div>) : ("")}
    </div>)}