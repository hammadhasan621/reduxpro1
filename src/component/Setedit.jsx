import React ,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { udpateData } from '../store/action';

const Setedit = (props) => {

    useEffect(()=>{
        const pdata = {
            name : props.d.name,
            email : props.d.email,
            city : props.d.city,
            number : props.d.number,
            id : props.d.id,
            imageName : props.d.imageName,
            imageUrl : props.d.imageUrl
        }
        setdt(pdata)    
    },[])
    

    const [dt,setdt] = useState({
        name:"",email:"",city:"",number:"",id:"",imageName:"",imageUrl:""   
      })
    
      
      const handleChange = (event) => {
        const {name,value} = event.target;
        setdt(snapshot=>({
          ...snapshot,
          [name] : value
        }))
      }


      const handleImg = (e) => {
        if(e.target.files[0]){
          const img = e.target.files[0];
          console.log(img);
          // setdt(snapshot=>({
          //   ...snapshot,
          //   image: img
          // }))
        }
      }


      const submit = () => {
        props.udpateData(dt)
        setdt({name:"",email:"",city:"",number:"",id:""}) 
        props.setShowedit(-1)
      }

    return (
        <div>
            <b>Name</b> : <input type="text" onChange={handleChange} name="name" value={dt.name}/>
            <br /><br />
            <b>Email</b> : <input type="text" onChange={handleChange} name="email" value={dt.email}/>
            <br /><br />
            <b>City</b> : <input type="text" onChange={handleChange} name="city" value={dt.city}/>
            <br /><br />
            <b>Number</b> : <input type="text" onChange={handleChange} name="number" value={dt.number}/>
            <br /><br />
            <input type="file" onChange={handleImg}/>
            <br /><br />
            <button onClick={submit}>Update</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    udpateData : (data) => dispatch(udpateData(data))
})
  
  export default connect(null,mapDispatchToProps)(Setedit);