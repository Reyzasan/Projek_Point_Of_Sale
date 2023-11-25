document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>')

function print() {
    var contentDiv = document.getElementById('content');
    var contentToPrint = contentDiv.innerHTML;
    var newWindow = window.open('', '_blank');
    newWindow.document.open();
    newWindow.document.write(  contentToPrint  );
    newWindow.document.close();
    newWindow.print();
  }
  var cart = [];
  function tambahpesanan(name, count, price) {
      //mendapatkan array saat ini
      var existingItem = cart.find(element => element.name === name);
      //memeriksa array sudah ada atau belum
      if (!existingItem) {
          cart.push({ name: name, count: count, price: price });
      } else {
          existingItem.count++;
      }
      showCartList();
  }



  function showCartList() {
      $(".listorder").empty();
      totalHarga = 0 ;
      cart.forEach(function (item, index) {
          $(".listorder").append(`  <div class="card" style="display: flex;">

        <div class="col-12">
        <div class="row" style="margin-left: 5px;">
            <div class="bungkus" style="margin-top: 8px; display: flex; justify-content: space-between;">
                <p style="font-size: 16px; margin: 0; font-weight: 900 ; width: 120px">`+ item.name + `</p>
                <div class="col-2">
                    <i class='bx bx-trash' style="cursor: pointer; font-size: 50px; text-align: right;" onclick="Hapus(`+ index + `)"></i>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 25px; margin-left: 1px">
            <div class="bungkus1" style="display: flex; margin-top: -7%; margin-left: 8px;">
                <p style="font-size: 14px;">Unit Price :</p>
                <h6 style="margin-left: 15px; font-size: 16px;">Rp. `+ item.price.toLocaleString('id-ID') + `</h6>

                <p style="margin-left: 15px; font-size: 14px;">Quantity :</p>
                <h6 style="margin-left: 10%;">`+ item.count + `</h6>
            </div>
        </div>
        </div>
        </div>`);
      })
      console.log(cart)
      var tot = 0;
      var pjkpersentase = 0.1;
      var totalpajak = 0;
      for(var i = 0; i < cart.length; i++) {
          tot = tot + (cart[i].count * cart[i].price)
      }
      var Pajak = tot * pjkpersentase;
      totalpajak += Pajak;
      var total = Pajak + tot;

      $("#tot").text("Rp. " + tot.toLocaleString('id-ID'))
      $("#pajak").text("Rp. " + Pajak.toLocaleString('id-ID'))
      $("#total").text("Rp. " + total.toLocaleString('id-ID'))
  }
  function Hapus(index) {
      let text;
      if (confirm (cart.splice(index, 1) && "Apakah Anda Yakin Untuk menghapus pesanan?")) {
          showCartList();
      } 

  }