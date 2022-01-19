import React,{useState} from 'react'
import axios from 'axios'

export default function ApplicationForm(props){
    const [name , setName] = useState('')
    const [email ,setEmail] = useState('')
    const [number , setNumber] = useState('') 
    const [roles , setRoles] = useState('')
    const [experience , setExperience] = useState('')
    const [skills , setSkills] = useState([])

    const jobRole = ['Front-End Developer' , 'Node.js Developer' , 'MEAN Stack Developer' , 'FULL Stack Developer']

    const formSubmission =(data) =>{
        axios.post('http://dct-application-form.herokuapp.com/users/application-form' , data)
            .then((response)=>{
                console.log(response.data)
                
            })//sucess
            .catch((err)=>{
                alert(err.message)
            })//error
    }

    const handleChanges =(e)=>{
        const input  = e.target.name
        if(input === 'name'){
            setName(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        } else if(input ==='number'){
            setNumber(e.target.value)
        } else if(input ==='roles'){
            setRoles(e.target.value)
        } else if(input === 'experience'){
            setExperience(e.target.value)
        } else if(input === 'skills'){
            setSkills(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name:name,
            email :email,
            phone:number,
            skills:skills,
            jobTitle:roles,
            experience:experience
            
        }
        formSubmission(formData)
    }

    return(
        <div>
            <h2> Application Form</h2>
            <form onSubmit = {handleSubmit}>
                <label>Name</label><br/>
                <input type ="text" value = {name} onChange ={handleChanges} name ='name' required ={true} /><br/>

                <label>Email</label><br/>
                <input type ="email" value ={email} onChange ={handleChanges} name ='email' placeholder ="example@gmail.com" required ={true}/><br/>

                <label>Contact Number</label><br/>
                <input type ="text" value ={number} onChange ={handleChanges} name ="number" placeholder = '+919003269077' required={true}/><br/>

                <label>Applying  for job</label><br/>
                <select  value = {roles} onChange ={handleChanges} name ='roles'>
                    <option value ="">--select--</option>
                    {jobRole.map((ele,i)=>{
                        return  <option key = {i} value ={ele}>{ele}</option>
                    })}
                </select> <br/>

                <label>Experience</label><br/>
                <input type ="text" value ={experience} onChange ={handleChanges} name ="experience" placeholder ="Experience(2 years 4 months)"/><br/>

                <label>Technical Skills</label><br/>
                <textarea type ="text" value = {skills} onChange ={handleChanges} name ='skills' placeholder ="Technical Skills" /><br/>

                <input type ="submit" value ="Submit Application "/>


            </form>
        </div>
    )
}