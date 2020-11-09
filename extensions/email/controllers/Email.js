"use strict";


module.exports = { 
  send: async ctx => {
        await strapi.plugins["email"].services.email.send({
          to: "wierrdo@yandex.ru",
          from: "noreply.rffi@gmail.com",
          replyTo: "noreply.rffi@gmail.com",
          subject: ctx.request.body.subject,
          html: `<i>Запрос с сайта.</i> 
      <br/> <b>Имя: </b>${ctx.request.body.name} <br /> 
      <b>Email: </b>${ctx.request.body.email}<br />
      <b>Телефон: </b>${ctx.request.body.phone}<br />
      <b>Сообщение:</b> <br /> ${ctx.request.body.message} <br><br> `,
        });

        ctx.send("Well done!");
    }
};
