//import $ = require('jquery');
//import * as $ from 'jquery';
declare var $: any;


interface JQueryStatic  {
  notify: any; // Replace with your types
}
export class NotificacionController {

  showNotification(from, align, msg, color, icono) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    let type = [];
    // let icono: String = 'alarm-on';

    if (icono === '') {
      icono = 'notifications';
    }

    switch (color) {
      case 'info':
       type = ['info'];
      break;

      case 'success':
       type = ['success'];
      break;
      case 'warning':
       type = ['warning'];
      break;
      case 'danger':
       type = ['danger'];
      break;
    }



     // let type = ['success'];
    // let type = [color];
    // let type = [color];
//31/01/2019
    $.notify({
        icon: 'notification',
        message: msg

    }, {
        type: type,
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div ' +
          ' data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          ' <button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">' +
          ' <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">' + icono + '</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ' +
          ' style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });

    ////
  }
}
