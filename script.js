/* ==========================================
   TOMBOL "ENGGAK MAU"
========================================== */

function kaburButton() {

  const btnLari =
    document.getElementById("btnLari");

  if (!btnLari) return;


  // Posisi random
  const x =
    Math.floor(Math.random() * 240) - 120;

  const y =
    Math.floor(Math.random() * 180) - 90;


  btnLari.style.transform =
    `translate(${x}px, ${y}px)`;

}


/* ==========================================
   MULAI PESAN
========================================== */

function mulaiPesan() {

  const bgm =
    document.getElementById("bgm");


  /* ==============================
     PLAY MUSIC
  ============================== */

  if (bgm) {

    bgm.volume = 0.45;

    bgm.play().catch((error) => {

      console.log(
        "Musik belum dapat diputar:",
        error
      );

    });

  }


  /* ==============================
     POPUP 1
  ============================== */

  Swal.fire({

    title:
      "Halo Puspitaaaa! ♡",

    text:
      "Selamat bertambah usia yaaa! Ada sedikit kejutan yang aku siapkan buat kamu.",

    imageUrl:
      "foto2.jpeg",

    imageWidth:
      240,

    imageHeight:
      300,

    imageAlt:
      "Foto ulang tahun",

    customClass: {

      image:
        "sweetalert-img-fit"

    },

    confirmButtonText:
      "Lanjut ♡",

    allowOutsideClick:
      false

  }).then((result) => {


    if (!result.isConfirmed)
      return;


    /* ==============================
       POPUP 2
    ============================== */

    Swal.fire({

      title:
        "Doa Terbaik Buat Kamu ✨",

      text:
        "Semoga panjang umur, sehat selalu, dimudahkan dalam setiap langkah, dan semua hal baik yang kamu impikan perlahan menjadi nyata.",

      imageUrl:
        "foto3.jpeg",

      imageWidth:
        240,

      imageHeight:
        300,

      imageAlt:
        "Foto ulang tahun",

      customClass: {

        image:
          "sweetalert-img-fit"

      },

      confirmButtonText:
        "Masih ada lagi 🎁",

      allowOutsideClick:
        false

    }).then((result) => {


      if (!result.isConfirmed)
        return;


      /* ==============================
         POPUP 3
      ============================== */

      Swal.fire({

        title:
          "I Have Something For You 💖",

        text:
          "Jangan lupa senyum hari ini. Kamu pantas mendapatkan banyak sekali kebahagiaan.",

        imageUrl:
          "foto7.jpeg",

        imageWidth:
          240,

        imageHeight:
          300,

        imageAlt:
          "Foto ulang tahun",

        customClass: {

          image:
            "sweetalert-img-fit"

        },

        confirmButtonText:
          "Selesai 🥰",

        allowOutsideClick:
          false

      });

    });

  });

}