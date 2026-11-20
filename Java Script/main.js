let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let btn3=document.getElementById('btn3')
let b=document.getElementById('b')
let h1=document.getElementById('h1')
let sp=document.getElementById('sp')
let toast = document.getElementById('toast')
// start function changeZekr
function changeZekr(){
        if(+sp.innerText%5==0){
            // window.alert('أَحْسَنْتَ! ❤️')
            h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا خَلَقَ'
            if(+sp.innerText == 10){
                h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 15){
                h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 20){
                h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 25){
                h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
            
            }
            else if(+sp.innerText == 30){
               h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 35){
               h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 40){
                h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ  وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 45){
                b.innerText='الحمد'
                h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 50){
                h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 55){
                h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 60){
                h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 65){
                h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 70){
                h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 75){
                h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 80){
                h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 85){
                h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 90){
                b.innerText='التهليل'
                h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 95){
                h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 100){
                h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 105){
                h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 110){
                h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 115){
                h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 120){
                h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ كُلِّ شَيْءٍ'
            }
            else if(+sp.innerText == 125){
                h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ كُلِّ شَيْءٍ'
            }
            else if(+sp.innerText == 130){
                h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 135){
                b.innerText='التكبير'
                h1.innerText='الله أَكْبَرُ عَدَدَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 140){
                h1.innerText='الله أَكْبَرُ مِلْءَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 145){
                h1.innerText='الله أَكْبَرُ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 150){
                h1.innerText='الله أَكْبَرُ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 155){
                h1.innerText='الله أَكْبَرُ عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 160){
                h1.innerText='الله أَكْبَرُ مِلْءَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 165){
                h1.innerText='الله أَكْبَرُ عَدَدَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 170){
                h1.innerText='الله أَكْبَرُ مِلْءَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 175){
                h1.innerText='الله أَكْبَرُ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 180){
                b.innerText='الحوقلة'
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 185){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 190){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 195){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 200){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 205){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 210){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ كُلِّ شَيْءٍ'
            }
            else if(+sp.innerText == 215){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ كُلِّ شَيْءٍ'
            }
            else if(+sp.innerText == 220){
                h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 225){
                b.innerText='الاستغفار'
                h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 230){
                h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا خَلَقَ'
            }
            else if(+sp.innerText == 235){
                h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 240){
                h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 245){
                h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 250){
                h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا أَحْصَى كِتَابُهُ'
            }
            else if(+sp.innerText == 255){
                h1.innerText='أَسْتَغْفِرُ الله عَدَدَ وَمِلْءَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 260){
                h1.innerText='أَسْتَغْفِرُ الله عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
            }
            else if(+sp.innerText == 265){
                b.innerText='الصلاة على النبي'
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا خَلَقْتَ'
            }
            else if(+sp.innerText == 270){
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا خَلَقْتَ'
            }
            else if(+sp.innerText == 275){
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا أَحْصَى كِتَابُكَ'
            }
            else if(+sp.innerText == 280){
                h1.innerText='للَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا أَحْصَى كِتَابُكَ'
            }
            else if(+sp.innerText == 285){
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 290){
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ كل شَيْءٍ'
            }
            else if(+sp.innerText == 295){
                h1.innerText='للَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
            else if(+sp.innerText == 300){
                h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
            }
        }
    }
// end function changeZekr

// start function showMessage
    function showMessage() {
    if (+sp.innerText % 50 == 0 && +sp.innerText != 0) {
        alert('ما شاء الله ❤️ تقبل الله منك');
    }
}
// end function showMessage

// pluse
    btn1.onclick=function(){
        if(+sp.innerText<300){
        sp.innerText=+sp.innerText+1
        showMessage();
    }

    if(+sp.innerText %5 == 0){
        changeZekr();
    }
}

// minus
btn2.onclick=function(){
    if(+sp.innerText>0){
        sp.innerText=+sp.innerText-1;
    }
    if(+sp.innerText %5 == 0){
        changeZekr();
    }
}

// Refresh
btn3.onclick=function(){
    sp.innerText=0;
    changeZekr();
}





// btn1.onclick = function(){
//     if(+sp.innerText<300){
//         sp.innerText=+sp.innerText+1
        
//         if(+sp.innerText%5==0){
//             // window.alert('أَحْسَنْتَ! ❤️')
//             h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا خَلَقَ'
//             if(+sp.innerText == 10){
//                 h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 15){
//                 h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 20){
//                 h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 25){
//                 h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
            
//             }
//             else if(+sp.innerText == 30){
//                h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 35){
//                h1.innerText='سُبْحَانَ اللَّهِ مِلْءَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 40){
//                 h1.innerText='سُبْحَانَ اللَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ  وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 45){
//                 b.innerText='الحمد'
//                 h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 50){
//                 h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 55){
//                 h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 60){
//                 h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 65){
//                 h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 70){
//                 h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 75){
//                 h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 80){
//                 h1.innerText='الْحَمْدُ لِلَّهِ مِلْءَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 85){
//                 h1.innerText='الْحَمْدُ لِلَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 90){
//                 b.innerText='التهليل'
//                 h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 95){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 100){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 105){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 110){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 115){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 120){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ كُلِّ شَيْءٍ'
//             }
//             else if(+sp.innerText == 125){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله مِلْءَ كُلِّ شَيْءٍ'
//             }
//             else if(+sp.innerText == 130){
//                 h1.innerText='لَا إِلَهَ إِلَّا الله عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 135){
//                 b.innerText='التكبير'
//                 h1.innerText='الله أَكْبَرُ عَدَدَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 140){
//                 h1.innerText='الله أَكْبَرُ مِلْءَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 145){
//                 h1.innerText='الله أَكْبَرُ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 150){
//                 h1.innerText='الله أَكْبَرُ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 155){
//                 h1.innerText='الله أَكْبَرُ عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 160){
//                 h1.innerText='الله أَكْبَرُ مِلْءَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 165){
//                 h1.innerText='الله أَكْبَرُ عَدَدَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 170){
//                 h1.innerText='الله أَكْبَرُ مِلْءَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 175){
//                 h1.innerText='الله أَكْبَرُ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 180){
//                 b.innerText='الحوقلة'
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 185){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 190){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 195){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 200){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 205){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 210){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ كُلِّ شَيْءٍ'
//             }
//             else if(+sp.innerText == 215){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ مِلْءَ كُلِّ شَيْءٍ'
//             }
//             else if(+sp.innerText == 220){
//                 h1.innerText='لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 225){
//                 b.innerText='الاستغفار'
//                 h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 230){
//                 h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا خَلَقَ'
//             }
//             else if(+sp.innerText == 235){
//                 h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 240){
//                 h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 245){
//                 h1.innerText='أَسْتَغْفِرُ الله عَدَدَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 250){
//                 h1.innerText='أَسْتَغْفِرُ الله مِلْءَ مَا أَحْصَى كِتَابُهُ'
//             }
//             else if(+sp.innerText == 255){
//                 h1.innerText='أَسْتَغْفِرُ الله عَدَدَ وَمِلْءَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 260){
//                 h1.innerText='أَسْتَغْفِرُ الله عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ'
//             }
//             else if(+sp.innerText == 265){
//                 b.innerText='الصلاة على النبي'
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا خَلَقْتَ'
//             }
//             else if(+sp.innerText == 270){
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا خَلَقْتَ'
//             }
//             else if(+sp.innerText == 275){
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا أَحْصَى كِتَابُكَ'
//             }
//             else if(+sp.innerText == 280){
//                 h1.innerText='للَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا أَحْصَى كِتَابُكَ'
//             }
//             else if(+sp.innerText == 285){
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 290){
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ كل شَيْءٍ'
//             }
//             else if(+sp.innerText == 295){
//                 h1.innerText='للَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ عَدَدَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//             else if(+sp.innerText == 300){
//                 h1.innerText='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ مِلْءَ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ'
//             }
//         }
//     }
// }

// btn2.onclick =function(){
//     if(+sp.innerText>0){
//         sp.innerText =+sp.innerText-1
//     }

// }



