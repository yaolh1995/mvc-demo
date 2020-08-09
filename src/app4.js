import './app4.css'
import $ from 'jquery'
const $cir = $('#app4>.cir');
$cir.on("mousemove", e => {
    $cir.addClass("active");
});

$cir.on("mouseleave", e => {
    $cir.removeClass('active');
    console.log('1')
});