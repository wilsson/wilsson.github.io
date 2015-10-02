---
layout: post
title: Sass, tu css con poderes
categories: css
permalink: sas-tu-css-con-poderes
---
En este post les presentare a un gran amigo llamado **Sass**, pero qué es Sass?, se preguntaran muchos, bueno de **sass** podemos decir que es un metalenguaje css, pero no solo eso, ya que nos brinda una serie de poderes fantásticos para poder generar nuestro css.

Antes de poder empezar con Sass usted tendrá que tener instalado Ruby, si estas en una distribución linux puedes hacerlo desde el manejador de paquetes **apt**, si estás usando windows, usted puede usar [Ruby installer][1].

Ruby utiliza gemas para gestionar sus diversos paquetes de código como Sass, si usas linux utiliza **sudo**.

{% highlight Console %}
gem install sass
{% endhighlight %}

Bueno ahora que ya tenemos todos ingredientes para trabajar proseguiremos a explicar algunas de sus características.

> - *Variables*
> - *Nesting*
> - *Import*
> - *Mixins*
> - *Extend/Inheritance*
> - *Operators*

### Nota
Sass tiene 2 sintaxis, **scss** y **sass**, para los los ejemplos se usara la sintaxis scss.

## Variables
Imagine las variables como si fuesen cajitas donde usted almacenará algo que después usará, en sass es igual, en dichas cajitas usted almacenará información que desea volver a utilizar a lo largo de sus hojas de estilos, para crear una variable ponga el simbolo **$** al inicio del nombre de la variable.
{% highlight Scss linenos %}
$primary-color: #444;

h1{
  color: $primary-color;
}
{% endhighlight %}
Una vez compilado tu hoja de estilos en sass, tendrá como resultado el css siguiente.
{% highlight Css linenos %}
h1{
  color:#444;
}
{% endhighlight %}
## Nesting
Seguro usted a notado que el html tiene una jerarquía anidada, **css** por otra parte no lo tiene.

Sass si te permitirá anidamiento(nesting) de sus selectores, tenga en cuenta que las reglas excesivas de anidamiento se traducirá en más css, se recomienda 3 niveles de anidamiento como máximo.
{% highlight Scss linenos %}
article{
  h2{
    color:#444;
  }
  a{
    font-size:14px;  
  }
}
{% endhighlight%}
Que tendra como resultado.
{% highlight Css linenos %}
article h2{
  color:#444;
}

article a{
  font-size:14px;  
}
{% endhighlight%}
También muchas veces en css nos encontramos con propiedades que empiezan con el mismo nombre seguido de un guión y luego el resto del nombre, como por ejemplo.
{% highlight Css linenos%}
article {
  border-color: black;
  border-style: solid;
  border-width: 4px;
}
{% endhighlight %}
Claro esta  podemos que podemos usar la sintaxis abreviada.
{% highlight Css linenos %}
article{
  border: 4px solid black;
}
{% endhighlight %}
Nuestro amigo sass nos brinda la posibilidad de  hacer **Nested Properties**, que se trata de utilizar una sintaxis diferente para este tipo de propiedades.

Para poder lograrlo solo tenemos que escribir nuestro nombre genérico de la propiedad, seguido de dos puntos (**:**), dentro de él  se colocara todo el bloque de propiedades específicas.
{% highlight Scss linenos %}
article{
  border:{
    color:black;
    style:solid;
    width:4px;
  }
}
{% endhighlight %}
Lo que nos dara como resultado.
{% highlight Css linenos %}
article {
  border-color: black;
  border-style: solid;
  border-width: 4px;
}
{% endhighlight %}
Hay más, también nos permite una jerarquización de varios niveles de profundidad.
{% highlight Scss linenos %}
article{
  border:{
    top:{
      style:solid;
      left:{
        radius:5px;
      }
    }
  }
}
{% endhighlight %}
Que nos dara de resultado.
{% highlight Css linenos %}
article {
  border-top-style: solid;
  border-top-left-radius: 5px;
}
{% endhighlight %}
## Import
Sass tambien te permite importar al igual que **css**, la diferencia es que en el **css** cada vez que utilices **@import**, css crea otra petición HTTP, en cambio **sass** simplemente tomará el archivo que deseas importar y lo combinara con el archivo que está importando para que pueda servir a un solo archivo **css**.

Supongamos que tenemos un archivo **menu.scss** y lo queramos importar en **main.scss**
{% highlight Scss linenos %}
// menu.scss
nav{
  ul{
    li{
      display:inline-block;
      color:#444;
      font-size:14px; 
    }
  }
}
{% endhighlight %}

{% highlight Scss linenos %}
// menu.scss
@import 'menu';
article{
    padding:20px;
}
{% endhighlight %}
Nótese que al importar el archivo **menu.scss** en **main.scss** no estamos usando la extensión **.scss** y como resultado obtenemos.
{% highlight Css linenos %}
nav ul li {
  display: inline-block;
  color: #444;
  font-size: 14px; 
}

article {
  padding: 20px; 
}
{% endhighlight %}
## Mixins
Un mixin nos permite crear bloques reutilizables de css, esto nos ayudará a escribir código repetitivo.

Para poder crear un mixin utiliza la directiva **@mixin** y dale un nombre, también usamos **$** para la variable dentro de los paréntesis, después de crear su mixin, puede utilizarlo como una declaración css comenzando con **@include**, seguido del nombre del mixin.
{% highlight Scss linenos %}
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.card { 
  @include border-radius(5px); 
}
{% endhighlight %}
Obtenemos como resultado.
{% highlight Css linenos %}
.card {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px; 
}
{% endhighlight %}
## Extend/inheritance
Usando extend te permite compartir un conjunto de propiedades css de un selector a otro.
{% highlight Scss linenos %}
.box{
  background-color:black;
  color:white;
}

.card{
  @extend .box;
  font-size:16px;
}
.card-notice{
  @extend .box;
  background-color:red;
}
{% endhighlight %}
Lo que nos dara de resultado.
{% highlight Css linenos %}
.box, .card, .card-notice {
  background-color: black;
  color: white;
}

.card {
  font-size: 16px;
}

.card-notice {
  background-color: red;
}
{% endhighlight %}
## Operators
Sass contiene un monton de operadores matematicos (+ , - , * , / , %) que nos facilitaran la vida al momento de crear nuestras hojas de estilos.
{% highlight Scss linenos %}
$width-primary:980px; 
.card{
    width:$width-primary/2;
}
{% endhighlight %}
Obtenemos lo siguiente.
{% highlight Css linenos %}
.card{
    width:490;
}
{% endhighlight %}

[1]:http://rubyinstaller.org/
