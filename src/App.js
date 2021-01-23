import { useEffect } from 'react';
import {connect} from 'react-redux';
import Setcomp from './component/Setcomp';
import Showcomp from './component/Showcomp';
import { fetchalldata } from './store/action';


function App(props) {
  useEffect(()=>{
    props.fetchalldata()
  })

  return (
    <div className="App">
      <Setcomp />
      <Showcomp />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchalldata : () => dispatch(fetchalldata())
})

export default connect(null,mapDispatchToProps)(App);

