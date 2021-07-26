---
layout: page
title: Television
description: A listing of some TV shows that I enjoy
tagline: Here are some TV shows that I enjoy. Maybe you'll enjoy them too!
permalink: /tv/
in_nav: false
---


<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    {% for show in site.data.tv %}
    <div class="col tv-col">
        <div class="card tv-card mx-auto">
            <img src="https://image.tmdb.org/t/p/w300{{ show.poster }}" class="card-img-top tv-poster" />
            <div class="card-body">
                <h5 class="card-title">{{ show.name }}</h5>
                <p class="card-text tv-card-text">{{ show.notes }}</p>
                <a href="{{ show.provider.link }}" class="tv-link"><i class="fas fa-tv tv-icon"></i> Watch on {% if show.provider.flatrate %}{{ show.provider.flatrate[0].provider_name }}{% elsif show.provider.ads %}{{ show.provider.ads[0].provider_name }}{% elsif show.provider.buy %}{{ show.provider.buy[0].provider_name }}{% endif %}</a>
            </div>
        </div>
    </div>
        
    {% endfor %}
</div>


<br />

<small>*Not a documentary</small>

<br />

<div class="row">
    <div class="col-md-3 tmdb-link">
        <center>
            <a href="https://www.themoviedb.org/" class="tmdb-link">
                <img src="/resources/tmdb.svg" alt="TMDb logo" style="max-width:200px;" />
            </a>
        </center>
    </div>
    <div class="col-md-9 tv-footer">

Powered by <a href="https://www.themoviedb.org/">TMDb</a> and <a href="https://www.justwatch.com/">JustWatch</a>. This product uses the TMDb API but is not endorsed or certified by TMDb.

    </div>
</div>
