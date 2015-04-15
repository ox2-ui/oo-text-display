// open external links inApp browser

Template.ooDisplayText.events({
  'click a' : function  (e) {
    e.preventDefault();
    e.stopPropagation();
    var ref = window.open(e.currentTarget.href, '_system', 'location=yes', 'closebuttoncaption=Back')
  }
});
