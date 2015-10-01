---
layout: post
title:  Patrón modular en javascript
date:   2015-05-25 12:00:35
categories: javascript 
permalink: patron-modular-en-javascript
---
En el mundo de javascript existen muchas facilidades de programar, el único detalle es abusar de sus facilidades. Al final uno obtiene variables y funciones repartidas a lo largo de todo el código y sin un orden, lo que termina siendo inmantenible. Una de las mejores practicas a la hora de escribir código es usar los patrones de diseño en javascript y el más utilizado es el patròn modular.

En javascript el patrón modular emula el concepto de clases, de manera que somos capaces de incluir métodos públicos/privados y propiedades dentro de un único objeto, protegiendo las datos particulares del ámbito global, lo que ayuda a evitar la colisión de nombres de funciones y variables ya definidas a lo largo de nuestro proyecto, o API’s de terceros, a continuación unos conceptos previos para poder entender mejor el patrón modular.

## Objeto literal
EL patrón modular se basa en parte en los objetos literales por ende es importante entenderlo.
Un objeto literal es descrito como cero o más pares nombre/valor, separados por comas entre llaves.
Los nombres dentro del objeto pueden ser cadenas o identificadores que son seguidas por 2 puntos, dichos objetos también pueden contener otros objetos y funciones.
{% highlight JavaScript linenos %}
var objetoLiteral = {
    /* los objetos literales pueden contener propiedades y métodos */
    saludo : "soy un objeto literal",
    miFuncion : function(){
      // código
    }
};
/* accediendo a una propiedad de nuestro objeto literal persona */
objectLiteral.saludo
{% endhighlight %}
Un ejemplo de un módulo usando un objeto literal.
{% highlight JavaScript linenos %}
var persona = {
    /* definiendo propiedades */
    nombre : "adan",
    edad   : 33,
    /* método simple */
    comer  : function(){
        console.log(this.nombre + " esta comiendo.");
    }
};
/* accediendo al método comer de nuestro objeto literal persona */
persona.comer();
{% endhighlight %}
## Módulo
Un módulo es una unidad independiente funcional que forma parte de la estructura de una aplicación.
Podemos usar funciones y closures(cierres) para crear módulos.
{% highlight JavaScript linenos %}
var modulo = (function(){
    //- - -
});
{% endhighlight %}
Un ejemplo más completo:
{% highlight JavaScript linenos %}
var automovil = (function(colorDeAuto){
    var color = colorDeAuto;
    return{
        avanzar : function(){
            console.log("el auto "+ color +" esta avanzando");
        },

        retroceder : function(){
            console.log("el auto "+ color +" esta retrocediendo");
        }
    }
})("azul");
/* accediendo los metodos retroceder y avanzar de nuestro módulo */
automovil.retroceder();
automovil.avanzar();
{% endhighlight %}
## Función anónima
Las funciónes anónimas son funciónes sin nombre, comúnmente asociados a una variable.
{% highlight JavaScript linenos %}
var miFuncionAnonima = function(){
    alert("Hola mundo!");
};
miFuncionAnonima();
{% endhighlight %}
## Funciones auto-ejecutables (IIFE)
Estas funciónes una vez declaradas se llaman a sí mismas para inicializarse, los primeros paréntesis encierran el contenido, los segundos paréntesis asumen que el interior de los primeros paréntesis es una función y la ejecuta inmediatamente.
{% highlight JavaScript linenos %}
/* 01 */
(function(){
    alert("Hello World!");
})();

/* 02 */
var myAnonymousFunction = (function(){
    alert("Hello World!");
})();

/* 03 */
var myAnonymousFunction = (function(message){
    alert(message);
})("hello world");
// todo lo que le precede a los 2 últimos paréntesis se ejecuta inmediatamente
{% endhighlight %}
## Clousure
Los clousures son funciones definidas dentro de otras funciones, así mismo dicha función interna tiene acceso al ámbito de la función contenedora.
{% highlight JavaScript linenos %}
function ejemploClousure(arg1, arg2){
    var localVar = 8;
    function multiplicador(interArg){
        return arg1 * arg2 * interArg * localVar;
    }
    /* retornar una referencia de la función interna definida como:
       multiplicador 
    */
    return multiplicador;
}

/* la función devuelve una función, por lo tanto necesita asignación */
var globalVar = ejemploClousure(2,4);
/* y luego llamar a */
globalVar(8);
{% endhighlight %}
## Métodos privados
Los métodos privados son funciones que no pueden ser llamados desde fuera del ámbito donde han sido declarados, dichos métodos podrán ser invocados en nuestros métodos públicos.
{% highlight JavaScript linenos %}
var modulo = (function () {
    var privateMethod = function (message1) {
        console.log(message1);
    };
    var publicMethod = function (mensaje2) {
        privateMethod(mensaje2);
    };
    return {
        publicMethod: publicMethod
    };
})();

/* pasando datos a un método privado */
modulo.publicMethod("mi mensaje");
{% endhighlight %}
## Entendiendo el retorno
Comúnmente los módulos retornan un objeto, la cual los métodos ligados a dicho objeto serán accesibles desde fuera del módulo.
{% highlight JavaScript linenos %}
var module = (function(){
    /* simple método privado */
    var privateMethod = function(){
        console.log("soy un método privado");
    };
  
    /* retornando un objeto literal */
    return{
        publicMethod : function(){
            privateMethod();
            console.log("soy un método publico");
        }
    }
})();
/* accediendo nuestro método publico */
module.publicMethod();
{% endhighlight %}
## Ventajas del patrón modular
- Código limpio , separado y organizado.
- Soportan datos privados.
- Código Escalable.

Bien, ahora que ya tenemos los algunos conceptos definidos vamos a realizar un ejercicio la cual sera realizar tabs, con una estructura más avanzada, vamos a realizarlo con jquery.

## 1. Definimos nuestra estructura html.
{% highlight html linenos %}
<ul class="tabs">
    <li class="tabs_item">
        <a class="tabs_item_target is_selected" data-tab="tab_one">JavaScript</a>
    </li>
    <li class="tabs_item">
        <a class="tabs_item_target" data-tab="tab_two">Html5</a>
    </li>
    <li class="tabs_item">
        <a class="tabs_item_target" data-tab="tab_three">Css</a>
    </li>
</ul>
<div class="tabs_content">
    <div id="tab_one" class="tabs_content_pane is_active">
        contenido JavaScript
    </div>
    <div id="tab_two" class="tabs_content_pane">
        contenido Html5
    </div>
    <div id="tab_three" class="tabs_content_pane">
        contenido Css
    </div>
</div>
{% endhighlight %}
## 2. Definimos nuestra estructura javascript.
A continuación se muestra una estructura modular mas avanzada y explicaremos paso a paso las partes que la componen.

{% highlight JavaScript linenos %}
// Definimos la variable tabs la cual contendrá todo nuestro modulo.
var tabs = (function(){
    // Objeto la cual establecemos valores que vamos a usar mas adelante en este ámbito.
    var st = {
        //- - -
    };
   
    // Objeto vacío que guardará elementos que se manejan por HTML.
    var dom = {}

    // Función que llenará al objeto dom con los objetos HTML a través de jQuery ($).
    var catchDom = function(){
        //- - -
    };

    // Función donde establecemos los eventos que tendrán cada elemento.
    var suscribeEvents = function(){
        //- - -
    };

    /* Objeto que guarda métodos que se van a usar en cada evento definido 
      en la función suscribeEvents. */
    var events = {
        //- - -
    };
 
    // Función que inicializará los funciones decritas anteriormente.
    var initialize = function(){
        //- - -
    };

    /* Retorna un objeto literal con el método init haciendo referencia a la 
       función initialize. */
    return{
        init:initialize
    }
})();

// Ejecutando el método "init" del módulo tabs.
tabs.init();
{% endhighlight %}
## 3. Creación de nuestro modulo.
Finalmente luego de haber entendido nuestra estructura anterior, procedemos a la creación de nuestro modulo tabs.
{% highlight JavaScript %}
var tabs = (function(){
    var st = {
        tabs             : '.tabs',
        tabs_item        : '.tabs_item',
        tabs_item_target : '.tabs_item_target'
    };

  var dom = {}

  var catchDom = function() {
    dom.tabs_item_target = $(st.tabs_item_target, st.tabs);
  };

  var suscribeEvents = function() {
    dom.tabs_item_target.on('click', events.eSelectedTab);
  };

  var events = {
    eSelectedTab: function(e) {
      self = $(this);
      self.addClass('is_selected');
      var brother = self.parent(st.tabs_item).siblings();
      $(st.tabs_item_target, brother).removeClass('is_selected');
      var pane = self.attr('data-tab');
      $("#" + pane).addClass('is_active');
      $("#" + pane).siblings().removeClass('is_active');
    }
  };

  var initialize = function() {
    catchDom();
    suscribeEvents();
  };

  return {
    init: initialize
  }
})();

tabs.init();
{% endhighlight %}
## Referencias
- [Learning JavaScript Design Patterns][1]
- [JavaScript: The Good Parts][2]

[1]:http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascriptt
[2]:https://www.safaribooksonline.com/library/view/javascript-the-good/9780596517748/