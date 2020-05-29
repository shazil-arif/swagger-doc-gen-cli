module.exports.methods = {
  post: {
    summary: 'Summary for this endpoint',
    requestBody: {
      required: false,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              username: {
                type: 'string',
                example: 'johndoe@menlolab.com',
              },
              key: {
                type: 'string',
                example: 'yourSSHkey',
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
                key: {
                  type: 'string',
                  example: 'justaddedSSHkey',
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
    summary: 'update a user',
    requestBody: {
      required: false,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/entity',
            type: 'object',
            properties: {
              comment: 'The entire schema object can just reference an existing  ',
            },
          },
        },
      },
    },
    description: 'Update a user',
    responses: {
      200: {
        description: 'A JSON array of user names',
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
      url: 'http://user:6060/',
      description: 'production and staging end point',
    },
    {
      url: 'http://localhost:6060/',
      description: 'Local development',
    },
  ],
  components: {
    schemas: {
      entity: {
        name: 'johndoe',
        email: 'johndoe@example.com',
      },
      otherSchema: {
        comment: 'You can also reference your mongoose models as a json file using the $ref attribute and a relative path to the file',
      },
    },
  },
  paths: {
  },
};
