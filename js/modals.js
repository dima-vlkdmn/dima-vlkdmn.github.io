    // Modal

    const logModal = document.getElementById('login'),
        regModal = document.getElementById('reg'),
        btnLog = document.getElementById('login-btn'),
        btnReg = document.getElementById('reg-btn'),
        modal = document.querySelectorAll('.modal'),
        modalCloseLog = document.querySelector('[data-close-log]'),
        modalCloseReg = document.querySelector('[data-close-reg]');


    btnLog.addEventListener('click', openLogModal);
    btnReg.addEventListener('click', openRegModal);

    function openRegModal() {
        regModal.classList.add('show');
        regModal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function openLogModal() {
        logModal.classList.add('show');
        logModal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    
    function closeModalReg() {
        regModal.classList.add('hide');
        regModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function closeModalLog() {
        logModal.classList.add('hide');
        logModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseLog.addEventListener('click', closeModalLog);
    modalCloseReg.addEventListener('click', closeModalReg);
    
    

    regModal.addEventListener('click', (e) => { // закриття модального вікна, коли ми клікаємо поза формою
        if (e.target === regModal) { // e.target = все, що не входить в форму, бо те що в формі має класс modal_dialog
            closeModalReg();
        }
    });

    logModal.addEventListener('click', (e) => {
        if (e.target === logModal) {
            closeModalLog();
        }
    });

    document.addEventListener('keydown', (e) => { // закриття модального вікна, коли ми натискаємо клавішу ESC
        if (e.code === "Escape" && logModal.classList.contains('show')) { 
            closeModalLog();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && regModal.classList.contains('show')) { 
            closeModalReg();
        }
    });

    const modalTimerId = setTimeout(openRegModal, 30000);

    function showModalByScroll() { //pageYOffset = кількість проскроленних пікселів + ClientHeight = довжина активного вікна >= довжина усього документа
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // якщо користувач доскролив до кінця сторінки викликається форма
            openRegModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll); 