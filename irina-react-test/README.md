# Javascript:

```
1. What is your favourite new javascript feature and why?
```

The best feature are ES6-ES10 - really, with methods of Array, spreed and rest operators, ``.flat()`` and ``.flatmap()`` - method of Array,  default parameters, ``.includes`` instead of ``indexOf``,  async/await
``Promise.allSettled`` - do not return error if your array'll reject
when I’ve used ``Promise.all`` and you'll get only one promise reject - Promise.all reject as soon as one of the Promises in the array rejects.


```
2. Explain an interesting way in which you have used this javascript feature.
```
the most comfortable for me is rest/spread operators. For example, I have to use ``.map()`` and return object but change only one element and erlier I gotta write all key and values, now by ...element (rest opeerator) I can write shorted and clear code, the same with args for function, when you have a lotta arguments whitch takes your function you may write just spread operator and get them all.
Also, when you have to fetch data with several API request ``Promise.allSettled`` lets you run promises in parallel and collect the statuses (either fulfilled or reject) into an aggregate array.



```
3. Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
```

for me arrow function more comfortable and shorter then regular, for exapmle: ``const getSum = a => a + 2``; first difference:
- Arrow function don't have args, after trying to call args you got error - args is not defined BUT you can return regular function inside arrow func and get it. 
second: 
- Arrow function don't have their own ``this``,  it always refers to this from the outer context. ``this`` is lexically bound in arrow func;
- and I know, that arrow func could't be as constructor, but in my practice I didn't meet tasks with it;
- you don't need write ``return`` if you have only one expression;
- when you use Generic type in arrow function you have to ``extends`` on the generic parameter to hint the compiler that it's a generic


```
4. What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’
```

``count++`` is “postfix increment and ``++count`` is prefix form increment;

``let a = ++counter;`` => 2
``let b = counter++;``=> 1
in the postfix form counter++ also increments counter but returns the old value of ``b``.

```
5. In your own words, explain what a javascript ‘class’ is and how it differs from a function.
```

when i work with class it was more SOLID and OOP code, using an Object Literal  we can write and see our prototyping, encapsulation, Inheritance when one of class extend parent and can take the same property. But for me Function Constructor is the same. If you find field _protho you'll get that all classes and funcs are objects and have the same possibility.




# Css:

```
1. In your own words, explain css specificity.
```
if you meen about the same rules for one element, so browser determine which one is most specific its depends on level of selector or how many selectors you put for element

```
2. In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
```
Sometimes when you work with external library (react carousel, antd etc.) and you must to chose ather css rules for element from library, so you can use ``!important`` if it;s necessary, but in simple css code you should be careful in using ``!important`` , best way will be using selectors and increase specificity (not id=)). in your media requst you may have problem after  css code you should be careful in using ``!important`` styles will overridden.

```
3. What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
```

I prefer use flex or grid. Float is old way and appropriate for text, but in now case it's unnecessary.
Flex and grid create grid and your layout is more flexible.
Grid has great opportunity like grid-area and  grid-template-areas, so you can replace your element with the eziest way)

```
4. Are negative margins legal and what do they do (margin: -20px)?

```

negative margin makes the code more complex  in the metric view in Chrome you can check how your element with negative margin. And Internet Explorer does not correctly interpret the page. Then,  margin collapsing behaves different when you use negative margins.

```
5. If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?
```
If ``<div/>`` (parent) hasn't padding, most browsers will then add the child's margin to the parent's padding.
Add  for ``<div/>`` ``overflow: auto;`` or use ``padding-top``;

# Unit tests:

```
1. What technologies do you use to unit test your react components?
```
Enzyme for testing the React component or React Testing Library;
Jest for JavaScript;

```
2. Are there any pitfalls associated with this technology that have caused you difficulty in the past?
```
in my cases - no, unfortunetly I didn't use unit test as well as I wanna;
```
3. How do you test in your unit tests to see if the correct properties are being passed to child components.
```

# React:

```
1. Create a react component that has a <div/> with a border.
Inside this <div/> should be a <span/> that displays the ‘live’ width of the browser window at all times.  Keep in mind that the size of the window could easily be changed by the user and you should reflect this.

```

created in file <ReactTest.jsx/>

```
2. Inside the <div/> you created in the previous step, add a text input that, as a number is entered into it, uses that number to set the height of the div itself in pixels, live as you update the text field (keypress not change event).
```
created in file <WindowHeight.jsx/>

```
3. Add the following code to your project root (same project as in step 2, but add the code in the global / window space):  

    Let divHeight;
    window.setDivHeight = (height) => divHeight = height;

Add a HOC for your div component that allows you to set the height of your <div/> component from the previous steps by calling that external function.

If you do not know what a HOC is or how to create one, that is also fine, just mention that in your answer and instead create a parent component that can still do this (allow you to call that function ‘setDivHeight’ in order to set the height of the div manually.

Bare in mind that when the height of the div is forcefully set like this, the text fields value should also update to reflect this and should still carry on working as normal (user can continue to modify its value).

```
you can find HOC in file <ControledWindowHeight.jsx/>