import React from 'react'
import axios from 'axios'


export default function TableData(props){
    const {filterData , editStatus} = props
    

    const handleView = (id)=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((response)=>{
                const result = response.data
                //setDetails(result)
                alert(`
                ${result.name} profile
                Contact Number: ${result.phone} 
                Email: ${result.email}
                Skills : ${result.skills}
                Experience : ${result.experience}
                `)
            })
    }

    const handleShortList = (id)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {status: "shortlisted"})
            .then((response)=>{
                const newprop = {
                    id:id,
                    status: "shortlisted"
                }
                editStatus(newprop)

            })
    }

    const handleReject = (id) =>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {status: "rejected"})
            .then((response)=>{
                const newprop = {
                    id:id,
                    status: "rejected"
                }
                editStatus(newprop)
            })
    }

    

    return(
        <div>
            <table border ='1px'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Technical skills</th>
                    <th>Applied Date</th>
                    <th>View details</th>
                    <th>update Application Status</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterData.map((ele,i)=>{
                        return(
                            <tr key ={i}>
                                <td>{ele.name}</td>
                                <td>{ele.skills}</td>
                                <td>{ele.createdAt}</td>
                                <td> <button onClick ={()=>{handleView(ele._id)}}>View Details</button> </td>
                                <td>{ele.status === 'applied' ? (<div>
                                    <button onClick={()=>{handleShortList(ele._id)}}>Short List </button>|<button onClick={()=>{handleReject(ele._id)}}>Reject</button>
                                </div>) : (
                                    <div>
                                        {ele.status === "shortlisted" 
                                     ? (<div>
                                    <button>Short List </button>
                                </div>) :(<div>
                                    {ele.status === "rejected" && <button>Reject</button>}
                                </div>)}
                                    </div>
                                )}</td>
                            </tr>
                        ) 
                    })
                }
            </tbody>
            </table>
        </div>
    )
}