function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
};

var zoo1=[
    {
        name:"Tiger",
        image:"/images/tigre.jpg",
        category:"Carnivore",
        description:"https://fr.wikipedia.org/wiki/Tigre",
    },
    {
        name:"Jaguar",
        image:"/images/jaguar.jpg",
        category:"Carnivore",
        description:"https://fr.wikipedia.org/wiki/Jaguar",
    },
    {
        name:"Eagle",
        image:"/images/eagle.jpg",
        category:"Carnivore",
        description:"https://en.wikipedia.org/wiki/Eagle",
    },
    {
        name:"Sheep",
        image:"/images/sheep.jpg",
        category:"Herbivore",
        description:"https://en.wikipedia.org/wiki/Sheep",
    },
    {
        name:"Rabbit",
        image:"/images/rabbit.jpg",
        category:"Herbivore",
        description:"https://en.wikipedia.org/wiki/Rabbit",
    },
    {
        name:"Horse",
        image:"/images/horse.jpg",
        category:"Herbivore",
        description:"https://en.wikipedia.org/wiki/Horse",
    },
    {
        name:"Bear",
        image:"/images/bear.jpg",
        category:"Omnivore",
        description:"https://en.wikipedia.org/wiki/Bear",
    },
    {
        name:"Pig",
        image:"/images/pig.jpg",
        category:"Omnivore",
        description:"https://en.wikipedia.org/wiki/Pig",
    },
    {
        name:"Ostrich",
        image:"/images/ostrich.jpg",
        category:"Omnivore",
        description:"https://en.wikipedia.org/wiki/Ostrich#:~:text=Ostriches%20are%20large%20flightless%20birds,the%20Philippines%20and%20in%20Namibia.",
    }
]

// function to display my array of object //
function display(arr) {
each(arr,function (ele) {
$(".zoo").append(`
<div class="zoo-container"> 
<div class="name">
<p>${ele.name}</p>
</div>
<div class="images">
<img src= ${ele.image}>
</div>
<button class="b1" value="${ele.description}">DESCRIPTION</button>
</div>`)  
})    
}

display(zoo1)

// function to search by category //

function search() {
    var x=document.getElementById("input1").value.toUpperCase()
    var searchingData=filter(zoo1,function (ele) {
        return ele.category.toUpperCase().includes(x)
    })
    $(".zoo").empty()
    display(searchingData)
};

// var to show the date and the time ///
var d = new Date();
document.getElementById("demo").innerHTML = d;


//function when i click on the button take me to the direct link

    $(".b1").on("click", function () {
        location.href = this.value;
    });




// function for hide and show //
$(".btn1").click(function(){
    $("h4").hide();
  });
  $(".btn2").click(function(){
    $("h4").show();
  });

  $(".btn1").click(function(){
    $(".zoo").hide();
  });
  $(".btn2").click(function(){
    $(".zoo").show();
  });
