var menu = function(){
    var dom = {};
    var st = {};
    var catchDom = function(){};
    var suscribeEvents = function(){};
    var events = {};
    var initialize = function(){
        catchDom();
        suscribeEvents();
    };
    return{
        init:initialize
    }
}
