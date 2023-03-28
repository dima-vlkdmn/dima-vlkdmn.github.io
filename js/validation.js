

$('#login form').validate({
    rules: {
        login: {
            required: true,
            email: true,
            minlength: 3,
            maxlength: 30
        },
        pass: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
    },
    messages: {

        login: {
          required: "Пожалуйста, введите свой логин",
          email: "Ваш логин должен быть в формате name@domain.com",
          minlength: jQuery.validator.format("Введите минимум {0} символа"),
          maxlength: jQuery.validator.format("Введите максимум {0} символов")
        },

        pass:  {
            required: "Пожалуйста, свой пароль",
            minlength: jQuery.validator.format("Введите минимум {0} символов"),
            maxlength: jQuery.validator.format("Введите максимум {0} символов")
        },

      }
});

$('#reg form').validate({
    rules: {
        login: {
            required: true,
            email: true,
            minlength: 3,
            maxlength: 30
        },
        pass: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
        d_pass: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
    },
    messages: {

        login: {
          required: "Пожалуйста, введите свой логин",
          email: "Ваш логин должен быть в формате name@domain.com",
          minlength: jQuery.validator.format("Введите минимум {0} символа"),
          maxlength: jQuery.validator.format("Введите максимум {0} символов")
        },

        pass:  {
            required: "Пожалуйста, свой пароль",
            minlength: jQuery.validator.format("Введите минимум {0} символов"),
            maxlength: jQuery.validator.format("Введите максимум {0} символов")
        },

        d_pass:  {
            required: "Пожалуйста, свой пароль еще раз",
            minlength: jQuery.validator.format("Введите минимум {0} символов"),
            maxlength: jQuery.validator.format("Введите максимум {0} символов")
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