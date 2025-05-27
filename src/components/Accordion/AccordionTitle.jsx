import { useAccordionContext } from "./Accordion";

function AccordionTitle({ children, id, className }) {
  const { toggleItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}

export default AccordionTitle;
