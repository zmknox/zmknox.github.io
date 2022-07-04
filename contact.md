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

### Need to get in touch? Here are a few ways to do so:

<br />

### Direct Message

The quickest way to get my attention is to send me a direct message somewhere. That might be
on [social media](https://twitter.com/zmknox), [Discord](https://discord.gg/TaG9bnm), or something more secure like [<i class="fa fa-key"></i> Keybase](https://keybase.io/zmknox). I have pretty much all the chat apps though,
so if you prefer one over another, let me know and I'll give you contact info there.

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
        <button class="g-recaptcha btn btn-primary btn-lg" 
        data-sitekey="6LflGvAZAAAAAEjM45Q2MVAWdC1TFlRevZLqDwWt" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
      </div>
    </div>
</form>
