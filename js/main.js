var menu = function(){
    var dom = {};
    var st = {
        nav : 'nav'
    };
    var catchDom = function(){
        dom.nav = $(st.nav);
    };
    var suscribeEvents = function(){
        $(document).on('scroll',events.eMenu);
    };
    var events = {
        eMenu : function(){
            console.log('scroll');
            dom.nav.addClass('u-fixedMenu');
        }
    };
    var initialize = function(){
        catchDom();
        suscribeEvents();
    };
    return{
        init:initialize
    }
}
menu().init();