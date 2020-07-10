---
layout: page
title: Projects
permalink: /projects/
---

#### This is a list of projects I've contributed to or worked on past and present.

This list includes some contract work, but does not include work done for my long-term employers.

-------------------------

<center><h2>Current Projects</h2></center>

<div class="project-card-columns">
{% for project in site.data.projects %}
{% if project.current == true %}
<div class="card project-card my-4">

{% if project.appstore %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/AppStore.png" alt="Download on the App Store"></a></h3>
{% elsif project.testflight %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/testflight-badge.png" alt="Get the beta on TestFlight"></a></h3>
{% else %}
<h3 class="project-heading">{{ project.name }}</h3>
{% endif %}
<p>{{ project.description }}</p>

{% if project.github %}
<p>
<a href="https://github.com/{{ project.github.profile }}"><i class="fab fa-github"></i> {{ project.github.profile }}</a> / <a href="{{ project.github.project-url }}">{{ project.github.project-name }}</a>
</p>
{% elsif project.gitlab %}
<p>
<a href="{{ project.gitlab.profile-url }}"><i class="fab fa-gitlab"></i> {{ project.gitlab.profile-name }}</a> / <a href="{{ project.gitlab.project-url }}">{{ project.gitlab.project-name }}</a>
</p>
{% endif %}
{% if project.devpost %}
<p>
<a href="{{ project.devpost }}"><i class="fab fa-safari"></i> Devpost page</a>
</p>
{% endif %}
{% if project.web %}
<p>
<a href="{{ project.web.link }}"><i class="fab fa-safari"></i> {{ project.web.title }}</a>
</p>
{% endif %}

</div>
{% endif %} 
{% endfor %}
</div>

<center><h2 class="mt-5 mb-3">Completed Projects</h2></center>

<div class="project-card-columns">
{% for project in site.data.projects %}
{% if project.current == false %}
<div class="card project-card my-4">

{% if project.appstore %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/AppStore.png" alt="Download on the App Store"></a></h3>
{% elsif project.testflight %}
<h3 class="project-heading">{{ project.name }}  <a href="{{ project.appstore }}"><img class="store-badge" src="{{ site.baseurl }}/resources/testflight-badge.png" alt="Get the beta on TestFlight"></a></h3>
{% else %}
<h3 class="project-heading">{{ project.name }}</h3>
{% endif %}
<p>{{ project.description }}</p>

{% if project.github %}
<p>
<a href="https://github.com/{{ project.github.profile }}"><i class="fab fa-github"></i> {{ project.github.profile }}</a> / <a href="{{ project.github.project-url }}">{{ project.github.project-name }}</a>
</p>
{% elsif project.gitlab %}
<p>
<a href="{{ project.gitlab.profile-url }}"><i class="fab fa-gitlab"></i> {{ project.gitlab.profile-name }}</a> / <a href="{{ project.gitlab.project-url }}">{{ project.gitlab.project-name }}</a>
</p>
{% endif %}
{% if project.devpost %}
<p>
<a href="{{ project.devpost }}"><i class="fab fa-safari"></i> Devpost page</a>
</p>
{% endif %}
{% if project.youtube %}
<p>
<a href="{{ project.youtube }}"><i class="fab fa-youtube"></i> YouTube Video</a>
</p>
{% endif %}
{% if project.web %}
<p>
<a href="{{ project.web.link }}"><i class="fab fa-safari"></i> {{ project.web.title }}</a>
</p>
{% endif %}

</div>
{% endif %}
{% endfor %}
</div>
----------------------------

I have also contributed to some [SRCT](http://srct.gmu.edu/) projects that may not be listed, which you can find here: [<i class="fab fa-github"></i> SRCT](https://github.com/SRCT).
