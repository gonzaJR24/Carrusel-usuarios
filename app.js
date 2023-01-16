const profiles=[
    {
        id:1,

        name:"Lalo Rodriguez",

        imagen:"https://mars.nasa.gov/people/images/profile/2x2/mwsmith-23258-profile-hi_20BFFA1F-F1AD-414F-8550C9E61A6CB3B6.jpg",

        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae consectetur impedit maiores illo accusantium, quos eaque iure veritatis nesciunt unde neque facere iste pariatur quam sint dicta quibusdam.",

        position:"Database Administrator"
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    {
        id:2,

        name:"Marta Lopez",

        imagen:"http://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg",

        description: "Laboriosam voluptas sequi id illum, facere a ab nemo incidunt omnis sunt, rerum qui consectetur, laborum expedita ullam? SedExpedita ullam adipisci aut incidunt architecto dolore tenetur sed est.",
        
        position:"UX Designer"
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    {
        id:3,

        name:"Andrea Araujo",

        imagen:"https://pbs.twimg.com/profile_images/1028009214025904128/-fgVlQ4F_400x400.jpg",

        description:"Expedita ullam adipisci aut incidunt architecto dolore tenetur sed est, a saepe quam unde ipsum nam assumenda consequatur alias.Itaque tenetur ipsum sit et exercitationem, voluptatum magnam esse molestias deserunt",

        position:"Fullstack Developer",
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        id:4,

        name:"Ignacio Germosen",

        imagen:"https://static1.squarespace.com/static/598e577b4c0dbfafe1e27be1/t/6285247e9675673403c21ed2/1652892798221/doctor-headshots.jpg",

        description:"Itaque tenetur ipsum sit et exercitationem, voluptatum magnam esse molestias deserunt animi dolor suscipit pariatur repellat officiis commodi placeat, quibusdam quasi voluptate vero provident neque dolore.",

        position:"Devops"
    }

] 

//Select elements

let names=document.querySelector(".name")
let img=document.querySelector("img")
let position=document.querySelector(".position")
let descripton=document.querySelector(".description")


//declaring buttons

const right=document.getElementById("next")
const left=document.getElementById("prev")
const random=document.getElementById("surprise")

let index=0
right.addEventListener("click",()=>{
   if(index+1<profiles.length){
    index+=1
    names.textContent=profiles[index].name
    img.src=profiles[index].imagen
    descripton.textContent=profiles[index].description
    position.textContent=profiles[index].position
}
    if(index+1==profiles.length){
        index=-1
    }

})

left.addEventListener("click",()=>{
    if(index>0){
     index-=1
     names.textContent=profiles[index].name
     img.src=profiles[index].imagen
     descripton.textContent=profiles[index].description
     position.textContent=profiles[index].position
 }
 })

 random.addEventListener("click",()=>{
     index=Math.floor(Math.random()*profiles.length)
     names.textContent=profiles[index].name
     img.textContent=profiles[index].imagen
     descripton.textContent=profiles[index].description
     position.textContent=profiles[index].position

 })
