// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	// console.log('ok');

	// ambil isi href
	var tujuan = $(this).attr('href');
	// console.log(tujuan);
	// untuk ambil elemen dengan id tersebut
	var elemenTujuan = $(tujuan);
	// dengan mengambil
	// console.log(elemenTujuan.offset().top);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	});
	e.preventDefault();
});