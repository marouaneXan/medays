import { useState } from "react";
import { Button } from "primereact/button"; 
import UserInfo1 from "./UserInfo1";
import UserInfo2 from "./UserInfo2";
import Motivation from "./Motivation";
const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["UserInfo1", "UserInfo2", "Motivation"];

  const getComponent=()=>{
    if(page===0)
       return <UserInfo1/>
    else if(page===1)
       return <UserInfo2/>
    else
       return <Motivation/>
  }
  return (
    <div className="col-sm-7 mt-5 p-5">
      <h4>DEMANDE D’INSCRIPTION</h4>
      <form className="p-fluid mt-5">
        {getComponent()}
      </form>
      <div className="row">
        {page == 0 ? (
          <Button
            label='SUIVANT'
            className="col p-button-rounded p-button-help"
            onClick={()=>{setPage((nextPage)=>nextPage+1)}}
          />
        ) : (
          <>
            <Button
              label="PRECEDENT"
              className="col mr-2 p-button-secondary p-button-rounded"
              onClick={()=>{setPage((prevPage)=>prevPage-1)}}
            />
            <Button
              label={page==FormTitles.length-1 ? 'SUBMIT':'SUIVANT' }
              className="col p-button-rounded p-button-help"
              onClick={()=>{setPage((nextPage)=>nextPage+1)}}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
