/* ===========================================================================
                             Utility Functions
=========================================================================== */


const utlility_functions = {
  addEventListenerByClass: function(className, event, fn) {
    const nodelList = document.getElementsByClassName(className);
    for (let i = 0; i < nodelList.length; i++) {
      nodelList[i].addEventListener(event, fn);
    }
  },

  //Custom forEach() for looping through NodeLists.
  //https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
  forEach: function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, array[i], i);
    }
  }
}
