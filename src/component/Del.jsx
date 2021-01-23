import React from 'react';
import { connect } from 'react-redux';
import { deletedata } from '../store/action';

const Del = (props) => {
    return (
        <>
          <button onClick={()=>props.deletedata(props.id,props.oid)}>Delete</button>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deletedata : (id,oid) => dispatch(deletedata(id,oid))
})
  
  export default connect(null,mapDispatchToProps)(Del);