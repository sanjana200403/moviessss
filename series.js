
const imgPath ="https://image.tmdb.org/t/p/original"

 function buildMovieSection(series){
    let ser = document.getElementById("sections")
    series.map((item)=>{

        
ser.innerHTML +=`
<div id="main">
        
        <div class="movie">
               <img src=${imgPath}${item.backdrop_path} alt="">
   
               <div class="movie-info">
                   <h2>${item.name}</h2>
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
const series = async()=>{
    const fetchurl = `https://api.themoviedb.org/3/discover/tv?api_key=c54261795aebcc7205dc57aef68d81ae
    `
    fetch(fetchurl).then(res=>res.json()).then(data=>{
        
        
        const movie = data.results

        if(Array.isArray(movie)&&movie.length){
            buildMovieSection(movie)
        }

    }).catch(err=>console.log(err))
   
    
}



window.addEventListener('load', function(){
    series()
})