import './app3.76711b53.css'
import $ from 'jquery'
const $cir = $('#app3 .cir');
$cir.on("mouseenter", e => {
    $cir.addClass('active');
});

$cir.on("mouseleave", e => {
    $cir.removeClass('active');
    console.log('1')
});

