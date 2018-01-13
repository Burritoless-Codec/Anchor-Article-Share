function tweetCP()
      { window.open("https://twitter.com/share?url="+escape(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
function fbCP()
      {window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
function gpCP()
      {window.open("https://plus.google.com/share?url="+escape(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=400');return false; }
function copyCP() {
    var copyText = document.getElementById("pu");
    copyText.select();
    document.execCommand("Copy");
}
