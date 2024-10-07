// $(".fa-bars").on("click",function(){
//     $(this).addClass("d-none");
//     $(".fa-xmark").removeClass("d-none");
//     // $(this).animate({ left: "250px" }, 1000);
//     $("aside").addClass("postion-abs");
//     $("aside").animate({left:"250px"},1000);
// $(".menuList").removeClass("d-none") ;
// // $(".menuList li").animate({scrollUp:"slow"},1000);
// // $(".menuList li").addClass("postion-abs");
// $(".menuList").animate({left:"0px"},1000);
// // $(".menuList li").fadeIn(2000);
// // $(".menuList li").slideUp(2000);
// // $(".menuList").addClass(show);
// // $(".menuListLi").animate({
// //     top:"20px"
// // },200)
// // $(".menuListLi").slideDown(2000,function(){
// //     $(".menuList li").animate({height:"50px"},1000);
// // });

// });

// $(".fa-xmark").on("click",function(){
//     // let asideWidth = $(".aside").outerWidth();
//     // let negativeAsideWidth= -asideWidth;
//     $(".menuList").animate({left:"-250px"},1000);
//     $(this).parent().addClass("postion-abs");
//     $("aside").animate({left:"0px"},1000);
// })

// $(".fa-arrow-up").on("click",function(){
//     $("html").animate({scrollTop:0},2000);
// })

// /* Contact Section */

// let nameInput= document.querySelector(".nameInput");
// let telInput = document.querySelector(".telInput");
// let passInput = document.querySelector(".passInput");
// let emailInput = document.querySelector(".emailInput");
// let ageInput = document.querySelector(".ageInput");
// let repassInput = document.querySelector(".repassInput");


// let nameRegex= /^[a-z0-9_-]{3,15}$/ ;
// let telRegex =  / ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/  ;
// let passRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/   ;
// let emailRegex =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/  ;
// let ageRegex =   /^(1[89]|[2-9]\d)$/ ;
// let repassRegex=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/  ;
// let submitBtn = document.querySelector(".btn");

// // let movieList=[];
// // let user;

// function addUser(){
//     if(validate(nameInput,nameRegex)&&
//        validate(telInput,telRegex)&&
//        validate(passInput,passRegex)&&
//        validate(emailInput,emailRegex)&&
//     validate(ageInput,ageRegex)&&
//     validate(repassInput,repassRegex)){
       
//         user={
//             username:nameInput.value,
//             telephone:telInput.value,
//             password:passInput.value,
//             email:emailInput.value,
//             age:ageInput.value,
//             repassword:repassInput.value
//         }

//         movieList.push(user);
//         localStorage.setItem("movieList",JSON.stringify(movieList));
//         location.assign("../home.html");

//     }
// }






// //search by char  --- name




// function validate(element,regex){
//  if(regex.test(element.value)){
//     element.addClass("is-valid");
//     element.removeClass("is-invalid");
//     element.nextElementSibling().removeClass("d-none");
// //     return true
// //  }else{
// //     return false
// //  }
// }
// }



// function clearForm(){
//     nameInput.value="";
//     telInput.value="";
//     passInput.value="";
//     emailInput.value="";
//     ageInput.value="";
//     repassInput.value="";
// }







// submitBtn.on("click",addUser);

// let moviesName=[];
// let productsContainer=document.querySelector(".products-container");
// let  searchInput= document.querySelector(".searchInput");
// if(searchInput.value)


//     function searchProduct(){
//        productsContainer.innerHTML="";
//        var term=searchInput.value;
//        for(var i=0;i<moviesName.length;i++){
//         if(moviesName[i].name.toLowerCase().includes(term.toLowerCase())){
//             displayMovie();
//         }
//        }
//     }






// /*******************************API********************************/
// jQuery(function(){
// let nowPlaying= document.querySelector(".nowPlaying");
// let popular= document.querySelector(".popular");
// let topRated = document.querySelector(".topRated")
// let trending = document.querySelector(".trending");
// let upComung = document.querySelector(".upComung");
// let contactUS = document.querySelector(".contactUS");

// async function getNowPlaying(){
//     let response= await fetch(`https://api.themoviedb.org/3/movie/${nowPlaying}?language=en-US&page=1`);
//     let data = await response.json();
//     displayMovie(data);
//     console.log(data);

// }


// function displayMovie(arr){
// productsContainer.innerHTML="";
// for(let i=0;i<i<arr.length;i++){
//     productsContainer.innerHTML+=`
//     <article class="col-md-4 text-white">
//     <img src="${backdrop_path}" alt="backdrop_path">
//     <div class="overlay">
//         <h2>${title}</h2>
//         <p>${overview}</p>
//         <div class="date">"Release Date:"${release_date}</div>
//         <div class="rating">${vote_average}</div>
//         <div class="score">${vote_count}</div>
//     </div>

// </article>

//     `
// }

// }









$(".loading").fadeOut(2000,function(){

    $(".fa-bars").on("click",function(){
        $(this).addClass("d-none");
        $(".fa-xmark").removeClass("d-none");
        // $(this).animate({ left: "250px" }, 1000);
        $("aside").addClass("postion-abs");
        $("aside").animate({left:"240px"},1000);
        $(".menuList").removeClass("d-none") ; 
        $(".menuList").animate({left:"0px"},1000);


    // $(".menuList").animate({removeClass:d-none},1000);
    // $(".menuList li").animate({scrollUp:"slow"},1000);
    // $(".menuList li").addClass("postion-abs");
  
    // $(".menuList li").fadeIn(2000);
    // $(".menuList li").slideUp(2000);
    // $(".menuList").addClass(show);
    // $(".menuListLi").animate({
    //     top:"20px"
    // },200)
    // $(".menuListLi").slideDown(2000,function(){
    //     $(".menuList li").animate({height:"50px"},1000);
    // });

    
    });
    
    $(".fa-xmark").on("click",function(){


        // let asideWidth = $(".aside").outerWidth();
        // let negativeAsideWidth= -asideWidth;


        $(".menuList").animate({left:"-250px"},1000);
        $(this).addClass("d-none");
        $(".fa-bars").removeClass("d-none")
        $(this).parent().addClass("postion-abs");
        $("aside").animate({left:"0px"},1000);

    })

    //scroll to top
    
    $(".fa-arrow-up").on("click",function(){
        $("html").animate({scrollTop:0},2000);
    })
    
    /* Contact Section */
    
    let nameInput= document.querySelector(".nameInput");
    let telInput = document.querySelector(".telInput");
    let passInput = document.querySelector(".passInput");
    let emailInput = document.querySelector(".emailInput");
    let ageInput = document.querySelector(".ageInput");
    let repassInput = document.querySelector(".repassInput");
  
    
    
    let nameRegex= /^[A-Z][a-z0-9_-]{3,15}$/ ;
    let telRegex =  / ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/  ;
    let passRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/   ;
    let emailRegex =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/  ;
    let ageRegex =   /^(1[89]|[2-9]\d)$/ ;
    let repassRegex=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/  ;
    let submitBtn = document.querySelector(".btn");
    
    // let movieList=[];
    // let user;
    // let userList = localStorage.getItem("movieList")||[];
    function addUser(){
        if(validate(nameInput,nameRegex)&&
           validate(telInput,telRegex)&&
           validate(passInput,passRegex)&&
           validate(emailInput,emailRegex)&&
        validate(ageInput,ageRegex)&&
        validate(repassInput,repassRegex)){
            submitBtn.removeClass("disabled");
            //  location.assign("../home.html");

        }else{
            prompt("please enter valid data!");
        }


            // user={
            //     username:nameInput.value,
            //     telephone:telInput.value,
            //     password:passInput.value,
            //     email:emailInput.value,
            //     age:ageInput.value,
            //     repassword:repassInput.value
            // }
    
            // userList.push(user);
            // localStorage.setItem("userList",JSON.stringify(userList));

    }
    
    
    //search by char  --- name
    


    
    
    function validate(element,regex){
     if(regex.test(element.value)){
        element.addClass("is-valid");
        element.removeClass("is-invalid");
        element.sibling().removeClass("d-none");
        return true;
   
    }else{
        element.addClass("is-invalid");
        element.removeClass("is-valid");
        element.nextElementSibling().addClass("d-none");
        return false;
    }
    }
    
    function testPassword(){
    if(passInput.value !== repassInput.value){
        $(".repassInput").nextElementSibling().removeClass("d-none");
      }
    }


$(".repassInput").on("input",testPassword);

    
    function clearForm(){
        nameInput.value="";
        telInput.value="";
        passInput.value="";
        emailInput.value="";
        ageInput.value="";
        repassInput.value="";
    }
    
    
    
    
    
    
    
    submitBtn.addEventListener("click",addUser);
    submitBtn.addEventListener("click",clearForm);
    
    let moviesName=[];
    let productsContainer=document.querySelector(".products-container");
    let  searchInput= document.querySelector(".searchInput");


    // $("input").on("input",function(){ 
    //  $(this).siblings().removeClass("d-none");

    //   if(validate(nameInput.value,nameRegex)){
    //     $(this).siblings().addClass("d-none");
    //   }else if(validate(emailInput.value,emailRegex)){
    //       $(this).siblings().addClass("d-none");
    //   }




    
 
        
    });
    
    
    //     function searchProduct(){
    //        productsContainer.innerHTML="";
    //        var term=searchInput.value;
    //        for(var i=0;i<moviesName.length;i++){
    //         if(moviesName[i].name.toLowerCase().includes(term.toLowerCase())){
    //             displayMovie();
    //         }
    //        }
    //     }
    
    // searchInput.on("input",searchProduct);
    
    
    
    
    /*******************************API********************************/
    jQuery(function(){

        let productsContainer=document.querySelector(".products-container");

let movieCategoery= document.querySelector(".links li a").getAttribute("data-type");
console.log(movieCategoery);
$(".links li a").on("click",function(e){
 e.preventDefault();
})

// let category =$(".links li a").on("click",function(){
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");
//     for(let i=0;i<movieCategoery.length;i++){
//         if(movieCategoery[i]==($(".links li a.active").getAttribute("data-type"))){
//            return movieCategoery[i];
//         }
        
//     }
// })

    let nowPlaying= document.querySelector(".nowPlaying");
    let popular= document.querySelector(".popular");
    let topRated = document.querySelector(".topRated")
    let trending = document.querySelector(".trending");
    let upComung = document.querySelector(".upComung");
    let data;
    
    async function getTrending(){
 let response= await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        data = await response.json();
        displayMovie(data.results);
        console.log(data);
    
    }



    getTrending();


    async function getTopRared(){
        let response= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
               // let response= await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
               let data = await response.json();
               displayMovie(data.results);
               console.log(data);
           
           }



           async function getNowPlaying(){
            let response= await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
                   let data = await response.json();
                   displayMovie(data.results);
                   console.log(data);
               
               }

               async function getPopular(){
                let response= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
                       let data = await response.json();
                       displayMovie(data.results);
                       console.log(data);
                   
                   }




                   async function getUpcoming(){
                    let response= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
                           let data = await response.json();
                           displayMovie(data.results);
                           console.log(data);
                       
                       }



    
    function displayMovie(results){
        productsContainer.innerHTML="";
        for(let i=0;i<results.length;i++){
            productsContainer.innerHTML+=`
        <article class="col-sm-12 col-md-6 col-lg-4 text-white article  position-relative">
        <img src="https://image.tmdb.org/t/p/w185${results[i].poster_path
        }" class="w-100" alt="backdrop_path">
        <div class="overlay position-absolute">
            <h2 class="text-white text-center m-2">${results[i].original_title}</h2>
            <p class="text-white">${results[i].overview}</p>
            <div class="date text-white mb-2">"Release Date:+ ${results[i].release_date}"</div>
            <div class="rating text-white d-flex justify-content-center align-items-center">${results[i].vote_average}</div>
            <div class="score text-white">${results[i].vote_count}</div>
        </div>
    
    </article>
    
        `;
       
    }


nowPlaying.addEventListener("click",getNowPlaying);
trending.addEventListener("click",getTrending);
popular.addEventListener("click",getPopular);
topRated.addEventListener("click",getTopRared);
upComung.addEventListener("click",getUpcoming);
    
    }
    let searchInput= document.querySelector(".searchInput");

//    let moviesList=JSON.parse(localStorage.setItem("moviesList",JSON.stringify(results)))||[];
//    console.log(results);
var term;
         function searchProduct(){
        //    productsContainer.innerHTML="";
           term=$(".searchInput").val();
         
           for(var i=0;i<data.results.length;i++){
            if(data.results[i].title.toLowerCase().includes(term.toLowerCase())){
                displayMovie();
            }
           }
        }
      console.log(term);
   
     $(".searchInput").on("input",searchProduct);


    let footerHeight= $(".footer").outerHeight();
let wholeHeight=$("html").outerHeight();
// console.log(wholeHeight);
let difference=wholeHeight-footerHeight;

    $(".contactUS").on("click",function(){
        $("html").animate({scroll:`${difference}`},2000);
       
        // $("html").slideDown((`${difference}`));
    })



    $("body").css({overflow:"auto"});
});





