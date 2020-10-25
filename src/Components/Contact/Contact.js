import React, { useState } from "react";
import "./Contact.css";
import { Form } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (email && nom && prenom && message && mobile) {
      e.preventDefault();
      e.stopPropagation();

      // create a new XMLHttpRequest
      var xhr = new XMLHttpRequest();

      // get a callback when the server responds
      xhr.addEventListener("load", () => {
        // update the response state and the step
        setEmailStatus(xhr.responseText);
      });

      // open the request with the verb and the url
      xhr.open(
        "POST",
        "http:/localhost/202010-BonPlanAssurance/sendemail/contact.php",
        true
      );

      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      const params =
        "email=" +
        email +
        "&nom=" +
        nom +
        "&prenom=" +
        prenom +
        "&message=" +
        message +
        "&mobile=" +
        mobile;

      // send the request
      xhr.send(params);

      // reset the fields
      setValidated(false);
      setNom("");
      setPrenom("");
      setEmail("");
      setMobile("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="section pt-0 pb-0 w-100">
      <div className="container m-auto">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 order-md-2 m-0 align-self-center justify-content-center d-flex">
            <iframe
              title="Map_BonPlanAssurance"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20979.417596498886!2d2.212204307820563!3d48.90725260284713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f29f028c447eb16!2sAssurance%20Generali%20-%20Nja!5e0!3m2!1sfr!2stn!4v1601629955260!5m2!1sfr!2stn"
              frameBorder={0}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              className="map m-0 p-0"
            />
          </div>
          <div className="col-12 col-md-6 order-md-1 mb-4 align-self-center">
            <h2 className="mb-3 contact-title text-center pt-5">
              Nous contacter
            </h2>
            <Form
              className="needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nom">Nom</label>
                  <Form.Control
                    value={nom}
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    placeholder="nom"
                    onChange={(e) => setNom(e.target.value)}
                    required
                    minLength={3}
                    maxLength={20}
                  />
                  <Form.Control.Feedback type="invalid">
                    Un nom valide est requis.
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="prenom">Prénom</label>
                  <Form.Control
                    value={prenom}
                    type="text"
                    className="form-control"
                    id="prenom"
                    name="prenom"
                    placeholder="prénom"
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                    minLength={3}
                    maxLength={38}
                  />
                  <Form.Control.Feedback type="invalid">
                    Un prénom valide est requis.
                  </Form.Control.Feedback>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir une adresse e-mail valide.
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    value={mobile}
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="00 00 00 00 00"
                    pattern="[0-9]{3,38}"
                    maxLength={38}
                    required
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Un numero mobile valide est requis.
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Veuillez nous indiquer vos restrictions alimentaires si vous avez..."
                  required
                  minLength={5}
                  maxLength={830}
                ></textarea>
                <Form.Control.Feedback type="invalid">
                  Veuillez saisir un message valide.
                </Form.Control.Feedback>
              </div>
              <div className="text-center pb-5">
                <p className="form-message text-success">
                  {emailStatus ? emailStatus : null}
                </p>
                <button
                  className="btn btn-md btn-success"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
