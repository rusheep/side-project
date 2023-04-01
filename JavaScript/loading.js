window.addEventListener("load", function(){

    this.setTimeout(function(){
        const fool = document.querySelector(".para");
        fool.textContent = "大家辛苦ㄌ 愚人節快樂(*°ω°*ฅ)*";     
    },10000)
    setTimeout(function(){
        document.getElementsByClassName("loading_block")[0].remove();
    }, 800000000);
});
