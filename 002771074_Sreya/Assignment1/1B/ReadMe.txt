* * Folder contains Landing page and share blog page for a Travel Blog website. All Images and auio files used are in 
the website are used in the website are in images and auiod folder respectively.

* Created cards using div, id and class tags.
* Each card has an image, loaction, city, description, read more, audio, and youtue video.
* When user clicks on readmore, they get redirected to the wikipedia informtion page of the city. 
* Audio plays info/song about the city. 
* using iframe, I have incorporated the youtube vidoes for each city. 
* when user clicks on share you travel stories, the gp to the share.html page.\
* on the share.html page, there is a form for user to add their blogs.
* when user clicks on back to main page, he goes back to the landingPage.html.
* Share button submits the form.

* * landingPage.html and share.html:
-> Used link tag to create favicon for the page and link the html document to its respective elxternal css stylesheet 
in the head section. 

-> The HTML rel attribute is used to specify the relationship between the current and the linked document. 

-> Header tag: A collection of introductory or navigational aids is often represented by the HTML element
 known as "header." A logo, a search form, an author name, and other features may also be present in addition 
 to some header elements.

 -> In HTML, the <div> tag is a generic block-level container for other elements.

 -> a href: The URL of the page to which the link points is specified by the href property.
  The anchor element won't be a hyperlink if the href property is missing.

-> <br/>: used to produce a line break in HTML. 

-> class: The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class

-> id: An HTML element's id is specified via the id property. Within the HTML page, the id attribute's value must be distinct.
To identify a specific style declaration in a style sheet, use the id property. Additionally, JavaScript uses it to access and change the element with the given id.
Id has the following syntax: write a hash character (#), then an id name. The CSS properties should then be defined between curly braces.

-> img: An image can be included in an HTML page using the <img> tag. Images are linked to web pages; 
they are not actually placed into web pages. The referenced picture is held in place by the <img> element. 
The <image> tag must have the following two attributes: src - Defines the image's source path.

-> <h1> to <h6>: The <h1> to <h6> tags are used to define HTML headings. <h1> defines the most important heading.
 <h6> defines the least important heading.

-> button onclick: When the user clicks the button the onclick funtion is activated and the designated action is performed. 

-> Audio: The HTML <audio> element is used to play an audio file on a web page. The controls attribute adds audio controls,
like play, pause, and volume.The <source> element allows you to specify alternative audio files which the browser
may choose from. The browser will use the first recognized format.The text between the <audio> and </audio> tags will 
only be displayed in browsers that do not support the <audio> element.

-> Iframes: the HTML <iframe> tag specifies an inline frame.
An inline frame is used to embed another document within the current HTML document.
The target attribute of the link must refer to the name attribute of the iframe

-> footer: Defines a footer for a document or a section. 

-> <form>: 
* To gather user input, an HTML form is utilized. Most frequently, a server processes the user input.
When a form is submitted, an action is defined by the action property.
* The response that is returned after submitting the form is specified by the target attribute.
_blank: The reply appears in a new tab or window.
* The HTTP method to utilize when submitting form data is specified by the method property.Both URL 
variables (with method="get") and HTTP post transactions (with method="post") may be used to send the form data.
When submitting form data, the default HTTP method is GET.
* The <input> element can be displayed in several ways, depending on the type attribute.
* The <label> element defines a label for several form elements. The for attribute of the <label> tag should
 be equal to the id attribute of the <input> element to bind them together.
* The <button> element defines a clickable button. 
* placeholder: An input field's anticipated value is briefly described using the placeholder property.
 Before the user inputs a value, the brief suggestion is shown in the input area.

* *stylesheet.css:
-> CSS describes how HTML elements are to be displayed on screen, paper, or in other media.

-> External stylesheets are stored in CSS files. All styling for the landing page and signup page is coded in style.css

-> The element selector selects HTML elements based on the element name.

-> The id selector chooses a particular HTML element by using the id property.The id selector is used to choose 
a single distinct element since each element's id is distinct inside a page.
A hash (#) character should be written after the element's id in order to pick it.

->The class selector selects HTML elements with a specific class attribute.To select elements with a specific class, 
write a period (.) character, followed by the class name.

-> The universal selector (*) selects all HTML elements on the page.

-> The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

->The text-align property is used to set the horizontal alignment of a text.
A text can be left or right aligned, centered, or justified.

->It's crucial to have a font that is simple to read. Your writing is made better by the font.
The right color and text size for the font should be chosen as well. The choice of font significantly affects how readers
interact with a website. Your brand may develop a strong identity with the help of the correct typeface.

->The CSS margin properties are used to create space around elements, outside of any defined borders.
With CSS, you have full control over the margins. There are properties for setting the margin for each 
side of an element (top, right, bottom, and left).

-> The CSS float property specifies how an element should float.
-> CSS supports 140+ color names, HEX values, RGB values, RGBA values, HSL values, HSLA values, and opacity.

