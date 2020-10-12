var actors = JSON.parse(actor1);

for (let i = 0; i < 7; i++) {
    $("#list").append(`<a href="#"><p id="actor${i + 1}"  class="actors mb-md-4 mb-0" index="${i}">Actor ${i + 1}</p></a>`);
    $(".dropdown-menu").append(`<a href="#"><p id="actor${i + 1}"  class="actors dropdown-item" index="${i}">Actor ${i + 1}</p></a>`)
    
}
$(".actors").on("click", function () {
    var index = $(this).attr("index");
    $("#result").html(` `);
    $("#result").append(`
    <h3 class="col-12 d-flex justify-content-center mt-3 mb-4">${actors[index].actor}</h3>
    <img src="${actors[index].img}" class=" d-flex img-fluid rounded">
    <p class="col-12 d-flex justify-content-center">${actors[index].name}</p>
    <p class="col-12 d-flex justify-content-center">${actors[index].age}</p>
    `)
})