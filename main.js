// (كود الدارك مود من جيميناي )
// 1. تحديد العناصر من الـ HTML
const toggleSwitch = document.querySelector('#checkbox');
const themeText = document.querySelector('.theme-text');

// 2. التشييك الأول أول ما الصفحة تفتح: هل فيه ثيم متخزن قبل كده؟
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    // لو لقيناله ثيم متخزن، بنطبقه فوراً على الـ HTML
    document.documentElement.setAttribute('data-theme', currentTheme);

    // لو كان دارك، بنخلي الزرار متعلم عليه ✅ والكتابة تتغير
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeText.textContent = "Dark Mode";
    } else {
        themeText.textContent = "Light Mode";
    };
};

// 3. الفانكشن اللي بتشتغل لما اليوزر يدوس على الزرار
function switchTheme(e) {
    if (e.target.checked) {
        // لو علم على الزرار -> حول لدارك واحفظ في الـ Local Storage
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeText.textContent = "Dark Mode";
    } else {
        // لو شال العلامة -> حول للايت واحفظ في الـ Local Storage
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeText.textContent = "Light Mode";
    };
};

// 4. ربط الفانكشن بالزرار عن طريق حدث الـ 'change' (أفضل من click مع الـ Checkbox)
toggleSwitch.addEventListener('change', switchTheme, false);




// #############################################################================================= CARD 1 ===========================########################################
const btnAdvice = document.getElementById('btn-advice');
const quoteText = document.getElementById('quote-text');
const inputAdvice = document.getElementById('input-advice');
const btnAgain = document.getElementById('btn-again');
const advices =[
    'العمل الجماعي يضمن النجاح دائما',
    "التواصل الواضح يوفر نصف الوقت",
    "طلب المساعده ذكاء وليس ضعفا ",
    "تقبل النقد لتتطور بشكل اسرع ",
    "رتب اولوياتك ,لا تكدس مهامك ",
   " اكتب كوداً نظيفاً يسهل على غيرك قراءته",
    "التجربة العملية أفضل بمليون مرة من الحفظ",      
    "الأخطاء (Bugs) هي طريقك لتصبح مبرمجاً محترفاً",  
    "تعلم الأساسيات بقوة قبل الدخول في الفريم وركس", 
    "جوجل هو صديق المبرمج المقرب، تعلم كيف تبحث فيه", 
    "المبرمج الشاطر هو من يبسط الحلول لا من يعقدها",   
    "لا تقارن بدايتك بمواسم حصاد الآخرين",    
    "تعلم الـ Git والـ GitHub في بداية طريقك لأهميتهما", 
    "خذ قسطاً من الراحة عندما يقف الكود معك",  
    "صمم للموبايل أولاً قبل الشاشات الكبيرة دائماً",     
    "الاستمرارية اليومية البسيطة تهزم الحماس المنقطع", 
    "افهم المشكلة جيداً قبل البدء في كتابة أي سطر كود", 
    "نظم ملفات مشروعك واجعلها مرتبة ومنطقية",      
    "طور مهاراتك في حل المشكلات (Problem Solving)", 
   " استمتع برحلة التعلم، فالبرمجة مجال ممتع ومتجدد",
];

btnAdvice.addEventListener('click', function(){
    let userNumber = Number(inputAdvice.value);
    if(!inputAdvice.value || userNumber < 1 || userNumber > 20 ){
     quoteText.style.display ='block';
     quoteText.textContent= 'دخل رقم ';
     quoteText.style.color ='orange';   
     btnAdvice.style.display ='none';
     btnAgain.style.display ='block';
     inputAdvice.style.display ='none';
    return;
    };

let adviceIndex = userNumber -1;
quoteText.style.display ='block';
quoteText.textContent =advices[adviceIndex];
quoteText.style.color ='green';
btnAgain.style.display ='block';
btnAdvice.style.display ='none';
inputAdvice.style.display ='none';
});
btnAgain.addEventListener('click',function(){
    quoteText.style.display ='none';
    btnAgain.style.display ='none';
    btnAdvice.style.display ='block';
    inputAdvice.style.display ='block';
    inputAdvice.value='';
    inputAdvice.focus();
});



const btnSubmit = document.getElementById('btn-submit');
const inputGuess = document.getElementById('input-guess');
const msgGuess = document.getElementById('msg-guess');
const btnReset = document.getElementById('btn-reset');



// ###############################============================== CARD 2 ================================================#####################################

let randomNumber = Math.floor(Math.random() *100) + 1;

btnSubmit.addEventListener('click', function(){
   let userGuess = Number(inputGuess.value);
    // التشييك
    if(!inputGuess.value){
       msgGuess.textContent="دخل رقم ";
       msgGuess.style.color="orange";
       return;
    };

    if(userGuess === randomNumber){
       msgGuess.textContent="مبروك انت كسبت ";
       msgGuess.style.color="green";
       msgGuess.style.display ='block';
       btnSubmit.style.display = "none";
       btnReset.style.display = "block";

    }else if  (userGuess > randomNumber) {
        msgGuess.textContent ="جرب رقم اصغر ";
        msgGuess.style.color="red";
        msgGuess.style.display ='block';
        btnSubmit.style.display = "none";
        btnReset.style.display = "block";
    }else  {
        msgGuess.textContent ="جرب رقم اكبر ";
        msgGuess.style.color="red";
        msgGuess.style.display ='block';
        btnSubmit.style.display = "none";
        btnReset.style.display = "block";
    };
    inputGuess.style.display="none"; 
    inputGuess.value='';
});

btnReset.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    msgGuess.textContent = ""; 
    btnSubmit.style.display = "block"; 
    btnReset.style.display = "none"; 
    inputGuess.style.display="block";
    msgGuess.style.display ='none';
    inputGuess.focus();

});