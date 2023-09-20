<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS (FrontEnd)-->
        @if(Route::currentRouteName() === 'front')
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/bootstrap.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/linericon/style.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/font-awesome.min.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/themify-icons.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/flaticon.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/lightbox/simpleLightbox.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/animate-css/animate.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/vendors/jquery-ui/jquery-ui.css" />
        <!-- main css FrontEnd-->
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/style.css" />
        <link rel="stylesheet" href="{{ asset('frontend') }}/css/responsive.css" />

        @else
        {{-- Backend --}}
        <link rel="apple-touch-icon" href="{{ asset('backend') }}/apple-icon.png">
        <link rel="shortcut icon" href="{{ asset('backend') }}/favicon.ico">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/themify-icons/css/themify-icons.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/flag-icon-css/css/flag-icon.min.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/selectFX/css/cs-skin-elastic.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/vendors/jqvmap/dist/jqvmap.min.css">
        <link rel="stylesheet" href="{{ asset('backend') }}/assets/css/style.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
        @endif
        <title>Ecommerce</title>
    </head>
    <body>
        <div id="master"></div>
        <!-- Optional JavaScript (FrontEnd)-->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        @if(Route::currentRouteName() === 'front')
        <script src="{{ asset('frontend') }}/js/jquery-3.2.1.min.js"></script>
        <script src="{{ asset('frontend') }}/js/popper.js"></script>
        <script src="{{ asset('frontend') }}/js/bootstrap.min.js"></script>
        <script src="{{ asset('frontend') }}/js/stellar.js"></script>
        <script src="{{ asset('frontend') }}/vendors/lightbox/simpleLightbox.min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/nice-select/js/jquery.nice-select.min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/isotope/imagesloaded.pkgd.min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/isotope/isotope-min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/owl-carousel/owl.carousel.min.js"></script>
        <script src="{{ asset('frontend') }}/js/jquery.ajaxchimp.min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/counter-up/jquery.waypoints.min.js"></script>
        <script src="{{ asset('frontend') }}/vendors/counter-up/jquery.counterup.js"></script>
        <script src="{{ asset('frontend') }}/js/mail-script.js"></script>
        <script src="{{ asset('frontend') }}/js/theme.js"></script>

        @else
        {{-- backend --}}
        <script src="{{ asset('backend') }}/vendors/jquery/dist/jquery.min.js"></script>
        <script src="{{ asset('backend') }}/vendors/popper.js/dist/umd/popper.min.js"></script>
        <script src="{{ asset('backend') }}/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="{{ asset('backend') }}/assets/js/main.js"></script>
        <script src="{{ asset('backend') }}/vendors/chart.js/dist/Chart.bundle.min.js"></script>
        <script src="{{ asset('backend') }}/assets/js/dashboard.js"></script>
        <script src="{{ asset('backend') }}/assets/js/widgets.js"></script>
        <script src="{{ asset('backend') }}/vendors/jqvmap/dist/jquery.vmap.min.js"></script>
        <script src="{{ asset('backend') }}/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
        <script src="{{ asset('backend') }}/vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
        <script>
            (function($) {
                "use strict";

                jQuery('#vmap').vectorMap({
                    map: 'world_en',
                    backgroundColor: null,
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#1de9b6',
                    enableZoom: true,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#1de9b6', '#03a9f5'],
                    normalizeFunction: 'polynomial'
                });
            })(jQuery);
        </script>
        @endif
        {{-- React only --}}
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
