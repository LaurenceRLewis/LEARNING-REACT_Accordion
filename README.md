# LEARNING-REACT_Accordion
**This is my attempt at learning REACT. There are many mistakes on these components and they MUST not be copied for use in production.**

Working example on Netify: https://csb-ef9zog.netlify.app/

## Steps used to build the component

1. Import React and its required hooks, useState and useRef.
2. Create a function component called AccordionItem to represent each item in the accordion.
3. Use the useState hook to store the state of the accordion item, whether it is expanded or collapsed.
4. Use the useRef hook to get a reference to the content element that will be animated when the accordion item is expanded or collapsed
5. Define the structure of the accordion item in the return statement of the component, including the header, content, and accessibility attributes
6. Add event handlers to the header element to expand or collapse the accordion item in response to user interactions. These event handlers should update the state of the accordion item and animate the content element using the reference obtained from the useRef hook.
7. Create a main component called Accordion that renders a list of AccordionItem components.
8. Export the Accordion component as the default export of the module.
