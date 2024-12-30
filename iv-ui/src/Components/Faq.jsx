import React from "react";

const FAQSection = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item service">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is IV therapy, and how does it work?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              IV therapy involves delivering fluids, vitamins, and nutrients directly into the bloodstream using a small catheter. It bypasses the digestive system, ensuring 100% absorption and faster results.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item service">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is IV therapy safe?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, IV therapy is safe when administered by a trained professional. Our treatments are tailored to individual needs and use high-quality, medical-grade ingredients.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item service">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How long does an IV therapy session take?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              A typical IV therapy session takes about 30 to 45 minutes. You can relax in a comfortable setting while the nutrients are delivered.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
