function Employee(prop){
    return (<div className="employeeDitails"                                                                                                                            ame="employeeDitails">
    <h3>Id:{prop.id}</h3>
    <h3>Name:{prop.name}</h3>
    <h3>Role:{prop.role}</h3>
    <a href="">Salary</a>
    <h3>age:{prop.age}</h3>
    <h3>Addres:{prop.address.city}</h3>
    <h3>Addres:{prop.address.street}</h3>
    {prop.age >18? <h3>age:{prop.age}</h3>:<h3>young</h3>}

    </div> )
}
export default Employee