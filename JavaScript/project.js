

let myObject = [{ id: '01', type: '人物' },
{ id: '02', type: '場景' },
{ id: '03', type: '場景' },
{ id: '04', type: '立繪' },
{ id: '05', type: '人物' },
{ id: '06', type: '人物' },
{ id: '07', type: '人物' },
{ id: '08', type: '頭貼' },
{ id: '09', type: '人物' },
{ id: '10', type: '場景' },
{ id: '11', type: '人物' },
{ id: '12', type: '人物' },
{ id: '13', type: '人物' },
{ id: '14', type: '頭貼' },
{ id: '15', type: '人物' },
{ id: '16', type: '人物' },
{ id: '17', type: '頭貼' },
{ id: '18', type: '場景' },
{ id: '19', type: '人物' },
{ id: '20', type: '人物' },
{ id: '21', type: '立繪' },
{ id: '22', type: '立繪' },
{ id: '23', type: '人物' },
{ id: '24', type: '立繪' },
{ id: '25', type: '頭貼' },
];

// console.log(myObject[0].id);




document.addEventListener('DOMContentLoaded', displayImg);
let pj_content_el = document.querySelector(".pj-content");


function displayImg() {
    //output

    pj_content_el.innerHTML = '';

    myObject.forEach((item,i) => {
        const imageId = `image-${myObject[i].id}`;
        const imageUrl = `project${myObject[i].id}.jpg`;

        
        let pic_str =
            `<div class="pj-item">
                <a href = "../img/project_img/${imageUrl}" class="lightbox" >
                    <img id="image-1${imageId}" src="../img/project_img/${imageUrl}" alt="">
                </a>
            </div>`
        
        console.log(pic_str);
        pj_content_el.insertAdjacentHTML("beforeend", pic_str); 
    })

    $(".lightbox").off("click").on("click", function(e) {
        e.preventDefault();
        let img_url = $(this).attr("href");
        console.log(img_url);
        $(".lightbox-image").attr("src",img_url);
        $(".lightbox-overlay").fadeIn(500);
    });
};



function btn_filter(btn,img_type) {
    btn.addEventListener('click',function(e) {
        e.preventDefault();
    
        console.log(img_type);
        const all_btn = document.querySelectorAll(".btn");
        all_btn.forEach((item,i) => {
            // console.log(all_btn[i]);
            all_btn[i].classList.remove("-on");
        })
        
        // console.log(this);
        this.classList.add("-on");
    
        if(img_type =='全部') {
            displayImg();
        }else {
            
            pj_content_el.innerHTML = '';
                const peopleArr = myObject.filter(item => item.type == img_type);
    
                peopleArr.forEach((item, i) => {
                    // console.log(item);
                    let pic_str =
                        `<div class="pj-item">
                            <a href ="../img/project_img/project${item.id}.jpg" class="lightbox">
                                <img id="image-${item.id}" src="../img/project_img/project${item.id}.jpg" alt="">
                            </a>
                        </div>`
    
                    pj_content_el.insertAdjacentHTML("beforeend", pic_str);
                })

                $(".lightbox").off("click").on("click", function(e) {
                    e.preventDefault();
                    let img_url = $(this).attr("href");
                    console.log(img_url);
                    $(".lightbox-image").attr("src",img_url);
                    $(".lightbox-overlay").fadeIn(500);
                });

        }
    });
};

const btn0 = document.querySelector('.btn0');
btn_filter(btn0,"全部");

const btn1 = document.querySelector('.btn1');
btn_filter(btn1,"人物");

const btn2 = document.querySelector('.btn2');
btn_filter(btn2,"場景");


const btn3 = document.querySelector('.btn3');
btn_filter(btn3,"立繪");


const btn4 = document.querySelector('.btn4');
btn_filter(btn4,"頭貼");


// ========================================================

$(window).on("load",function(){
    $(".lightbox").click(function(e){
        e.preventDefault();
        let img_url = $(this).attr("href");
        console.log(img_url);

        $(".lightbox-image").attr("src",img_url);
        $(".lightbox-overlay").fadeIn(500);
    })

    $(".lightbox-close").click(function(){
        $(".lightbox-overlay").fadeOut();
    })
});