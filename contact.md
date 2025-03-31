---
layout: page
title: Contact
permalink: /contact/
---
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
 <script>
   function onSubmit(token) {
     document.getElementById("contact-form").submit();
   }
 </script>

You can get in touch with me in a few ways:

### Direct Message

The quickest way to get my attention is to send me a direct message somewhere. That might be
on [social media](https://snailedit.social/@zmk), Discord, or something more secure like Signal. If you don't have my contact info for these or any other messaging service, send me an email and I can send it over.

### Email

You can send me an email using this form below:

<form id="contact-form" action="https://formspree.io/f/mdopzrrg" method="POST">
    <div class="form-group row">
        <div class=" col-sm-6 mb-3">
            <input class="form-control form-control-lg contact-form" type="text" name="name" placeholder="Name">
        </div>
        <div class="col-sm-6 mb-3">
            <input class="form-control form-control-lg contact-form" type="email" name="_replyto" placeholder="Email Address">
        </div>
    </div>
    <div class="form-group row mb-3">
      <div class="col">
        <input class="form-control form-control-lg contact-form" type="text" name="_subject" placeholder="Subject">
      </div>
    </div>
    <div class="form-group row mb-3">
      <div class="col">
        <textarea class="form-control contact-form" name="message" placeholder="Message" cols="40" rows="6"></textarea>
      </div>
    </div>
    <div class="form-group row">
      <div class="col">
        <button id="submit-button" class="g-recaptcha btn btn-primary btn-lg" 
        data-sitekey="6LflGvAZAAAAAEjM45Q2MVAWdC1TFlRevZLqDwWt" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
      </div>
    </div>
</form>

(You can also send an email to anything at this domain if you'd prefer)

----------

Please don't send me pitches for blog posts. I am the only person who will write any posts on this site.
