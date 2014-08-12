ImageSlider
===========

This javascript library is a simple image slider that slides the images with specified periodic time.


The main usage of this library is as follows:

      <div id="ssd_glider" class="ssd_glider">
		<div id="ssd_gliderContent" class="ssd_gliderContent">
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/1.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/1.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/1.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/2.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/2.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/2.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/3.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/3.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/3.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/4.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/4.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/4.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/5.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/5.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/5.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/6.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/6.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/6.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/7.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/7.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='Images/7.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="clear ssd_gliderImage"></div>
		</div>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			$('.ssd_gliderImage').hide();
			$('#ssd_glider').slider({
				timeOut: 6000 
			});
		});
	</script>




There is sample silder effect created with background color and not images. You can find it here: http://jsfiddle.net/nagtan3/cdL1tekf/
The above jsfiddle does not contain the images since jsfiddle requires me to upload a link to the images.
