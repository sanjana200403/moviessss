console.log("hello")
const imgPath ="https://image.tmdb.org/t/p/original"

 function buildMovieSection(series){
    
    
    let ser = document.getElementById("sections")
    ser.innerHTML =""
    series.map((item)=>{
// console.log(item)
// console.log(ser)
ser.innerHTML +=`
<div id="main">
        
        <div class="movie">
               <img src=${imgPath}${item.backdrop_path} alt="">
   
               <div class="movie-info">
                   <h2>${item.title
                   }</h2>
                   <span class="green">
                       ${item.vote_average}
                   </span>
               </div>
               <div class="overview">
                   <h3>Overview</h3>
                  
                   ${item.overview
                   }
               </div>
           </div>
       </div>
        `
    



    })

 }
const series = async(users)=>{
    
    
    const fetchurl = `https://api.themoviedb.org/3/search/movie?api_key=c54261795aebcc7205dc57aef68d81ae&query=${users}
    `
    fetch(fetchurl).then(res=>res.json()).then(data=>{
        // console.log(data)
        const movie = data.results

        if(Array.isArray(movie)&&movie.length){
            buildMovieSection(movie)
        }

    }).catch(err=>console.log(err))
   
    
}

const btn = document.getElementById("inputs")

btn.addEventListener('click', function(){
    let ser = document.getElementById("sections")
    ser.innerHTML +=""
    let users = document.getElementById("user").value
    console.log(users)
    series(users)
})