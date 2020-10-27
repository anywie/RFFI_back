// module.exports = ({ env }) => ({
//   upload: {
//     provider: "cloudinary",
//     providerOptions: {
//       cloud_name: env("CLOUDINARY_NAME"),
//       api_key: env("CLOUDINARY_KEY"),
//       api_secret: env("CLOUDINARY_SECRET"),
//     },
//   },
// });

module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "us-west-1",
      params: {
        Bucket: "myystrapi",
      },
    },
  },
});