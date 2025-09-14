let header = document.getElementsByTagName('header')[0];
let frist_section = document.getElementsByClassName('service-section1')[0];
let second_section = document.getElementsByClassName('service-section2')[0];
let thard_section = document.getElementsByClassName('service-section3')[0];
let fourth_section = document.getElementsByClassName('service-section4')[0];
let img_section = document.getElementsByClassName('img-section')[0];
let h1_section = document.getElementsByClassName('part-three-right-h1')[0];


let targetpositionforheadershowing = 5;
let card_frist_part_showing_targer_positon = 40;
let card_second_part_showing_target_positon = 150;
let img_section_showing_target_position = 360;

window.addEventListener('scroll' , function(){
    let currentYposition = window.scrollY;
    function card_friest_part_function(){
        frist_section.style.top = '0px';
        thard_section.style.top = '0px';
        frist_section.style.opacity = '1';
        thard_section.style.opacity = '1';
    }
    function card_second_pard_function(){
        second_section.style.top = '0px';
        second_section.style.right = '0px';
        fourth_section.style.top = '0px';
        fourth_section.style.left = '0px';
        second_section.style.opacity = '1';
        fourth_section.style.opacity = '1';
    }
    if(currentYposition > targetpositionforheadershowing){
        header.style.backgroundColor = '#1C2431';
        // header.style.boxShadow = '0px 0px 10px black';
    }
    if(currentYposition > card_frist_part_showing_targer_positon){
        card_friest_part_function();
    }
    if(currentYposition > card_second_part_showing_target_positon){
        card_second_pard_function();
    }
    if(currentYposition > img_section_showing_target_position){
        img_section.style.width = '40%';
    }
    if(currentYposition > img_section_showing_target_position){
        h1_section.style.left = '0px';
        h1_section.style.opacity = '1';
    }
});