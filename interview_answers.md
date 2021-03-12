# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    Stateful components have stateful logic to determine how they render. Functional components take the same data and return the same data every time, and they have state controlled with hooks.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount is called right before a component is first rendered to the screen.
    componentWillUpdate is called right before a component's state change occurs.

3. Define stateful logic.
   
    Stateful logic is logic built into a component that handles the component's current state. This is useful for React apps because they use this state to determine whether or not elements need to be re-rendered.

4. What are the three step of creating a successful test? What is done in each phase?

    Arrange, Act, Assert
    Arrange - You render the components and set them up in the configuration you want to test.
    Act - Do the actions that you're trying to test.
    Assert - Check the results of your actions to see if they did what they're supposed to.
