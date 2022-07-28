import { useState } from "react";
import { useFormik } from "formik";
import { RadioButton } from "primereact/radiobutton";
const UserInfo1 = () => {
  const [value, setValue] = useState();

  const formik = useFormik({
    initialValues: {
      prenom: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.prenom) {
        errors.prenom = 'Le prenom est requis';
    }
    return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      
  }
  });
  return (
    <>
      <div className="d-flex" style={{ width: "280px" }}>
        <div className="col">
          <RadioButton
            value="Madame"
            name="madame"
            onChange={(e) => setValue(e.value)}
            checked={value === "Madame"}
            id="madame"
          />
          <label htmlFor="madame" className="ml-2">
            Madame
          </label>
        </div>
        <div className="col">
          <RadioButton
            value="Monsieur"
            name="monsieur"
            onChange={(e) => setValue(e.value)}
            checked={value === "Monsieur"}
            id="monsieur"
          />
          <label htmlFor="monsieur" className="ml-2">
            Monsieur
          </label>
        </div>
      </div>

    </>
  );
};

export default UserInfo1;
