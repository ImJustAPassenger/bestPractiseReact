import { useAccordionContext } from "./Accordion/Accordion";

function AccordionItem({ id, title, children, className }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();
  const isOpen = openItemId === id;
  function handleClick() {
    console.log('is clicked: '+id)
    if (isOpen) {
      closeItem();
    } else {
        
      openItem(id);
    }
  }
  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
      <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
    </li>
  );
}

export default AccordionItem;
