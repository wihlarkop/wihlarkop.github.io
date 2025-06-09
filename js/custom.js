// Custom JavaScript for Modern Personal Website
function handleProfileImageError(imgElement) {
    const fallbackDiv = document.getElementById('profileImageFallback');

    // Sembunyikan elemen gambar yang gagal dimuat
    imgElement.style.display = 'none';

    // Tampilkan elemen fallback
    if (fallbackDiv) {
        fallbackDiv.classList.remove('d-none'); // Hapus kelas Bootstrap d-none
        fallbackDiv.classList.add('d-flex');    // Tambahkan kelas Bootstrap d-flex untuk mengaktifkan flexbox styling
    }
}


