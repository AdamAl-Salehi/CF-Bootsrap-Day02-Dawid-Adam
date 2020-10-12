var actors = JSON.parse(actor1);

for (let i = 0; i < 7; i++) {
    $("#list").append(`<p id="actor${i + 1}"  class="actors" index="${i}">Actor ${i + 1}</p>`)
}
$(".actors").on("click", function () {
    var index = $(this).attr("index");
    $("#result").html(` `);
    $("#result").append(`
    <h3 class="col-12 d-flex justify-content-center">${actors[index].actor}</h3>
    <img src="${actors[index].img}" class=" d-flex img-fluid">
    <p class="col-12 d-flex justify-content-center">${actors[index].name}</p>
    <p class="col-12 d-flex justify-content-center">${actors[index].age}</p>
    `)
})