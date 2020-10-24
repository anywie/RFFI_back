module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID", "AKIAIVSCXGUTYU4VIL3Q"),
      secretAccessKey: env(
        "AWS_SECRET_ACCESS_KEY",
        "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"
      ),
      region: "us-west-1",
      params: {
        Bucket: "myystrapi",
      },
    },
  },
});