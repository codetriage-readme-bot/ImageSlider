ImageSlider
===========

This javascript library is a simple image slider that slides the images with specified periodic time.

The main usage of this library is as follows:

Note: the "Images/1.jpg" means the folder with Images having "1.jpg" as an image.

```html
<h1>Simple Image Slider</h1>
<div id="ssd_slider" class="ssd_slider">
    <div id="ssd_sliderContent" class="ssd_sliderContent">
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/1.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/1.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/1.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/2.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/2.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/2.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/3.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/3.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/3.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/4.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/4.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/4.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/5.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/5.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/5.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/6.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/6.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/6.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="ssd_sliderImage">
            <div class="ssd_image" style="background-image: url(Images/7.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/7.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/7.jpg',sizingMethod='scale');"></div>
        </div>
        <div class="clear ssd_sliderImage"></div>
    </div>
</div>
```

On domready, using Jqueries functionality we can use:
```javascript
<script src="{{ STATIC_URL }}JS/imageslider.js" type="text/javascript" ></script>							
<script type="text/javascript">
	$(document).ready(function() {
		$('.ssd_silderImage').hide();
		$('#ssd_silder').slider({
			timeOut: 6000 
		});
	});
</script>
```

I used the CSS as follows:

```css
div.ssd_silder {
    -moz-box-shadow: 0 0 10px 5px #888;
    -webkit-box-shadow: 0 0 10px 5px #888;
    box-shadow: 0 0 10px 5px #888;
}
div.ssd_silderContent, div.ssd_silderImage {
    margin:0px;
    top:0px;
    left:0px;
    bottom:0px;
    padding:0px;
    height:100%;
    width:100%;
}
div.ssd_image {
    margin:0px;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
    height:450px;
    width:100%;
    background-size: 100% 100%;
}
```

There is sample silder effect created with background color and not images. 
You can find it here: 

http://jsfiddle.net/nagtan3/xtc8wu55/
