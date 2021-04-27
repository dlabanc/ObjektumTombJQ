//window.addEventListener("load", init);

var kepObj1 = {
    kep: "20171007_144439.jpg",
    cim: "Cím 1",
    leiras: "1. kép leírása"
};

var kepObj2 = {
    kep: "20171007_144423.jpg",
    cim: "Cím 2",
    leiras: "2. kép leírása"
};

var kepObj3 = {
    kep: "20190118_143654.jpg",
    cim: "Cím 3",
    leiras: "3. kép leírása"
};

var kepObjTomb = [kepObj1, kepObj2, kepObj3];

var id = 0;

$(function () {

    beTolt(0);
    var elem = '<div id="1" class="kepTarolo"> <img src="" alt=""/> <h2></h2> <p></p> </div>';

    for (var i = 0; i < kepObjTomb.length; i++) {
        $("article").append(elem);
    }

    var kepElemCim = $(".kepTarolo h2");
    var kepElem = $(".kepTarolo");
    var KepElemTartalom = $(".kepTarolo p");


    for (var i = 0; i < kepElemCim.length; i++) {
        
        kepElemCim.eq(i).css("color","red");

        kepElem.eq(i).mouseover(formazFel);
        
        kepElem.eq(i).mouseleave(formazLe);

        kepElem.eq(i).click(nagyKepBetolt);
    }

    var kep = $(".kepTarolo img");

    for (var i = 0; i < kep.length; i++) {
        $("article div").eq(i).attr("id",i);
        kep.eq(i).attr("src",kepObjTomb[i].kep);
        kepElemCim.eq(i).html(kepObjTomb[i].cim);
        KepElemTartalom.eq(i).html(kepObjTomb[i].leiras);
    }

    $("#balra").click(balLeptet);
    $("#jobbra").click(jobbLeptet);


});



function formazFel() {
    $(this).addClass("kepTaroloAktiv");
}

function formazLe() {
    $(this).removeClass("kepTaroloAktiv");
}

function beTolt(index) {
    $("section img").attr("src",kepObjTomb[index].kep);
    $("section h2").html(kepObjTomb[index].cim);
    $("section p").html(kepObjTomb[index].leiras);
}

function nagyKepBetolt() {
    var id = $(this).attr("id");
    beTolt(id);
}

function jobbLeptet() {
    id++;
    if (id === kepObjTomb.length) {
        id = 0;
    }
    beTolt(id);
}

function balLeptet() {
    id--;
    if (id < 0) {
        id = kepObjTomb.length - 1;
    }
    beTolt(id);
}



