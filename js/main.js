var menu = function(){
    var dom = {};
    var st = {
        nav : 'nav',
        offSetVal : null
    };
    var catchDom = function(){
        dom.nav = $(st.nav);
    };
    var afterCatchDom = function(){
        st.offSetVal = dom.nav.offset().top;
        console.log('offset actual ->',st.offSetVal);
    };
    var suscribeEvents = function(){
        $(document).on('scroll',events.eMenu);
    };
    var events = {
        eMenu : function(){
            //dom.nav.addClass('u-fixedMenu');
            console.log('scroll',dom.nav.offset.top);
            /*
            if(dom.nav.offset().top == 0){
                console.log('offset nav igual a 0');
                dom.nav.removeClass('u-fixedMenu', 'el actual es mayor');
            }
            */
            /*
            if((dom.nav.offset().top < st.offSetVal) || dom.nav.offset().top == 0){
                dom.nav.addClass('u-fixedMenu');
                //console.log('scroll',dom.nav.offset(), 'el actual es menor que cuando hace scroll o es 0');
                st.offSetVal = dom.nav.offset().top;
            }else{
                dom.nav.removeClass('u-fixedMenu');
            }
            */
            
        }
    };
    var initialize = function(){
        console.log('fixed menu');
        catchDom();
        afterCatchDom();
        suscribeEvents();
    };
    return{
        init:initialize
    }
}
menu().init();
