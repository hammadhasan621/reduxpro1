import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Del from './Del';
import Setedit from './Setedit';
import Showdata from './Showdata';
import { fetchalldatafirst } from '../store/action';


const Showcomp = (props) => {
    const [showedit,setShowedit] =useState(-1);

    useEffect(()=>{
        props.fetchalldatafirst()
    },[])

    return (
        <div>
            <h2>User :</h2>
            {props.data.map((d,i)=>{
                return (
                    <div key={i}>
                        {showedit===i?
                            <Setedit i={i} d={d} setShowedit={setShowedit}/>
                            :
                            <>
                                <Showdata d={d} i={i}/>
                                <Del id={i} oid={d}/>
                                <button onClick={()=>setShowedit(i)}>Edit</button>
                            </>
                        }
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};


const mapStatetoProps = (state) => ({
    data : state.user
})

const mapDispatchToProps = (dispatch) => ({
    fetchalldatafirst : () => dispatch(fetchalldatafirst())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Showcomp);
