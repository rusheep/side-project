var myObject = [ {id:'01', type:'人物' },
    {id:'02', type:'場景' },
    {id:'03', type:'場景' },
    {id:'04', type:'立繪' },
    {id:'05', type:'人物' },
    {id:'06', type:'人物' },
    {id:'07', type:'人物' },
    {id:'08', type:'頭貼' },
    {id:'09', type:'人物' },
    {id:'10', type:'場景' },
    {id:'11', type:'人物' },
    {id:'12', type:'人物' },
    {id:'13', type:'人物' },
    {id:'14', type:'頭貼' },
    {id:'15', type:'人物' },
    {id:'16', type:'人物' },
    {id:'17', type:'頭貼' },
    {id:'18', type:'場景' },
    {id:'19', type:'人物' },
    {id:'20', type:'人物' },
    {id:'21', type:'人物' },
    {id:'22', type:'人物' },
    {id:'23', type:'人物' },
    {id:'24', type:'立繪' },
    {id:'25', type:'頭貼' },
    {id:'26', type:'立繪' },
];

// console.log(myObject[0].id);


document.addEventListener('DOMContentLoaded', function(){

    for (let i = 0; i < myObject.length; i++) {
        const imageId = `image-${myObject[i].id}`;
        const imageUrl = `project${myObject[i].id}.jpg`;
        let pj_content_el = document.querySelector(".pj-content");
        console.log(pj_content_el);
        let pic_str =
        `<div class="pj-item">
            <img id="image-1${imageId}" src="../img/project_img/${imageUrl}" alt="">
        </div>`
        // console.log(imageId);
        // console.log(imageUrl);
        pj_content_el.insertAdjacentHTML("beforeend", pic_str);
        // console.log(pic_str);
        
    }
    
    // console.log (myObject);
});