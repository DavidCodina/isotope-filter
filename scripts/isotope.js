/* ===========================================================================
                               Isotope
=========================================================================== */


//Initialize Isotope:
const isotope_container = new Isotope( '.isotope-container', {
  itemSelector: '.isotope-item',
  layoutMode:   'fitRows'
});


/* ===========================================================================
                          Filter Functions
=========================================================================== */


//Filter functions:
const filter_functions = {
  //Show if age is greater than 50
  age_greater_than_50: function(item) {
    console.log(item);
    //Get the child element with class .age, then get it's textContent value.
    const age = item.querySelector('.age').textContent;

    //call parseInt() on age to chane it from a string to a number,
    //then see if it's greater than 50.
    const result = parseInt( age, 10 ) > 50
    return result;
  },

  //Show if name ends with 'man'
  name_ends_with_man: function(item) {
    var name = item.querySelector('.name').textContent;
    return name.match( /man$/ );
  }
};


/* ===========================
  Bind Event Listeners
=========================== */


utlility_functions.addEventListenerByClass('filter-button', 'click', function(event) {
  //Grab the string value associated with the data-filter attribute.
  let filter_value = event.target.getAttribute('data-filter');


  //////////////////////////////////////////////////////////////////////////////
  //
  //  Reset the value of filter_value to a filter function if filter_functions[filter_value]
  //  references a function (i.e., use filter_value as a key to access properties in the
  //  filter_functions object literal).
  //  If no such method exists, then it will be undefined.
  //  In such cases the || will make it so filter_value is still the initial vlue.
  //
  //////////////////////////////////////////////////////////////////////////////

  filter_value = filter_functions[ filter_value ] || filter_value;


  ////////////////////////////////////////////////////////////////////////////
  //
  //  https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
  //  Not all browsers support forEach on NodeLists.
  //  You can get around this:
  //
  //
  //        const filter_buttons = document.querySelectorAll('.filter-button');
  //        [].forEach.call(filter_buttons, function(filter_button) {
  //          // do whatever
  //        });
  //
  //
  //  But there's reason why this is hacky:
  //  https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  //
  ////////////////////////////////////////////////////////////////////////////

  const filter_buttons = document.getElementsByClassName('filter-button');
    utlility_functions.forEach(filter_buttons, function(filter_button, index) {
      filter_button.classList.remove('is-checked');
  });

  this.classList.add('is-checked');
  isotope_container.arrange({ filter: filter_value });
});


//////////////////////////////////////////////////////////////////////////////
//
//
//  The documentation applies an on click event listener to the button container,
//  and then  only listens for clicks on buttons.
//  That is an interesting way of doing it, but it looks confusing.
//
//      const filter_buttons = document.querySelector('.filter-buttons-container');
//
//      filter_buttons.addEventListener('click', function(event) {
//        if (!matchesSelector(event.target, 'button')) {
//          console.log("You clicked some empty space.");
//          return;
//        }
//
//        let filter_value = event.target.getAttribute('data-filter');
//        filter_value     = filter_functions[ filter_value ] || filter_value;
//        iso.arrange({ filter: filter_value });
//      });
//
//
//////////////////////////////////////////////////////////////////////////////
