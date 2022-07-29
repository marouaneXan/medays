import React,{useState} from 'react'
import { InputTextarea } from 'primereact/inputtextarea';

const Motivation = () => {
  const [value, setValue] = useState();
  return (
    <>
    <p style={{ fontWeight: "bold",fontSize:'14px',color:'#050f00' }}>Votre motivation pour le forum MEDays 2022</p>
    <span className="p-float-label mt-4 mb-3">
    <InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(e.value)} autoResize/>
        <label htmlFor="motivation"></label>
      </span>
    </>
  )
}

export default Motivation