import React,{useState} from 'react';
import {connect} from 'react-redux';
import { setData } from '../store/action';
import firebase from '../config/Firebase';
import {storage} from '../config/Firebase';
const db = firebase.database().ref('users/');
 

const Setcomp = (props) => {
    const [dt,setdt] = useState({
        name:"",email:"",city:"",number:"",image:""
      })
      
      const handleChange = (event) => {
        const {name,value} = event.target;
        setdt(snapshot=>({
          ...snapshot,
          [name] : value,
        }))
      }


      const handleImg = (e) => {
        if(e.target.files[0]){
          const img = e.target.files[0];
          setdt(snapshot=>({
            ...snapshot,
            image: img
          }))
        }
      }


      const submit = () => {
        if(dt.name===""&&dt.email===""&&dt.city===""&&dt.number===""&&dt.image===""){
            alert("Please fill all fields")
        }
        else{
            props.setData(dt)
            setdt({name:"",email:"",city:"",number:"",image:""}) 
        }
      }
    
    return (
      <div>
        <input type="text" onChange={handleChange} name="name" value={dt.name}/>
        <input type="text" onChange={handleChange} name="email" value={dt.email}/>
        <input type="text" onChange={handleChange} name="city" value={dt.city}/>
        <input type="text" onChange={handleChange} name="number" value={dt.number}/>
        {/* <input type="file" onChange={handleChange} name="image" value={dt.image}/> */}
        <input type="file" onChange={handleImg}/>
        <button onClick={submit}>Click</button>
      </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    setData : (data) => dispatch(setData(data))
})
  
  export default connect(null,mapDispatchToProps)(Setcomp);