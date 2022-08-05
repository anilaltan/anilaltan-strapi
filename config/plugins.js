module.exports = ({ env }) => ({
  i18n: true,

  "generate-data": true,

  ckeditor: true,

  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },

  seo: {
    enabled: true,
  },

  documentation: {
    enabled: true,
  },

  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
