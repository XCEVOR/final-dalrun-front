import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: " How much does website cost?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe
    ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl
    graecis, vixisester aperiri con sequat an. Eius lorem.`,
    expand: "a",
  },
  {
    title: "How about payment?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe
    ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl
    graecis, vixisester aperiri con sequat an. Eius lorem.`,
    expand: "b",
  },
  {
    title: "How long support that i get?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe
    ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl
    graecis, vixisester aperiri con sequat an. Eius lorem.`,
    expand: "c",
  },
  {
    title: "If i not satify with your service, can i get a refund?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe
    ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl
    graecis, vixisester aperiri con sequat an. Eius lorem.`,
    expand: "d",
  },
  {
    title: "Do you provide NDA Agreement?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe
    ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl
    graecis, vixisester aperiri con sequat an. Eius lorem.`,
    expand: "e",
  },
];

const Faq = () => {
  return (
    <>
      <dl className="ptf-accordion">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem key={i} uuid={item.expand}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <dt>{item.title}</dt>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel>
                <dd>{item.desc}</dd>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </dl>
    </>
  );
};

export default Faq;
