/**
 * @brief Contains an OpenAPI spec template to be written out as a JSON or YAML file
 */

module.exports.getParameters = () => ({
  in: 'path',
  required: true,
  description: 'Your description here',
  schema: {
    type: 'string',
    example: 'modify the above type as needed',
  },
});
module.exports.methods = () => ({
  post: {
    summary: 'Summary for this endpoint',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              username: {
                type: 'string',
                example: 'johndoe@hotmailcom',
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
    parameters: [],
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
    parameters: [],
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
    parameters: [],
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
});

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
