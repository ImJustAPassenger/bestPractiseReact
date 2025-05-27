import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>React Patterns & Practices</h1>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item" >
            <Accordion.Title className="accordion-item-title">
              we got 20 year of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualizade
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              we are working with local guides
            </Accordion.Title>

            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacantion
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
