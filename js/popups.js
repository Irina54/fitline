const CLASS_LIST = {
	popup: 'popup',
	popup_open: 'open',
	popup_body: 'popup-order_body',
	trigger_open: 'popup-link',
	trigger_close: 'close-popup'
};
let unlock = true;
const showScroll = (event) => {
	if (event.propertyName === 'transform') {
		document.body.style.paddingRight = '';
		document.body.style.overflow = 'visible';
		event.target.closest(`.${CLASS_LIST.popup}`).removeEventListener('transitionend', showScroll);
	}
};
document.addEventListener("click", (event) => {
	if (event.target.closest(`.${CLASS_LIST.trigger_open}`)) {
		event.preventDefault();

		const target = event.target.closest(`.${CLASS_LIST.trigger_open}`);
		const popupId = target.getAttribute('href').replace('#', '');
		const popupOn = document.getElementById(popupId);
		popupOpen(popupOn);
		document.body.style.paddingRight = `${getScrollbarWidth()}px`;
		document.body.style.overflow = 'hidden';

		//popupOn.classList.add(CLASS_LIST.popup_open);

	}
	if (
		event.target.closest(`.${CLASS_LIST.trigger_close}`) ||
		event.target.classList.contains(CLASS_LIST.popup_open)
	) {
		event.preventDefault();
		const popupOff = event.target.closest(`.${CLASS_LIST.popup}`);
		popupOff.classList.remove(CLASS_LIST.popup_open);

		popupOff.addEventListener('transitionend', showScroll);
	}

});
function popupOpen(popupOn) {
	if (popupOn && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			getScrollbarWidth();
		}
	}
	popupOn.classList.add(CLASS_LIST.popup_open);
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove(CLASS_LIST.popup_open);
		if (doUnlock) {
			getScrollbarWidth();
		}
	}
}
/* const popupActive = document.querySelector('.popup.open');
if (popupActive) {
	popupOff(popupActive, false);
} else {
	scrollBarWidth();
} */
/* const popupActive = (popupOn) => {
	if (popupOn) {
		popupOff.classList.remove(CLASS_LIST.popup);
		popupOff(popupActive, false);
	} else {
		showScroll();
	}
	popupOn.classList.add(`.${CLASS_LIST.popup_open}`);
	popupOn.addEventListener("click", (event) => {
		if (!event.targetevent.target.closest(`.${CLASS_LIST.popup_body}`)) {
			popupOff(event.target.closest(`.${CLASS_LIST.popup}`));
		}
	});
}; */
//console.log(popupActive);
const getScrollbarWidth = () => {
	const item = document.createElement('div');
	item.style.position = 'absolute';
	item.style.top = '-9999px';
	item.style.width = '50px';
	item.style.height = '50px';
	item.style.overflow = 'scroll';
	item.style.visibility = 'hidden';
	document.body.appendChild(item);
	const scrollBarWidth = item.offsetWidth - item.clientWidth;
	document.body.removeChild(item);
	return scrollBarWidth;

};