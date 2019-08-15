/* =============================================================================
                          Initialize scrollDir
============================================================================= */


scrollDir({ dir: 'up' }); //The default is 'down'


/* =============================================================================
                    Handle Background Gradient Animation
============================================================================= */


/* Clicking on an isotope button will change the scrollHeight of document.body.
In turn this will jack up the gradient animation.
To correct for this, we can initially set the height of main to it's initial scrollHeight.


      function set_scroll_height(){
        const main          = document.getElementsByTagName("MAIN")[0];
        const scroll_height = document.body.scrollHeight;
        main.style.height   = scroll_height + 'px';
      }
      set_scroll_height();


I was going to call set_scroll_height() again every time the window resized.

      window.onresize = function(){
        const main = document.getElementsByTagName("MAIN")[0];
        main.classList.remove("animate");
        set_scroll_height();
        setTimeout(() => { main.classList.add("animate"); }, 1000);
      }


However, this can also create problems.
Suppose we have a wide screen width, and we click on a button that results in two
items. Now we make the browser window narrow and click on 'show all'.
The the results will likely be truncated. That's a problem.

Moreover, if we DON'T dynamically update the height of the gradient animation
container, then we have the same issue -that if a user goes from a wider sizing
to a more narrow sizing the content may be truncated.

What to do?

The only solution seems to be to hardcode the height for main so that it will always
be large enough to accomodate all filter items. In other words we want the
scrollHeight to always extend beyond all content.

We could actually set the height of main with media queries based on pre-checking
the scrollHeight of the browser at different widths, then using those heights
in the media queries. It's not really the greatest solution though because we'd
have to update our media queries every time we added new items to our filterable
set.

For this example, I'm simply going to hardcode a number in the CSS (e.g., min-height: 1200px).
The real lesson here is that a gradient animation like this is  not ideal in a container
who's height changes dynamically.

On the other hand, we could still apply a gradient animation to a section who's content
did not change the scrollHeight. And then we would still reset the animation on resizing
of the window. */

window.onresize = function(){
  const main = document.getElementsByTagName("MAIN")[0];
  main.classList.remove("animate");
  setTimeout(() => { main.classList.add("animate"); }, 1000);
}
