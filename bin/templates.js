/**
 * @brief Contains an OpenAPI spec template to be written out as a JSON or YAML file
 */

module.exports.getParameters = () => ({
  in: 'path',
  required: true,
  description: 'Your description here',
  type: 'string',
});
module.exports.methods = () => ({
  post: {
    tags: [
      'pet',
    ],
    summary: 'Add a new pet to the store',
    description: '',
    consumes: [
      'application/json',
      'application/xml',
    ],
    produces: [
      'application/xml',
      'application/json',
    ],
    parameters: [],
    responses: {
      405: {
        description: 'Invalid input',
      },
    },
    security: [
      {
        petstore_auth: [
          'write:pets',
          'read:pets',
        ],
      },
    ],
  },
  put: {
    tags: [
      'pet',
    ],
    summary: 'Update an existing pet',
    description: '',
    consumes: [
      'application/json',
      'application/xml',
    ],
    produces: [
      'application/xml',
      'application/json',
    ],
    parameters: [
    ],
    responses: {
      400: {
        description: 'Invalid ID supplied',
      },
      404: {
        description: 'Pet not found',
      },
      405: {
        description: 'Validation exception',
      },
    },
    security: [
      {
        petstore_auth: [
          'write:pets',
          'read:pets',
        ],
      },
    ],
  },
  get: {
    tags: [
      'pet',
    ],
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
    produces: [
      'application/xml',
      'application/json',
    ],
    parameters: [
    ],
    responses: {
      200: {
        description: 'successful operation',
        schema: {
          $ref: '#/definitions/Pet',
        },
      },
      400: {
        description: 'Invalid ID supplied',
      },
      404: {
        description: 'Pet not found',
      },
    },
    security: [
      {
        api_key: [],
      },
    ],
  },
  delete: {
    tags: [
      'pet',
    ],
    summary: 'Deletes a pet',
    description: '',
    produces: [
      'application/xml',
      'application/json',
    ],
    parameters: [],
    responses: {
      400: {
        description: 'Invalid ID supplied',
      },
      404: {
        description: 'Pet not found',
      },
    },
    security: [
      {
        petstore_auth: [
          'write:pets',
          'read:pets',
        ],
      },
    ],
  },
});

module.exports.swagger = {
  swagger: '2.0',
  info: {
    description: 'This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.',
    version: '1.0.0',
    title: 'Swagger Petstore',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'apiteam@swagger.io',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'petstore.swagger.io',
  basePath: '/v2',
  tags: [
    {
      name: 'pet',
      description: 'Everything about your Pets',
      externalDocs: {
        description: 'Find out more',
        url: 'http://swagger.io',
      },
    },
  ],
  schemes: [
    'https',
    'http',
  ],
  paths: {
  },
  securityDefinitions: {
    petstore_auth: {
      type: 'oauth2',
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      flow: 'implicit',
      scopes: {
        'write:pets': 'modify pets in your account',
        'read:pets': 'read your pets',
      },
    },
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
  },
  definitions: {
    Category: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
        },
      },
      xml: {
        name: 'Category',
      },
    },
    Tag: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
        },
      },
      xml: {
        name: 'Tag',
      },
    },
    Pet: {
      type: 'object',
      required: [
        'name',
        'photoUrls',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        category: {
          $ref: '#/definitions/Category',
        },
        name: {
          type: 'string',
          example: 'doggie',
        },
        photoUrls: {
          type: 'array',
          xml: {
            name: 'photoUrl',
            wrapped: true,
          },
          items: {
            type: 'string',
          },
        },
        tags: {
          type: 'array',
          xml: {
            name: 'tag',
            wrapped: true,
          },
          items: {
            $ref: '#/definitions/Tag',
          },
        },
        status: {
          type: 'string',
          description: 'pet status in the store',
          enum: [
            'available',
            'pending',
            'sold',
          ],
        },
      },
      xml: {
        name: 'Pet',
      },
    },
    ApiResponse: {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    },
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
};
