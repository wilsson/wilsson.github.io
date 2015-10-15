---
layout: post
title: Creando tu blog con jekyll
permalink: creando-tu-blog-con-jekyll
---
Este blog esta construido puramente con jekyll, y que mejor que compartir con ustedes lo que esta herramienta puede lograr.

## ¿Qué es jekyll?
Jekyll es un generador blog y de sitios estaticos. Se necesita un directorio plantilla que contiene los archivos de
texto sin procesar en varios formatos como Markdown entre otros, y nuestro motor de plantillas(Liquid).

Jekyll tambien pasa a ser un motor detrás de github pages, lo que significa que puede utilizar jekyll para acoger su proyecto: blog, website, entre otros en los servidores de github gratis. 

## Empezando con jekyll
Antes que nada debemos tener instalado nuestra gema para esto debe tener ruby.
{% highlight Bash %}
gem install jekyll
{% endhighlight %}
{% highlight Bash %}
jekyll new demoBlog
{% endhighlight %}
{% highlight Bash %}
cd demoBlog
{% endhighlight %}
{% highlight Bash %}
jekyll serve
{% endhighlight %}

Lo podras ver en **localhost:4000**

## Uso basico
Como se habra dado cuenta, usted usar la gema jekyll directamente de su terminal.
{% highlight Bash %}
jekyll build
{% endhighlight %}
La cual generara su proyecto en **./_site**.
