---
layout: page
title: Projects
permalink: /projects/
---

#### This is a list of my projects past and present. I have also contributed to some [SRCT](http://srct.gmu.edu/) projects that may not be listed, which you can find here: [<i class="fab fa-github"></i> SRCT](https://github.com/SRCT)

-------------------------

Current Projects
================

{% for project in site.data.projects %}
{% if project.current == true %}

{% if project.appstore %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/AppStore.png" alt="Download on the App Store"></a></h3>
{% else %}
<h3 class="project-heading">{{ project.name }}</h3>
{% endif %}
{{ project.description }}

{% if project.github %}
[<i class="fab fa-github"></i> {{ project.github.profile }}](https://github.com/{{ project.github.profile }}) / [{{ project.github.project-name }}]({{ project.github.project-url }})
{% elsif project.gitlab %}
[<i class="fab fa-gitlab"></i> {{ project.gitlab.profile-name }}]({{ project.gitlab.profile-url }}) / [{{ project.gitlab.project-name }}]({{ project.gitlab.project-url }})
{% elsif project.devpost %}
[<i class="fab fa-safari"></i> Devpost page]({{ project.devpost }})
{% endif %}
{% if project.web %}
[<i class="fab fa-safari"></i> {{ project.web.title }}]({{ project.web.link }})
{% endif %}


{% endif %} 
{% endfor %}

Completed Projects
=============

{% for project in site.data.projects %}
{% if project.current == false %}

{% if project.appstore %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/AppStore.png" alt="Download on the App Store"></a></h3>
{% else %}
<h3 class="project-heading">{{ project.name }}</h3>
{% endif %}
{{ project.description }}

{% if project.github %}
[<i class="fab fa-github"></i> {{ project.github.profile }}](https://github.com/{{ project.github.profile }}) / [{{ project.github.project-name }}]({{ project.github.project-url }})
{% elsif project.gitlab %}
[<i class="fab fa-gitlab"></i> {{ project.gitlab.profile-name }}]({{ project.gitlab.profile-url }}) / [{{ project.gitlab.project-name }}]({{ project.gitlab.project-url }})
{% endif %}
{% if project.devpost %}
[<i class="fab fa-safari"></i> Devpost page]({{ project.devpost }})
{% endif %}
{% if project.youtube %}
[<i class="fab fa-youtube"></i> YouTube Video]({{ project.youtube }})
{% endif %}
{% if project.web %}
[<i class="fab fa-safari"></i> {{ project.web.title }}]({{ project.web.link }})
{% endif %}
{% if project.appstore %}
<img class="store-badge" src="{{ site.baseurl }}/resources/AppStore.png" alt="Download on the App Store">
{% endif %}

{% endif %}
{% endfor %}
----------------------------

_Future Projects?_ I've got an idea in mind for a surprising productivity app for iOS. Hopefully I'll be able to work on that more soon...
