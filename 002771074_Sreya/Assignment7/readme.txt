Assignment 7

Project --> Social Media Website

About the project - The website designed includes a navigation pane with links to pages of 'home', 'bookings', 'profile' and 'contact us'.
There is also a sign-in form wherein the user can enter his/her credentials to login to the account and book the travel or view itenarary

1. Variables - 
Sass Variables are used to store information that you can re-use later. It helps resue the varibles declared as per our convenience.
They can store data like strings, numbers, colors, booleans, lists nulls. $ symbol is used prior to a name while declaring variables.

I have used the variables in style.scss and cfg.scss files to declare background colors.

2. Custom Properties - 
They are property names that are prefixed with '--' (Eg: --wacard-color: rgb(48, 167, 29);) They contain a value that can be used in other declarations using the var() function.
I have used the variables in style.scss file to declare background colors.

3. Nesting - 
It allows us to organize all styles relating to a specific area of the layout. This makes the styles easier to skim, less redundant, and modularly organized.
I have used the nesting in style.scss to access different elements/classes under the flex container class.

4. Intepolation - 
It provides SassScript variables in selectors and property names using #{ } syntax. We can specify variables or property names within the curly braces.

I have used it in style.scss to retrieve the url of background image from cfg.scss

5. Placeholder selectors - 
If we want to apply the same styles and some sets of styles to different selectors, we use Placeholder selectors by using "@extend" keyword to inherit the properties from other CSS style selectors.

I have used this in the btn.scss to inherit the button properties to three different buttons.

6. Mixins - 
The @mixin directive lets you create CSS code that is to be reused throughout the website.
The @include directive is created to let you use (include) the mixin.

 I have used this in cfg.scss for background images

 7. Function - 
 you can create your own function and use them in your script context or can be used with any value.
 Functions are called by using the function name and with any parameters.

 Used it in cfg.scss to decide text color based on the lightness of the color.

8. Parent Selector - 
It is used when the child contains the parent name in its class name so that it be used by putting &- and then the childs name
used it for flexcontainer content in style.scss.

Implemented grid and flexbox by using display flex, justify content,grid container and grid items