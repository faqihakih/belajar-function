var dataBarang = [
    "Buku",
    "pulpen",
    "Udin"
]

var tampilData = () => {
    var listBarang = document.getElementById("list-barang");

    listBarang.innerHTML = "";

    //cetak semua barang
    for (var i = 0; i < dataBarang.length; i++) {
        var BtnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
        var BtnHapus = "<a href='#' onclick='hapusBarang(" + i + ")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + "[" + BtnEdit + "|" + BtnHapus + "]" + "</li>";
    }
}

var tambahBarang = () => {
    var tambah = document.querySelector("input[name=barang]");
    dataBarang.push(tambah.value);
    tampilData();
}

var editBarang = (id) => {
    var newNamabarang = prompt("nama baru " + dataBarang[id]);
    dataBarang[id] = newNamabarang;
    tampilData();
}

var hapusBarang = (id) => {
    dataBarang.splice(id, 1);
    tampilData();
}

tampilData();