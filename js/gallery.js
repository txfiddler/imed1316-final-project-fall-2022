// A $( document ).ready() block.
$(document).ready(function () {
  // console.log( "ready!" );

  $("#ngy2p").nanogallery2({
    thumbnailHeight: "auto",
    thumbnailWidth: "300",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      align: "right"
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
