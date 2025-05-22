document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Cakeit_Bengkulu</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="tentang.html">Tentang</a></li>
                        <li class="nav-item"><a class="nav-link" href="produk.html">Produk</a></li>
                        <li class="nav-item"><a class="nav-link" href="galeri.html">Galeri</a></li>
                        <li class="nav-item"><a class="nav-link" href="kontak.html">Kontak</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
});
