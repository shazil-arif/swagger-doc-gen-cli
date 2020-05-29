module.exports.methods = {
  post: {
    summary: 'Summary for this endpoint',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              username: {
                type: 'string',
                example: 'johndoe@menlolab.com',
              },
              comment: {
                type: 'string',
                example: 'other types include number, integer, boolean, array, object',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Your description of the response body',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string',
                  example: 'johndoe',
                },
                otherField: {
                  type: 'string',
                  example: 'yourOtherField',
                },
              },
            },
          },
        },
      },
    },
  },
  get: {
    summary: 'Some other endpoint',
    description: 'Optional extended description in CommonMark or HTML.',
    responses: {
      200: {
        description: 'Your description of the endpoint',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                authorized: {
                  type: 'boolean',
                },
              },
            },
          },
        },
      },
      404: {
        description: 'Forbidden',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                authorized: {
                  type: 'boolean',
                },
              },
            },
          },
        },
      },
    },
  },
  put: {
    summary: 'Your description for this put request',
    requestBody: {
      required: false,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/entity',
          },
        },
      },
    },
    description: 'Description of the response',
    responses: {
      200: {
        description: 'Some response',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/entity',
            },
          },
        },
      },
    },
  },
  delete: {
    summary: 'Your description for this delete request',
    requestBody: {
      required: false,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/entity',
          },
        },
      },
    },
    description: 'Description of the response',
    responses: {
      200: {
        description: 'Some response',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/entity',
            },
          },
        },
      },
    },
  },
};

module.exports.swagger = {
  openapi: '3.0.0',
  info: {
    title: 'Insert your title here',
    description: 'Your description here',
    version: '0.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'production and staging end point',
    },
  ],
  components: {
    schemas: {
      entity: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Johndoe',
          },
          email: {
            type: 'string',
            example: 'johndoe@gmail.com',
          },

        },
      },
    },
  },
  paths: {
  },
};
