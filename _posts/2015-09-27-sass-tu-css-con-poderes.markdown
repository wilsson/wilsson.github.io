---
layout: post
title: Sass tu css con poderes
permalink: sas-tu-css-con-poderes
---
Existen muchos precompiladores css, en esta ocación hablaremos de sass.

Antes de poder empezar con Sass usted tendra que tener instalado Ruby, si stas en una distribucion linux puedes hacerlo desde el manejador de paquetes **apt**, si estas usando windows, usted puede usar [Ruby installer][1].

Ruby utiliza gemas para gestionar sus diversos paquetes de codigo como Sass, si usas linux utiliza **sudo**.

{% highlight Bash %}
gem install sass
{% endhighlight %}

Bueno ahora que ya tenemos todos ingredientes para trabajar proseguiremos a explicar algunas de sus caracteristicas.

> - *Variables*
> - *Nesting*
> - *Import*
> - *Mixins*
> - *Extend/Inheritance*
> - *Operators*

###Nota
Sass tiene 2 sintaxis, **scss** y **sass**, para los los ejemplos se usara la sintaxis scss.

##Variables
Imagine las variables como si fuesen cajitas donde usted almacenara algo que despues usara, en sass es igual, en dichas cajitas usted almacenara información que desea volver a utilizar a lo largo de sus hojas de estilos, para crear una variable ponga el simbolo **$** al inicio del nombre de la variable.
{% highlight Css %}
$primary-color: #444;

h1{
  color: $primary-color;
}
{% endhighlight %}
Una vez compilado tu hoja de estilos en sass, tendra como resultado el css siguiente.
{% highlight Css %}
h1{
  color:#444;
}
{% endhighlight %}

## Nesting
Seguro usted a notado que el html tiene una jerarquia anidada, *css* por otra parte no lo tiene.

Sass le permitira anidamiento(nesting) de sus selectores, tenga en cuenta que las reglas excesivas de anidamiento se traducira en más css, se recomienda 3 niveles de anidamiento como maximo.
{% highlight Css %}
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
{% highlight Css %}
article h2{
  color:#444;
}

article a{
  font-size:14px;  
}
{% endhighlight%}
## Import
Sass tambien te permite importar al igual que **css**, la diferencia es que en el **css** cada vez que utilices **@import**, css crea otra petición HTTP, en cambio **sass** simplemente tomará el archivo que deseas importar y lo combinara con el archivo que está importandolo para que pueda servir a un solo archivo **css**.

Supongamos que tenemos un archivo **menu.scss** y lo queramos importar en **main.scss**
{% highlight Css %}
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

{% highlight Css %}
// menu.scss
@import 'menu';
article{
	padding:20px;
}
{% endhighlight %}
Nótese que al importar el archivo **menu.scss** en **main.scss** no estamos usando la extensión **.scss** y como resultado obtenemos.
{% highlight Css %}
nav ul li {
  display: inline-block;
  color: #444;
  font-size: 14px; 
}

article {
  padding: 20px; 
}
{% endhighlight %}
##Mixins
Un mixin nos permite crear bloques reutilizables de css, esto nos ayudara a escribir código repetitivo.

Para poder crear un mixin utiliza la directiva **@mixin** y dale un nombre, tambien usamos **$** para la variable dentro de los paréntesis, después de crear su mixin, puede utilizarlo como una declaración css comenzando con **@include**, seguido del nombre del mixin.
{% highlight Css %}
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
{% highlight Css %}
.card {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px; 
}
{% endhighlight %}

[1]:http://rubyinstaller.org/