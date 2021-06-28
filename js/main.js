var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteHeaderToggle = elSiteHeaderSection.querySelector(".site-header__toggler");



if( elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeaderSection.classList.toggle("header-open");
  });

}