/* ==========================================
   BUNGA BERJATUHAN
========================================== */

function bungaBeterbangan() {

  // Jenis bunga yang digunakan
  const flowers = [
    "🌸",
    "🌸",
    "🌺",
    "🌷",
    "🌹",
    "✿",
    "❀",
    "❁"
  ];


  // Jumlah bunga
  const jumlahBunga = 35;


  for (let i = 0; i < jumlahBunga; i++) {

    const flower =
      document.createElement("div");


    flower.classList.add(
      "falling-flower"
    );


    // Pilih bunga secara random
    flower.innerHTML =
      flowers[
        Math.floor(
          Math.random() * flowers.length
        )
      ];


    // Posisi horizontal random
    flower.style.left =
      Math.random() * 100 + "vw";


    // Ukuran random
    const size =
      Math.random() * 18 + 16;

    flower.style.fontSize =
      size + "px";


    // Durasi jatuh random
    const duration =
      Math.random() * 4 + 4;

    flower.style.animationDuration =
      duration + "s";


    // Delay random
    flower.style.animationDelay =
      Math.random() * 1.5 + "s";


    // Rotasi awal random
    flower.style.transform =
      `rotate(${Math.random() * 360}deg)`;


    // Tambahkan ke halaman
    document.body.appendChild(
      flower
    );


    // Hapus setelah animasi selesai
    setTimeout(() => {

      flower.remove();

    }, (duration + 2) * 1000);

  }

}


/* ==========================================
   TOMBOL "ENGGAK MAU"
========================================== */

function kaburButton() {

  const btnLari =
    document.getElementById("btnLari");

  if (!btnLari) return;


  const x =
    Math.floor(
      Math.random() * 240
    ) - 120;

  const y =
    Math.floor(
      Math.random() * 180
    ) - 90;


  btnLari.style.transform =
    `translate(${x}px, ${y}px)`;

}


/* ==========================================
   MULAI PESAN
========================================== */

function mulaiPesan() {

  /* ========================================
     JATUHKAN BUNGA
  ======================================== */

  bungaBeterbangan();


  /* ========================================
     MUSIK
  ======================================== */

  const bgm =
    document.getElementById("bgm");


  if (bgm) {

    bgm.volume = 0.45;

    bgm.play().catch((error) => {

      console.log(
        "Musik belum dapat diputar:",
        error
      );

    });

  }


  /* ========================================
     POPUP 1
  ======================================== */

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


    /* ====================================
       POPUP 2
    ==================================== */

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


      /* ====================================
         POPUP 3
      ==================================== */

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