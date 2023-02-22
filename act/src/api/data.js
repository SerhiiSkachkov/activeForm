export const data = {
  _http: 'get(cosmonova/orm/b2b_subscriptions/template)',
  _recognized: 'get(cosmonova/orm/b2b_subscriptions/template)',
  _status: 200,
  _took: '0.055',
  _meta: {
    _resource: 'cosmonova/orm/b2b_subscriptions',
    _caption: 'b2b_subscriptions',
    _manifest: 'None',
    _link: ' cosmonova/orm/b2b_subscriptions',
    _template: ' cosmonova/orm/b2b_subscriptions/template',
  },
  _scenarios: [
    {
      alias: 'should_be_b2b',
      scenario_key: 'title.realm',
      scenario_type: 'validate',
      scenario_rule: ['any', 'enum_alias', ['b2b']],
    },
    {
      alias: 'should_be_b2c',
      scenario_key: 'title.realm',
      scenario_type: 'validate',
      scenario_rule: ['any', 'enum_alias', ['b2c']],
    },
  ],
  _template: [
    {
      alias: 'title',
      type: 'embedded',
      hrn: '',
      required: 'False',
      editable: 'True',
      multiple: 'False',
      _fields: [
        {
          alias: 'realm',
          type: 'enum',
          hrn: 'None',
          required: 'True',
          editable: 'True',
          multiple: 'False',
          enums: {
            0: {
              alias: 'b2c',
            },
            1: {
              alias: 'b2b',
            },
            2: {
              alias: 'dc',
            },
          },
        },
        {
          alias: 'contract',
          type: 'ref',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          depends: 'True',
          behavior: {
            0: 'should_be_b2b',
          },
          _format: '_link',
          _link: ' cosmonova/orm/b2b_contracts',
        },
        {
          alias: 'subscriber',
          type: 'ref',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          depends: 'True',
          behavior: {
            0: 'should_be_b2c',
          },
          _format: '_link',
          _link: ' cosmonova/orm/b2c_subscribers',
        },
        {
          alias: 'subscription_period',
          type: 'enum',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          enums: {
            0: {
              alias: 'month',
            },
            1: {
              alias: 'quarter',
            },
            2: {
              alias: 'half_year',
            },
            3: {
              alias: 'year',
            },
          },
        },
        {
          alias: 'type',
          type: 'enum',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          enums: {
            0: {
              alias: 'vps',
            },
            1: {
              alias: 'vlan',
            },
            2: {
              alias: 'collocation',
            },
            3: {
              alias: 'transport',
            },
          },
        },
        {
          alias: 'service_id',
          type: 'ref',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          _format: '_link',
          _link:
            " cosmonova/orm/generic?pool=['cosmonova/orm/general_services','cosmonova/orm/b2b_services','cosmonova/orm/b2c_services','cosmonova/orm/dc_services']",
        },
        {
          alias: 'network_service',
          type: 'ref',
          hrn: 'None',
          required: 'False',
          editable: 'True',
          multiple: 'False',
          _format: '_link',
          _link:
            " cosmonova/orm/generic?pool=['cosmonova/orm/vps','cosmonova/orm/vlan','cosmonova/orm/collocations','cosmonova/orm/ip_transports']",
        },
        {
          alias: 'fixed_price',
          type: 'bool',
          hrn: 'None',
          required: 'True',
          editable: 'True',
          multiple: 'False',
          enums: {
            True: {
              alias: 'True',
            },
            False: {
              alias: 'False',
            },
          },
        },
      ],
    },
  ],
};

export const data2 = {
  _http: 'get(cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2)',
  _recognized: 'get(cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2)',
  _status: 200,
  _took: '0.096',
  _meta: {
    _capsule: '_entity',
    _resource: 'cosmonova/orm/b2b_subscriptions',
    _caption: 'b2b_subscriptions',
    _manifest: 'None',
    _id: ' cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2',
    _name:
      'b2b, ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ КОСМОНОВА - ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ МІСТО ДЛЯ ЛЮДЕЙ КИЇВ, , Надання доступу до мережі інтернет Business Internet Access',
    _self: ' cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2',
    _complete: 'cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2/complete',
    _list: ' cosmonova/orm/b2b_subscriptions',
    _template: ' cosmonova/orm/b2b_subscriptions/template',
    _lift: ' cosmonova/orm/b2b_subscriptions',
    _owner: 'user1',
    _created: '2023-02-17T10:15:46.134+00:00',
    _editor: 'user1',
    _edited: '2023-02-17T10:15:46.134+00:00',
    _retired: 'False',
  },
  _actions: {
    _edit: 'cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2/template',
    _retire: 'cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2!retire=True',
    _delete: 'cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2',
  },
  _data: {
    _plain: {
      realm: 'b2b',
      contract: 'cosmonova/orm/b2b_contracts/486e69ce-4d80-4bc2-88b3-9c8334c7a386',
      subscription_period: 'month',
      service_id: 'cosmonova/orm/b2b_services/7fb4bd08-54b1-45f7-85e1-ec808f71b82e',
      fixed_price: 'False',
    },
    _decorated: [
      {
        _name: 'realm',
        _path: 'title.realm',
        _type: 'enum',
        _caption: 'None',
        _value: 'b2b',
      },
      {
        _name: 'contract',
        _path: 'title.contract',
        _type: 'ref',
        _caption: 'None',
        _value: {
          _resource: 'cosmonova/orm/b2b_contracts',
          _manifest: 'Contract',
          _id: ' cosmonova/orm/b2b_contracts/486e69ce-4d80-4bc2-88b3-9c8334c7a386',
          _name:
            'ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ КОСМОНОВА - ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ МІСТО ДЛЯ ЛЮДЕЙ КИЇВ',
          _master: ' cosmonova/orm/b2b_contracts/486e69ce-4d80-4bc2-88b3-9c8334c7a386',
          _umbrella: [
            {
              _resource: 'cosmonova/orm/legal_entities',
              _manifest: 'None',
              _id: ' cosmonova/orm/legal_entities/07f69e45-eb52-4a6b-a2f3-e5e16e0439f5',
              _name: 'ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ МІСТО ДЛЯ ЛЮДЕЙ КИЇВ',
              _master: ' cosmonova/orm/legal_entities',
            },
            {
              _resource: 'cosmonova/orm/parties',
              _manifest: 'None',
              _id: ' cosmonova/orm/parties/64008fab-a818-4ccc-bb0b-4bd250ec057c',
              _name: 'ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ КОСМОНОВА',
              _master: ' cosmonova/orm/parties',
            },
          ],
        },
      },
      {
        _name: 'subscription_period',
        _path: 'title.subscription_period',
        _type: 'enum',
        _caption: 'None',
        _value: 'month',
      },
      {
        _name: 'service_id',
        _path: 'title.service_id',
        _type: 'ref',
        _caption: 'None',
        _value: {
          _resource: 'cosmonova/orm/b2b_services',
          _manifest: 'B2B_Service',
          _id: ' cosmonova/orm/b2b_services/7fb4bd08-54b1-45f7-85e1-ec808f71b82e',
          _name: 'Надання доступу до мережі інтернет Business Internet Access',
          _master: ' cosmonova/orm/b2b_services/7fb4bd08-54b1-45f7-85e1-ec808f71b82e',
        },
      },
      {
        _name: 'fixed_price',
        _path: 'title.fixed_price',
        _type: 'bool',
        _caption: 'None',
        _value: 'False',
      },
    ],
  },
  _embedded: [
    {
      _resource: 'cosmonova/orm/b2b_subscriptions/quote',
      _caption: 'None',
      _manifest: 'None',
      _link: ' cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2/quote',
      _template:
        ' cosmonova/orm/b2b_subscriptions/f494f93b-da3d-47c9-bd57-b336702abec2/quote/template',
      _count: 0,
      _format: '_links',
    },
  ],
  _related: 'None',
};
