$(document).ready(function () {
	$('.slider-reviews').slick({
		slidesToShow: 2,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1012,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	if (window.matchMedia('(max-width: 822px)').matches) {
		$('.certificates__inner').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 495,
					settings: {
						centerMode: false,
						variableWidth: false
					}
				}
			]
		});
	}
	if (window.matchMedia('(max-width: 495px)').matches) {
		$('.discription__results-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$(".ingredients__row").addClass("ingredients__row-slider");
		$('.ingredients__row-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ingredients__btn').text('ЧИТАТЬ ПОДРОБНЕЕ');
	}

});