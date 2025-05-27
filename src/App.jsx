import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>React Patterns & Practices</h1>
        <Accordion className="accordion">
         <AccordionItem id="experience" className="accordion-item" title="we got 20 year of experience">
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>We are in the business of planning highly individualizade vacation trips for more than 20 years</p>
          </article>
         </AccordionItem>
            <AccordionItem id="local-guides" className="accordion-item" title="we are working with local guides">
          <article>
            <p>We are not doing this along from our office</p>
            <p>Instead, we are working with local guides to ensure a safe and pleasant vacantion</p>
          </article>
         </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
