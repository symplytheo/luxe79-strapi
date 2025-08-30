export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "mailsenderrr224@gmail.com",
          pass: "ysbvoynyyjkdhehh",
        },
      },
      settings: {
        defaultFrom: "hello@79luxeclothing.com",
        defaultReplyTo: "79luxe@gmail.com",
      },
    },
  },
});
