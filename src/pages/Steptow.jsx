import { Card } from "primereact/card";
import Form from "../components/Form";
const Steptow = () => {
  return (
    <>
      <div className="row">
        <Form/>
        <div className="col-sm-5">
          <Card className="p-5 mt-5 shadow-5">
            <h6 className="text-center">INFORMATIONS PERSONNELLES</h6>
            <p className="text-center mt-3">
              Merci de renseigner vos données exactes pour valider votre demande
              dans les meilleures conditions.
            </p>
            <h6 className="text-center" id="title_help">
              INSTITUT AMADEUS
            </h6>
            <p className="text-center mt-3">
              Pour toute information veuillez nous contacter sur l’adresse
              suivante :
            </p>
            <a
              href="mailto:inscriptions@amadeusonline.org"
              target="_blank"
              className="info_link"
            >
              inscriptions@amadeusonline.org
            </a>
            <a
              href="http://www.medays.org"
              target="_blank"
              className="info_link"
            >
              www.medays.org
            </a>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Steptow;
