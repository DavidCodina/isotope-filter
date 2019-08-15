/* =============================================================================
                               Isotope
============================================================================= */


//Initialize Isotope:
const isotope_container = new Isotope( '.isotope-container', {
  itemSelector: '.isotope-item',
  layoutMode:   'fitRows'
});


/* =============================================================================
                            Filter Functions
============================================================================= */


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
  let filter_value     = event.target.getAttribute('data-filter');
  filter_value         = filter_functions[ filter_value ] || filter_value;

  const filter_buttons = document.getElementsByClassName('filter-button');
    utlility_functions.forEach(filter_buttons, function(filter_button, index) {
      filter_button.classList.remove('is-checked');
  });

  this.classList.add('is-checked');
  isotope_container.arrange({ filter: filter_value });
});
