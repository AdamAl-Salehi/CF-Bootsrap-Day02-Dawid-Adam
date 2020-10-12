var actors = JSON.parse(actor1);

console.table(actors)

$("#actor1").on("click", function(){
    $("#result").html(` `);
    $("#result").append(`
    <h3 class="col-12 d-flex justify-content-center">${actors[0].actor}</h3>
    <img src="" class="col-12 d-flex justify-content-center">
    <p class="col-12 d-flex justify-content-center">${actors[0].name}</p>
    <p class="col-12 d-flex justify-content-center">${actors[0].age}</p>
    `)
})
$("#actor2").on("click", function(){
    $("#result").html(` `);
    $("#result").append(`
    <h3 class="col-12 d-flex justify-content-center">${actors[1].actor}</h3>
    <img src="" class="col-12 d-flex justify-content-center">
    <p class="col-12 d-flex justify-content-center">${actors[1].name}</p>
    <p class="col-12 d-flex justify-content-center">${actors[1].age}</p>
    `)
})
