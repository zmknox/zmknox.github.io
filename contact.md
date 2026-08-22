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

You can send me an email using this form. Please feel free to reach out if you need anything!

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

If you want to chat via something less formal or more than email (like Discord, Signal, etc), let me know and I can send you my usernames.

----------

Please don't send me pitches for blog posts. I am the only person who will write any posts on this site.
