const details=[
    {
        title:"why learn javascript",
        content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum, adipisci officiis voluptatibus fugiat aut qui labore placeat sunt voluptatem porro tempore ipsum ut dolorem laborum, iure dolorum, harum minus"
    },
    {
        
        title:"importance of javascript",
        content:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum, adipisci officiis voluptatibus fugiat aut qui labore placeat sunt voluptatem porro tempore ipsum ut dolorem laborum, iure dolorum, harum minus"
    },
    {
        
        title:"frameworks of javascript",
        content:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum, adipisci officiis voluptatibus fugiat aut qui labore placeat sunt voluptatem porro tempore ipsum ut dolorem laborum, iure dolorum, harum minus"
    },
    {
        
        title:"uses of javascript",
        content:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum, adipisci officiis voluptatibus fugiat aut qui labore placeat sunt voluptatem porro tempore ipsum ut dolorem laborum, iure dolorum, harum minus"
    }
        
       
];
function creation (data){
    return` <details>
        <summary>${data.title}</summary>
        <p>${data.content}</p>
    </details>`
};
let component= details.map(creation).join("");
document.getElementById("cont").innerHTML=component;