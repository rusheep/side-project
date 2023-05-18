

let myObject = [{ id: '01', type: '人物', date: '2022/02/02' },
{ id: '02', type: '場景', date: '2021/02/03' },
{ id: '03', type: '場景', date: '2021/03/01' },
{ id: '04', type: '立繪', date: '2021/04/12' },
{ id: '05', type: '人物', date: '2021/04/22' },
{ id: '06', type: '人物', date: '2021/12/25' },
{ id: '07', type: '人物', date: '2022/12/09' },
{ id: '08', type: '頭貼', date: '2022/12/09' },
{ id: '09', type: '人物', date: '2022/12/09' },
{ id: '10', type: '場景', date: '2022/12/10' },
{ id: '11', type: '人物', date: '2022/12/25' },
{ id: '12', type: '人物', date: '2022/02/02' },
{ id: '13', type: '人物', date: '2022/02/02' },
{ id: '14', type: '頭貼', date: '2022/02/02' },
{ id: '15', type: '人物', date: '2022/02/02' },
{ id: '16', type: '人物', date: '2022/02/02' },
{ id: '17', type: '頭貼', date: '2023/01/03' },
{ id: '18', type: '場景', date: '2023/01/09' },
{ id: '19', type: '人物', date: '2023/01/12' },
{ id: '20', type: '人物', date: '2023/01/31' },
{ id: '21', type: '立繪', date: '2023/02/07' },
{ id: '22', type: '立繪', date: '2023/02/16' },
{ id: '23', type: '人物', date: '2023/03/14' },
{ id: '24', type: '立繪', date: '2022/02/22' },
{ id: '25', type: '頭貼', date: '2023/03/01' },
{ id: '26', type: '立繪', date: '2021/08/25' },
{ id: '27', type: '場景', date: '2023/01/03' },
{ id: '28', type: '頭貼', date: '2023/02/02' },
{ id: '29', type: '頭貼', date: '2023/01/11' },
{ id: '30', type: '頭貼', date: '2020/08/07' },
{ id: '31', type: '頭貼', date: '2023/02/02' },
{ id: '32', type: '人物', date: '2020/10/30' },
{ id: '33', type: '頭貼', date: '2020/11/07' },

];

// console.log(myObject[0].id);




document.addEventListener('DOMContentLoaded', displayImg);
let pj_content_el = document.querySelector(".pj-content");


function displayImg() {
    //output

    pj_content_el.innerHTML = '';

    myObject.forEach((item, i) => {
        const imageId = `image-${myObject[i].id}`;
        const imageUrl = `project${myObject[i].id}.jpg`;
        const imgDate = myObject[i].date;

        let pic_str =
            `<div class="pj-item">
                <a href = "../img/project_img/${imageUrl}" class="lightbox" date-id="${imgDate}" >
                    <img id="image-1${imageId}" src="../img/project_img/${imageUrl}" alt="">
                </a>
            </div>`

        // console.log(pic_str);
        pj_content_el.insertAdjacentHTML("beforeend", pic_str);
    })

    $(".lightbox").off("click").on("click", function (e) {
        e.preventDefault();
        let img_url = $(this).attr("href");
        let img_date = $(this).attr('date-id');
        // console.log(img_url);
        $(".lightbox-image").attr("src", img_url);
        $('.lightbox-intro p').text('Date:' + img_date);
        $(".lightbox-overlay").fadeIn(500);
    });
};



function btn_filter(btn, img_type) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        console.log(img_type);
        const all_btn = document.querySelectorAll(".btn");
        all_btn.forEach((item, i) => {
            // console.log(all_btn[i]);
            all_btn[i].classList.remove("-on");
        })

        // console.log(this);
        this.classList.add("-on");

        if (img_type == '全部') {
            displayImg();
        } else {

            pj_content_el.innerHTML = '';
            const peopleArr = myObject.filter(item => item.type == img_type);

            peopleArr.forEach((item, i) => {
                // console.log(item);
                const imgDate = myObject[i].date;
                let pic_str =
                    `<div class="pj-item">
                            <a href ="../img/project_img/project${item.id}.jpg" class="lightbox" date-id="${imgDate}">
                                <img id="image-${item.id}" src="../img/project_img/project${item.id}.jpg" alt="">
                            </a>
                        </div>`

                pj_content_el.insertAdjacentHTML("beforeend", pic_str);
            })

            $(".lightbox").off("click").on("click", function (e) {
                e.preventDefault();
                let img_url = $(this).attr("href");
                let img_date = $(this).attr('date-id');
                // console.log(this);
                // console.log(img_url);
                $(".lightbox-image").attr("src", img_url);
                $('.lightbox-intro p').text('Date:' + img_date);
                $(".lightbox-overlay").fadeIn(500);
            });

        }
    });
};

const btn0 = document.querySelector('.btn0');
btn_filter(btn0, "全部");

const btn1 = document.querySelector('.btn1');
btn_filter(btn1, "人物");

const btn2 = document.querySelector('.btn2');
btn_filter(btn2, "場景");


const btn3 = document.querySelector('.btn3');
btn_filter(btn3, "立繪");


const btn4 = document.querySelector('.btn4');
btn_filter(btn4, "頭貼");


// ========================================================

$(window).on("load", function () {
    $(".lightbox").click(function (e) {
        e.preventDefault();
        let img_url = $(this).attr("href");
        let img_date = $(this).attr('date-id');
        console.log(img_date);
        // console.log(img_url);

        $(".lightbox-image").attr("src", img_url);
        $('.lightbox-intro p').text('Date:' + img_date);
        $(".lightbox-overlay").fadeIn(500);
    })

    $(".lightbox-close").click(function () {
        $(".lightbox-overlay").fadeOut();
    })
});