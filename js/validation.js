
$.validator.addMethod('regexp', function(value, element, params) {
    var expression = new RegExp(params);
    return this.optional(element) || expression.test(value);
});

$('#login form').validate({ // отримуємо форму по ID
    rules: { // правила для полів
        login: { 
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20,
        },
    },
    messages: { // повідомлення для правил полів, якщо вони не виконані

        login: {
            required: "Будь-ласка, введіть свій логін",
            minlength: jQuery.validator.format("Введіть мінімум {0} символа"),
            maxlength: jQuery.validator.format("Введіть максимум {0} символів")
          },

        password:  {
            required: "Будь-ласка, введіть пароль",
            minlength: jQuery.validator.format("Введіть мінімум {0} символів"),
            maxlength: jQuery.validator.format("Введіть максимум {0} символів")
        },

      }
});

$('#reg form').validate({
    rules: {
        login: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            regexp: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            required: true,
            email: true,
            minlength: 8,
            maxlength: 30
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
    },
    messages: {

        login: {
          required: "Будь-ласка, введіть свій логін",
          minlength: jQuery.validator.format("Введіть мінімум {0} символа"),
          maxlength: jQuery.validator.format("Введіть максимум {0} символів")
        },

        email:  {
            required: "Будь-ласка, введіть свій email",
            email: "Ваш email повинен бути в форматі name@domain.com",
            minlength: jQuery.validator.format("Введіть мінімум {0} символів"),
            maxlength: jQuery.validator.format("Введіть максимум {0} символів")
        },

        password:  {
            required: "Будь-ласка, введіть пароль",
            minlength: jQuery.validator.format("Введіть мінімум {0} символів"),
            maxlength: jQuery.validator.format("Введіть максимум {0} символів")
        },
      }
});



// function valideForms(form){
//     $(form).validate({
//         rules: {
//             login: {
//                 required: true,
//                 email: true,
//                 minlength: 3,
//                 maxlength: 30
//             },
//             book: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 30
//             },
//             address:  {
//                 required: true,
//                 minlength: 5,
//                 maxlength: 30
//             },
//             phone:  {
//                 required: true,
//                 minlength: 3,
//                 maxlength: 15
//             },
//         },
//         messages: {
    
//             login: {
//               required: "Пожалуйста, введите свой логин",
//               email: "Ваш логин должен быть в формате name@domain.com",
//               minlength: jQuery.validator.format("Введите минимум {0} символа"),
//               maxlength: jQuery.validator.format("Введите максимум {0} символов")
//             },
    
//             book:  {
//                 required: "Пожалуйста, введите название книги",
//                 minlength: jQuery.validator.format("Введите минимум {0} символа"),
//                 maxlength: jQuery.validator.format("Введите максимум {0} символов")
//             },
    
//             address:  {
//                 required: "Пожалуйста, введите свой адресс",
//                 minlength: jQuery.validator.format("Введите минимум {0} символа"),
//                 maxlength: jQuery.validator.format("Введите максимум {0} символов")
//             },
    
//             phone:  {
//                 required: "Пожалуйста, введите свой логин",
//                 number: "Ваш телефон должен быть в формате +(xxx)xxxxxxxxxx",
//                 minlength: jQuery.validator.format("Введите минимум {0} символа"),
//                 maxlength: jQuery.validator.format("Введите максимум {0} символов")
//             }
//           }
//     });
// }

// validateForms('#consultation-form');
// validateForms('#consultation form');
// validateForms('#order form');

// $('input[name=phone]').mask("+38 (999) 999-99-99");