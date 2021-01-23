import firebase,{storage} from '../../config/Firebase';
const db = firebase.database().ref('users/');


export const fetchalldatafirst = () => {    
    return (dispatch) => { 
        db.once('value',function(data){
            let arr;
            if(data.val() !== null){
                arr = Object.values(data.val());
            }
            else{
                arr = [];
            }
            dispatch({type:"ALL_DATA_FIRST",payload:arr})
        });
    }
}



export const fetchalldata = () => {    
    return (dispatch) => { 
        let arr= [];
        db.on('child_added',function(data){
            arr.push(data.val())
        });
        dispatch({type:"ALL_DATA",payload:arr})
    }
}


export const setData= (data) => {
    return (dispatch) => {
        data.id = db.push().key
       
        const uploadimg = storage.ref('images/'+data.image.name).put(data.image);
        
        uploadimg.on('state_changed',
        (snapshot)=>{

        },
        (error)=>{
            console.log(error)
        },
        ()=>{
            storage.ref('images').child(data.image.name).getDownloadURL().then(url=>{
                data.imageName = data.image.name;
                data.imageUrl = url;
                
                firebase.database().ref('users/'+data.id+"/").set(data)
                dispatch({type:"SET_DATA",payload:data})
            }
        )
    });
       
    }
}


export const deletedata= (id,dt) =>{
    return (dispatch) => {
        db.child(dt.id).remove();
        storage.ref('images').child(dt.imageName).delete();
        db.once('value',function(data){
            let arr;
            if(data.val() !== null){
                arr = Object.values(data.val());
            }
            else{
                arr = [];
            }
            dispatch({type:"DELETE_DATA",payload:arr});
        })
    }
}


export const udpateData = (data) => {
    return (dispatch) => {
        firebase.database().ref('users/'+data.id).set(data);
        db.once('value',function(data){
            let arr;
            if(data.val() !== null){
                arr = Object.values(data.val());
            }
            else{
                arr = [];
            }
            dispatch({type:"UPDATE_DATA",payload:arr});
        })
    }
}