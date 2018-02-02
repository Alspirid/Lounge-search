
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
