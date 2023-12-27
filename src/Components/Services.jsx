import React from "react";

const Services = () => {
  return (
    <div className="m-5 ">
      <h1 className="text-center my-5">Our Services</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
          <h2>
            <i class="fa-solid fa-truck-medical text-primary fs-1"></i>
          </h2>
          <h3 className="my-4">Psychology</h3>
          <p className="fs-5">
            is the study of the human mind and behavior, focusing on
            understanding interactions between individuals and the environment.
            It covers topics such as mental processes, psychological
            development, and social dynamics. It also includes exploration of
            mental health and disorders, and is used in the fields of
            psychotherapy and social and educational policy development
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
          <h2>
            <i class="fa-solid fa-syringe text-primary fs-1"></i>
          </h2>
          <h3 className="my-4">AI-DOCTOR</h3>
          <p className="fs-5">
            is a type of medical technology that relies on artificial
            intelligence to provide medical services. AI-Doctor aims to improve
            medical diagnosis and provide support to patients. Uses intelligence
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center service">
          <h2>
            <i class="fa-solid fa-capsules text-primary fs-1"></i>
          </h2>
          <h3 className="my-4"> Psychological support</h3>
          <p className="fs-5">
            is providing emotional and psychological support to individuals to
            deal with life challenges. This includes counselling, stress
            management skills training, and improving mental health. Provided by
            mental health professionals to promote healthy coping and
            improve quality of life
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
