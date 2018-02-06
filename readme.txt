
Using local image assets in the project:
<script type="text/javascript">
  window.staticImages = {
	  imageName: "<%= asset_url "image_name.png" %>"
  }
</script>


If you are using an image path in CSS, you don't need to use the window.staticImages object. 
*This is only for getting image paths in a React component*. 
If you want an image path in css, you should make your css files .scss (sass) files if you haven't already. 
Then, you can use the image_url helper method. An example:

.header {
  background-image: image_url("welcome.png");
}


Example of using root.html to place imageUrls:
<script type="text/javascript">
    window.imageUrls = {
    peaceHands: "<%= image_path("peace-hands.svg") %>",
    iconHand: "<%= image_path("icon_hand_magic.svg") %>",
    userDefault: "<%= image_path("default_chef_pic.svg") %>",
    iconClose: "<%= image_path("icon_close.svg") %>",
    iconFB: "<%= image_path("icon_facebook.svg") %>",
    iconTwitter: "<%= image_path("icon_twitter.svg") %>",
    iconPin: "<%= image_path("icon_pinterest.svg") %>",
    iconMail: "<%= image_path("icon_mail.svg") %>",
    iconPrint: "<%= image_path("icon_print.svg") %>",
    iconStarEmpty: "<%= image_path("icon_star_empty.svg") %>"
  }
</script>


<img className="one-hand"
        src={window.imageUrls.peaceHands}></img>
      );
