var menu = (function(){
    var dom = {};
    var st = {
        nav         : 'nav',
        isScroll     : null,
        navHeight : null,
        lastScroll   : 0
    };
    var catchDom = function(){
        st.navHeight = $(st.nav).outerHeight();
        dom.nav = $(st.nav)
    };
    var suscribeEvents = function(){
        $(window).on('scroll',events.eWIndowScroll);
        setInterval(function(){
            if(st.isScroll == true){
                functions.hasSrolled();
                st.isScroll = false;
            }
        },250);
    };
    var events = {
        eWIndowScroll : function(){
           st.isScroll = true;
        }
    };
	var functions = {
        hasSrolled : function(){
            var sto = $(window).scrollTop();
            if(sto > st.lastScroll && sto > st.navHeight){
                dom.nav.addClass('u-scrollUp');
            }else{
                console.log('es menor');
                if(sto+$(window).height() < $(document).height()){
                    dom.nav.removeClass('u-scrollUp');
                }
            }
            st.lastScroll = sto;
        }
    };
    var initialize = function(){
        catchDom();
        suscribeEvents();
    };
    return{
        init:initialize
    }
})();
menu.init();
