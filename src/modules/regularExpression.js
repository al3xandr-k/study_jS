const regularExpression = () => {
  const calcItem = document.querySelectorAll('input.calc-item');
  const body = document.querySelector('body');

  //Section calc sum inputs.
  calcItem.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[\D/]/g, '');
    });
  });

  body.addEventListener('input', (event) => {
    const target = event.target;

    if (target.name === 'user_name') {
      target.value = target.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '');
      target.value = target.value.trim().slice(0, 1).toUpperCase() + target.value.trim().slice(1).toLowerCase();
    } else if (target.name === 'user_email') {
      target.value = target.value.replace(/[^\w\s+/@\-\.]|()(?=\!)/gi, '');
    } else if (target.name === 'user_phone') {
      target.value = target.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim();
    } else if (target.name === 'user_message') {
      target.value = target.value.replace(/[a-z]/gi, '');
    };
  });

  body.addEventListener('focusout', (event) => {
    const target = event.target;

    const allBtnForms = document.querySelectorAll('.form-btn');

    const btnSubmit = (boolean) => {
      allBtnForms.forEach(item => {
        item.disabled = boolean
      });
    };

    if (target.type === 'tel') {
      if (target.value.length < 7 || target.value.length > 12) {
        btnSubmit(true);
      };
    } else if (target.type === 'text') {
      if (target.value.length < 2) {
        btnSubmit(true);
      };
    };

    if (target.name === 'user_name') {
      target.value = target.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '');
      target.value = target.value.trim().slice(0, 1).toUpperCase() + target.value.trim().slice(1).toLowerCase();
    } else if (target.name === 'user_email') {
      target.value = target.value.replace(/[^\w\s+/@\-\.]|()(?=\!)/gi, '');
    } else if (target.name === 'user_phone') {
      target.value = target.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim();
    } else if (target.name === 'user_message') {
      target.value = target.value.replace(/[a-z]/gi, '');
    };
  });
};

export default regularExpression;