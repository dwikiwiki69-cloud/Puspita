function kaburButton() {
  const btnLari = document.getElementById('btnLari');
  // Menghitung posisi acak agar tombol kabur saat diarahkan kursor
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  
  btnLari.style.transform = `translate(${x}px, ${y}px)`;
}

function mulaiPesan() {
  // Memutar Musik
  const bgm = document.getElementById('bgm');
  bgm.play();

  // Memunculkan Pesan Bertahap Menggunakan SweetAlert2
  Swal.fire({
    title: 'Halo Kamu! 🎉',
    text: 'Selamat bertambah usia yaaa!',
    imageUrl: 'assets/foto.jpg',
    imageWidth: 150,
    imageHeight: 150,
    confirmButtonText: 'Lanjut ❤️'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Doa Terbaik Buat Kamu ✨',
        text: 'Semoga panjang umur, sehat selalu, dan semua cita-citamu tercapai!',
        confirmButtonText: 'Lanjut Lagi 🎁'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'I Have Something For You 💖',
            text: 'Jangan lupa senyum hari ini ya!',
            icon: 'success'
          });
        }
      });
    }
  });
}