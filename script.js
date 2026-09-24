function kaburButton() {
  const btnLari = document.getElementById('btnLari');
  
  // Menghitung posisi acak agar tombol kabur saat diarahkan kursor
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  
  btnLari.style.transform = `translate(${x}px, ${y}px)`;
}

function mulaiPesan() {
  // 1. Memutar Musik secara otomatis saat tombol diklik
  const bgm = document.getElementById('bgm');
  
  if (bgm) {
    bgm.play().catch((error) => {
      console.log("Autoplay diblokir oleh browser:", error);
    });
  }

  // 2. Memunculkan Pesan Bertahap Menggunakan SweetAlert2
  // Tahap 1: Foto 2
  Swal.fire({
    title: 'Halo Puspitaaaa! 🎉',
    text: 'Selamat bertambah usia yaaa!',
    imageUrl: 'foto2.jpeg',
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: 'Foto Ulang Tahun',
    confirmButtonText: 'Lanjut ❤️',
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      // Tahap 2: Foto 3
      Swal.fire({
        title: 'Doa Terbaik Buat Kamu ✨',
        text: 'Semoga panjang umur, sehat selalu, dan semua cita-citamu tercapai!',
        imageUrl: 'foto3.jpeg',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Foto Ulang Tahun',
        confirmButtonText: 'Lanjut Lagi 🎁',
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          // Tahap 3: Foto 7
          Swal.fire({
            title: 'I Have Something For You 💖',
            text: 'Jangan lupa senyum hari ini ya!',
            imageUrl: 'foto7.jpeg',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Foto Ulang Tahun',
            confirmButtonText: 'Selesai 🥰',
            allowOutsideClick: false
          });
        }
      });
    }
  });
}