ImageSlider
===========

This javascript library is a simple image slider that slides the images with specified periodic time.


The main usage of this library is as follows:

      <div id="ssd_glider" class="ssd_glider">
		<div id="ssd_gliderContent" class="ssd_gliderContent">
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/1.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/1.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/1.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/2.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/2.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/2.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/3.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/3.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/3.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/4.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/4.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/4.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/5.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/5.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/5.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/6.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/6.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/6.jpg',sizingMethod='scale');"></div>
				</div>
			<div class="ssd_gliderImage">
				<div class="ssd_image" style="background-image: url(Images/7.jpg); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/7.jpg',sizingMethod='scale'); -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{{ STATIC_URL }}Images/7.jpg',sizingMethod='scale');"></div>
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
