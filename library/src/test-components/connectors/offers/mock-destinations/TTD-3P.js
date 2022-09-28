const TTD3P = [
      {
          "app_id": 11,
          "eligibility": {
              "type": "eligible",
              "children": [
                  {
                      "type": "ineligible",
                      "children": [
                          {
                              "type": "ineligible",
                              "children": [],
                              "mapped": [],
                              "schema": {
                                  "type": "attribute",
                                  "name": "sha256_hashed_email",
                                  "required": [
                                      "sha256_hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              "unmapped": [
                                  {
                                      "expression": null,
                                      "field": "sha256_hashed_email.value",
                                      "missing": [],
                                      "used": []
                                  }
                              ]
                          },
                          {
                              "type": "ineligible",
                              "children": [],
                              "mapped": [],
                              "schema": {
                                  "type": "attribute",
                                  "name": "hashed_email",
                                  "required": [
                                      "hashed_email.type",
                                      "hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              "unmapped": [
                                  {
                                      "expression": null,
                                      "field": "hashed_email.type",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "hashed_email.value",
                                      "missing": [],
                                      "used": []
                                  }
                              ]
                          }
                      ],
                      "mapped": [],
                      "schema": {
                          "type": "any_of",
                          "values": [
                              {
                                  "type": "attribute",
                                  "name": "sha256_hashed_email",
                                  "required": [
                                      "sha256_hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "hashed_email",
                                  "required": [
                                      "hashed_email.type",
                                      "hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "telephone_number",
                                  "required": [
                                      "telephone_number"
                                  ],
                                  "optional": []
                              }
                          ]
                      },
                      "unmapped": [
                          {
                              "expression": null,
                              "field": "sha256_hashed_email.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "hashed_email.type",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "hashed_email.value",
                              "missing": [],
                              "used": []
                          }
                      ]
                  },
                  {
                      "type": "ineligible",
                      "children": [],
                      "mapped": [],
                      "schema": {
                          "type": "attribute",
                          "name": "telephone_number",
                          "required": [
                              "telephone_number"
                          ],
                          "optional": []
                      },
                      "unmapped": [
                          {
                              "expression": null,
                              "field": "telephone_number",
                              "missing": [],
                              "used": []
                          }
                      ]
                  }
              ],
              "mapped": [],
              "schema": {
                  "type": "any_of",
                  "values": [
                      {
                          "type": "attribute",
                          "name": "sha256_hashed_email",
                          "required": [
                              "sha256_hashed_email.value"
                          ],
                          "optional": []
                      },
                      {
                          "type": "attribute",
                          "name": "hashed_email",
                          "required": [
                              "hashed_email.type",
                              "hashed_email.value"
                          ],
                          "optional": []
                      },
                      {
                          "type": "attribute",
                          "name": "telephone_number",
                          "required": [
                              "telephone_number"
                          ],
                          "optional": []
                      }
                  ]
              },
              "unmapped": [
                  {
                      "expression": null,
                      "field": "sha256_hashed_email.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "hashed_email.type",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "hashed_email.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "telephone_number",
                      "missing": [],
                      "used": []
                  }
              ]
          },
          "profiles": [
              {
                  "id": "c173aab5-affe-4224-8432-cf682ebee254",
                  "name": "piyushs_profile_8850a0a27c39",
                  "description": null
              },
              {
                  "id": "c386ab17-c1f3-46a0-940a-5a485432f6a0",
                  "name": "Narrative.Fanatics 3p Custom Connector",
                  "description": "Test profile using the narrative.fanatics brand"
              },
              {
                  "id": "9f9c7fd5-fda1-4b7b-9fbf-394c940396f9",
                  "name": "ttd-3rd-party-kix5dwrm",
                  "description": null
              },
              {
                  "id": "c1aaee63-1cb3-4c7d-8572-225697ad716f",
                  "name": "ttd-3rd-party-c7xmbcgw",
                  "description": null
              },
              {
                  "id": "21214015-d5c3-494b-9590-8ff8e5f29e16",
                  "name": "ttd-3rd-party-ppive4nt",
                  "description": null
              },
              {
                  "id": "4589bf90-a443-4a84-9c4a-1f9a33cc9310",
                  "name": "ttd-3rd-party-v7cwsci6",
                  "description": null
              },
              {
                  "id": "2a181d4e-9b14-4a10-916a-1f3e904051e7",
                  "name": "piyushs_profile_a6f0fb73ebe9",
                  "description": null
              },
              {
                  "id": "d713647a-86c0-44d2-860d-55d9a3095670",
                  "name": "ttd-3rd-party-jvcvcf33",
                  "description": null
              },
              {
                  "id": "84126a33-df69-4e63-b7cc-f4693b719a3f",
                  "name": "Narrative TTD 3p Custom Connector",
                  "description": null
              }
          ]
      },
      {
          "app_id": 7,
          "eligibility": {
              "type": "eligible",
              "children": [],
              "mapped": [],
              "schema": {
                  "type": "any"
              }
          },
          "profiles": [
              {
                  "id": "e516de16-f925-4074-a7d6-1384b7d37bbd",
                  "name": "Chris Test",
                  "description": "Test"
              },
              {
                  "id": "d13867f7-a6c0-4f83-b129-f6c6f2de7c15",
                  "name": "lino",
                  "description": "desc"
              },
              {
                  "id": "cd7ee1b0-837e-4895-bd1c-9bd923a1b595",
                  "name": "moloco test ",
                  "description": "testing "
              },
              {
                  "id": "f6d5e4fa-73dd-4108-bdf6-9b7a7b39d7c6",
                  "name": "Chris Test CSV",
                  "description": "Test"
              },
              {
                  "id": "62c17625-99c3-496b-94b2-ee72192f3122",
                  "name": "Chris Test Destinations",
                  "description": "TEst"
              },
              {
                  "id": "510c426e-9e52-4f22-bbc7-dc80a02427b2",
                  "name": "Chris Test Destinations 2",
                  "description": "TEst"
              },
              {
                  "id": "7d02734d-3ea3-4659-abb5-814c539bf1c6",
                  "name": "Chris from Narrative 3",
                  "description": "Test"
              },
              {
                  "id": "21e80ce9-4b89-475a-bf77-d496e3cb9836",
                  "name": "Nick Test",
                  "description": "This is a test"
              },
              {
                  "id": "e15c5ff1-48f2-4fa3-b726-312847ae1874",
                  "name": "Chris Test Update",
                  "description": "Test"
              },
              {
                  "id": "1ff1b284-be85-409a-a679-ca13dd2762ee",
                  "name": "Test",
                  "description": "TEst"
              },
              {
                  "id": "a9209a4a-48e7-4f13-92dc-7b3de6424c73",
                  "name": "Matt Test",
                  "description": "Description "
              },
              {
                  "id": "028891cf-315f-48b5-8b74-fa8f4a6fd188",
                  "name": "Test Clear Forms",
                  "description": "test"
              },
              {
                  "id": "02fca399-bd4a-44c1-a7b7-1d13d36eb9ac",
                  "name": "Another test profile",
                  "description": "Test"
              },
              {
                  "id": "dc5c8a5f-6f25-4426-b55a-82749d0176ea",
                  "name": "Chris Test",
                  "description": "test"
              },
              {
                  "id": "71ee7819-f73c-4026-b08d-88f1391a8434",
                  "name": "Matt's test ",
                  "description": "Testing non-json"
              },
              {
                  "id": "bc4d1b20-c927-491e-a358-faebfaf75397",
                  "name": "matt testing weird csv ",
                  "description": "changing delimiters "
              },
              {
                  "id": "d25390d8-facf-4493-b284-fa000f866e21",
                  "name": "Matt's new test profile ",
                  "description": "This is a. description "
              },
              {
                  "id": "24bd3256-77a6-4309-990a-d4c9e39d20cf",
                  "name": "Chris Test regions 4",
                  "description": "Test"
              },
              {
                  "id": "5c29e360-23a9-42db-9597-14e6442a354a",
                  "name": "test",
                  "description": "test"
              }
          ]
      },
      {
          "app_id": 8,
          "eligibility": {
              "type": "ineligible",
              "children": [
                  {
                      "type": "ineligible",
                      "children": [
                          {
                              "type": "ineligible",
                              "children": [
                                  {
                                      "type": "ineligible",
                                      "children": [
                                          {
                                              "type": "ineligible",
                                              "children": [
                                                  {
                                                      "type": "ineligible",
                                                      "children": [
                                                          {
                                                              "type": "ineligible",
                                                              "children": [],
                                                              "mapped": [],
                                                              "schema": {
                                                                  "type": "attribute",
                                                                  "name": "unique_id",
                                                                  "required": [
                                                                      "unique_id.type",
                                                                      "unique_id.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              "unmapped": [
                                                                  {
                                                                      "expression": null,
                                                                      "field": "unique_id.type",
                                                                      "missing": [],
                                                                      "used": []
                                                                  },
                                                                  {
                                                                      "expression": null,
                                                                      "field": "unique_id.value",
                                                                      "missing": [],
                                                                      "used": []
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "type": "ineligible",
                                                              "children": [],
                                                              "mapped": [],
                                                              "schema": {
                                                                  "type": "attribute",
                                                                  "name": "mobile_id_unique_identifier",
                                                                  "required": [
                                                                      "mobile_id_unique_identifier.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              "unmapped": [
                                                                  {
                                                                      "expression": null,
                                                                      "field": "mobile_id_unique_identifier.value",
                                                                      "missing": [],
                                                                      "used": []
                                                                  }
                                                              ]
                                                          }
                                                      ],
                                                      "mapped": [],
                                                      "schema": {
                                                          "type": "any_of",
                                                          "values": [
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "unique_id",
                                                                  "required": [
                                                                      "unique_id.type",
                                                                      "unique_id.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "mobile_id_unique_identifier",
                                                                  "required": [
                                                                      "mobile_id_unique_identifier.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "apple_idfa",
                                                                  "required": [
                                                                      "apple_idfa.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "android_advertising_id",
                                                                  "required": [
                                                                      "android_advertising_id.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "sha256_hashed_email",
                                                                  "required": [
                                                                      "sha256_hashed_email.value"
                                                                  ],
                                                                  "optional": []
                                                              },
                                                              {
                                                                  "type": "attribute",
                                                                  "name": "hashed_email",
                                                                  "required": [
                                                                      "hashed_email.type",
                                                                      "hashed_email.value"
                                                                  ],
                                                                  "optional": []
                                                              }
                                                          ]
                                                      },
                                                      "unmapped": [
                                                          {
                                                              "expression": null,
                                                              "field": "unique_id.type",
                                                              "missing": [],
                                                              "used": []
                                                          },
                                                          {
                                                              "expression": null,
                                                              "field": "unique_id.value",
                                                              "missing": [],
                                                              "used": []
                                                          },
                                                          {
                                                              "expression": null,
                                                              "field": "mobile_id_unique_identifier.value",
                                                              "missing": [],
                                                              "used": []
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "ineligible",
                                                      "children": [],
                                                      "mapped": [],
                                                      "schema": {
                                                          "type": "attribute",
                                                          "name": "apple_idfa",
                                                          "required": [
                                                              "apple_idfa.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      "unmapped": [
                                                          {
                                                              "expression": null,
                                                              "field": "apple_idfa.value",
                                                              "missing": [],
                                                              "used": []
                                                          }
                                                      ]
                                                  }
                                              ],
                                              "mapped": [],
                                              "schema": {
                                                  "type": "any_of",
                                                  "values": [
                                                      {
                                                          "type": "attribute",
                                                          "name": "unique_id",
                                                          "required": [
                                                              "unique_id.type",
                                                              "unique_id.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "mobile_id_unique_identifier",
                                                          "required": [
                                                              "mobile_id_unique_identifier.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "apple_idfa",
                                                          "required": [
                                                              "apple_idfa.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "android_advertising_id",
                                                          "required": [
                                                              "android_advertising_id.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "sha256_hashed_email",
                                                          "required": [
                                                              "sha256_hashed_email.value"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "hashed_email",
                                                          "required": [
                                                              "hashed_email.type",
                                                              "hashed_email.value"
                                                          ],
                                                          "optional": []
                                                      }
                                                  ]
                                              },
                                              "unmapped": [
                                                  {
                                                      "expression": null,
                                                      "field": "unique_id.type",
                                                      "missing": [],
                                                      "used": []
                                                  },
                                                  {
                                                      "expression": null,
                                                      "field": "unique_id.value",
                                                      "missing": [],
                                                      "used": []
                                                  },
                                                  {
                                                      "expression": null,
                                                      "field": "mobile_id_unique_identifier.value",
                                                      "missing": [],
                                                      "used": []
                                                  },
                                                  {
                                                      "expression": null,
                                                      "field": "apple_idfa.value",
                                                      "missing": [],
                                                      "used": []
                                                  }
                                              ]
                                          },
                                          {
                                              "type": "ineligible",
                                              "children": [],
                                              "mapped": [],
                                              "schema": {
                                                  "type": "attribute",
                                                  "name": "android_advertising_id",
                                                  "required": [
                                                      "android_advertising_id.value"
                                                  ],
                                                  "optional": []
                                              },
                                              "unmapped": [
                                                  {
                                                      "expression": null,
                                                      "field": "android_advertising_id.value",
                                                      "missing": [],
                                                      "used": []
                                                  }
                                              ]
                                          }
                                      ],
                                      "mapped": [],
                                      "schema": {
                                          "type": "any_of",
                                          "values": [
                                              {
                                                  "type": "attribute",
                                                  "name": "unique_id",
                                                  "required": [
                                                      "unique_id.type",
                                                      "unique_id.value"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "mobile_id_unique_identifier",
                                                  "required": [
                                                      "mobile_id_unique_identifier.value"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "apple_idfa",
                                                  "required": [
                                                      "apple_idfa.value"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "android_advertising_id",
                                                  "required": [
                                                      "android_advertising_id.value"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "sha256_hashed_email",
                                                  "required": [
                                                      "sha256_hashed_email.value"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "hashed_email",
                                                  "required": [
                                                      "hashed_email.type",
                                                      "hashed_email.value"
                                                  ],
                                                  "optional": []
                                              }
                                          ]
                                      },
                                      "unmapped": [
                                          {
                                              "expression": null,
                                              "field": "mobile_id_unique_identifier.value",
                                              "missing": [],
                                              "used": []
                                          },
                                          {
                                              "expression": null,
                                              "field": "android_advertising_id.value",
                                              "missing": [],
                                              "used": []
                                          },
                                          {
                                              "expression": null,
                                              "field": "unique_id.type",
                                              "missing": [],
                                              "used": []
                                          },
                                          {
                                              "expression": null,
                                              "field": "apple_idfa.value",
                                              "missing": [],
                                              "used": []
                                          },
                                          {
                                              "expression": null,
                                              "field": "unique_id.value",
                                              "missing": [],
                                              "used": []
                                          }
                                      ]
                                  },
                                  {
                                      "type": "ineligible",
                                      "children": [],
                                      "mapped": [],
                                      "schema": {
                                          "type": "attribute",
                                          "name": "sha256_hashed_email",
                                          "required": [
                                              "sha256_hashed_email.value"
                                          ],
                                          "optional": []
                                      },
                                      "unmapped": [
                                          {
                                              "expression": null,
                                              "field": "sha256_hashed_email.value",
                                              "missing": [],
                                              "used": []
                                          }
                                      ]
                                  }
                              ],
                              "mapped": [],
                              "schema": {
                                  "type": "any_of",
                                  "values": [
                                      {
                                          "type": "attribute",
                                          "name": "unique_id",
                                          "required": [
                                              "unique_id.type",
                                              "unique_id.value"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "mobile_id_unique_identifier",
                                          "required": [
                                              "mobile_id_unique_identifier.value"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "apple_idfa",
                                          "required": [
                                              "apple_idfa.value"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "android_advertising_id",
                                          "required": [
                                              "android_advertising_id.value"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "sha256_hashed_email",
                                          "required": [
                                              "sha256_hashed_email.value"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "hashed_email",
                                          "required": [
                                              "hashed_email.type",
                                              "hashed_email.value"
                                          ],
                                          "optional": []
                                      }
                                  ]
                              },
                              "unmapped": [
                                  {
                                      "expression": null,
                                      "field": "mobile_id_unique_identifier.value",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "sha256_hashed_email.value",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "android_advertising_id.value",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "unique_id.type",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "apple_idfa.value",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "unique_id.value",
                                      "missing": [],
                                      "used": []
                                  }
                              ]
                          },
                          {
                              "type": "ineligible",
                              "children": [],
                              "mapped": [],
                              "schema": {
                                  "type": "attribute",
                                  "name": "hashed_email",
                                  "required": [
                                      "hashed_email.type",
                                      "hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              "unmapped": [
                                  {
                                      "expression": null,
                                      "field": "hashed_email.type",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "hashed_email.value",
                                      "missing": [],
                                      "used": []
                                  }
                              ]
                          }
                      ],
                      "mapped": [],
                      "schema": {
                          "type": "any_of",
                          "values": [
                              {
                                  "type": "attribute",
                                  "name": "unique_id",
                                  "required": [
                                      "unique_id.type",
                                      "unique_id.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "mobile_id_unique_identifier",
                                  "required": [
                                      "mobile_id_unique_identifier.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "apple_idfa",
                                  "required": [
                                      "apple_idfa.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "android_advertising_id",
                                  "required": [
                                      "android_advertising_id.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "sha256_hashed_email",
                                  "required": [
                                      "sha256_hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "hashed_email",
                                  "required": [
                                      "hashed_email.type",
                                      "hashed_email.value"
                                  ],
                                  "optional": []
                              }
                          ]
                      },
                      "unmapped": [
                          {
                              "expression": null,
                              "field": "hashed_email.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "mobile_id_unique_identifier.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "sha256_hashed_email.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "android_advertising_id.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "hashed_email.type",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "unique_id.type",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "apple_idfa.value",
                              "missing": [],
                              "used": []
                          },
                          {
                              "expression": null,
                              "field": "unique_id.value",
                              "missing": [],
                              "used": []
                          }
                      ]
                  },
                  {
                      "type": "eligible",
                      "children": [
                          {
                              "type": "eligible",
                              "children": [
                                  {
                                      "type": "eligible",
                                      "children": [
                                          {
                                              "type": "eligible",
                                              "children": [
                                                  {
                                                      "type": "ineligible",
                                                      "children": [],
                                                      "mapped": [],
                                                      "schema": {
                                                          "type": "attribute",
                                                          "name": "iso_3166_1_country",
                                                          "required": [
                                                              "iso_3166_1_country"
                                                          ],
                                                          "optional": []
                                                      },
                                                      "unmapped": [
                                                          {
                                                              "expression": null,
                                                              "field": "iso_3166_1_country",
                                                              "missing": [],
                                                              "used": []
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "ineligible",
                                                      "children": [],
                                                      "mapped": [],
                                                      "schema": {
                                                          "type": "attribute",
                                                          "name": "hl7_gender",
                                                          "required": [
                                                              "hl7_gender"
                                                          ],
                                                          "optional": []
                                                      },
                                                      "unmapped": [
                                                          {
                                                              "expression": null,
                                                              "field": "hl7_gender",
                                                              "missing": [],
                                                              "used": []
                                                          }
                                                      ]
                                                  }
                                              ],
                                              "mapped": [],
                                              "schema": {
                                                  "type": "optional",
                                                  "values": [
                                                      {
                                                          "type": "attribute",
                                                          "name": "iso_3166_1_country",
                                                          "required": [
                                                              "iso_3166_1_country"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "hl7_gender",
                                                          "required": [
                                                              "hl7_gender"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "birthdate",
                                                          "required": [
                                                              "birthdate"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "birth_year",
                                                          "required": [
                                                              "birth_year"
                                                          ],
                                                          "optional": []
                                                      },
                                                      {
                                                          "type": "attribute",
                                                          "name": "person_name",
                                                          "required": [
                                                              "person_name.given_name",
                                                              "person_name.family_name"
                                                          ],
                                                          "optional": []
                                                      }
                                                  ]
                                              }
                                          },
                                          {
                                              "type": "ineligible",
                                              "children": [],
                                              "mapped": [],
                                              "schema": {
                                                  "type": "attribute",
                                                  "name": "birthdate",
                                                  "required": [
                                                      "birthdate"
                                                  ],
                                                  "optional": []
                                              },
                                              "unmapped": [
                                                  {
                                                      "expression": null,
                                                      "field": "birthdate",
                                                      "missing": [],
                                                      "used": []
                                                  }
                                              ]
                                          }
                                      ],
                                      "mapped": [],
                                      "schema": {
                                          "type": "optional",
                                          "values": [
                                              {
                                                  "type": "attribute",
                                                  "name": "iso_3166_1_country",
                                                  "required": [
                                                      "iso_3166_1_country"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "hl7_gender",
                                                  "required": [
                                                      "hl7_gender"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "birthdate",
                                                  "required": [
                                                      "birthdate"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "birth_year",
                                                  "required": [
                                                      "birth_year"
                                                  ],
                                                  "optional": []
                                              },
                                              {
                                                  "type": "attribute",
                                                  "name": "person_name",
                                                  "required": [
                                                      "person_name.given_name",
                                                      "person_name.family_name"
                                                  ],
                                                  "optional": []
                                              }
                                          ]
                                      }
                                  },
                                  {
                                      "type": "ineligible",
                                      "children": [],
                                      "mapped": [],
                                      "schema": {
                                          "type": "attribute",
                                          "name": "birth_year",
                                          "required": [
                                              "birth_year"
                                          ],
                                          "optional": []
                                      },
                                      "unmapped": [
                                          {
                                              "expression": null,
                                              "field": "birth_year",
                                              "missing": [],
                                              "used": []
                                          }
                                      ]
                                  }
                              ],
                              "mapped": [],
                              "schema": {
                                  "type": "optional",
                                  "values": [
                                      {
                                          "type": "attribute",
                                          "name": "iso_3166_1_country",
                                          "required": [
                                              "iso_3166_1_country"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "hl7_gender",
                                          "required": [
                                              "hl7_gender"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "birthdate",
                                          "required": [
                                              "birthdate"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "birth_year",
                                          "required": [
                                              "birth_year"
                                          ],
                                          "optional": []
                                      },
                                      {
                                          "type": "attribute",
                                          "name": "person_name",
                                          "required": [
                                              "person_name.given_name",
                                              "person_name.family_name"
                                          ],
                                          "optional": []
                                      }
                                  ]
                              }
                          },
                          {
                              "type": "ineligible",
                              "children": [],
                              "mapped": [],
                              "schema": {
                                  "type": "attribute",
                                  "name": "person_name",
                                  "required": [
                                      "person_name.given_name",
                                      "person_name.family_name"
                                  ],
                                  "optional": []
                              },
                              "unmapped": [
                                  {
                                      "expression": null,
                                      "field": "person_name.given_name",
                                      "missing": [],
                                      "used": []
                                  },
                                  {
                                      "expression": null,
                                      "field": "person_name.family_name",
                                      "missing": [],
                                      "used": []
                                  }
                              ]
                          }
                      ],
                      "mapped": [],
                      "schema": {
                          "type": "optional",
                          "values": [
                              {
                                  "type": "attribute",
                                  "name": "iso_3166_1_country",
                                  "required": [
                                      "iso_3166_1_country"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "hl7_gender",
                                  "required": [
                                      "hl7_gender"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "birthdate",
                                  "required": [
                                      "birthdate"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "birth_year",
                                  "required": [
                                      "birth_year"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "person_name",
                                  "required": [
                                      "person_name.given_name",
                                      "person_name.family_name"
                                  ],
                                  "optional": []
                              }
                          ]
                      }
                  }
              ],
              "mapped": [],
              "schema": {
                  "type": "all_of",
                  "values": [
                      {
                          "type": "any_of",
                          "values": [
                              {
                                  "type": "attribute",
                                  "name": "unique_id",
                                  "required": [
                                      "unique_id.type",
                                      "unique_id.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "mobile_id_unique_identifier",
                                  "required": [
                                      "mobile_id_unique_identifier.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "apple_idfa",
                                  "required": [
                                      "apple_idfa.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "android_advertising_id",
                                  "required": [
                                      "android_advertising_id.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "sha256_hashed_email",
                                  "required": [
                                      "sha256_hashed_email.value"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "hashed_email",
                                  "required": [
                                      "hashed_email.type",
                                      "hashed_email.value"
                                  ],
                                  "optional": []
                              }
                          ]
                      },
                      {
                          "type": "optional",
                          "values": [
                              {
                                  "type": "attribute",
                                  "name": "iso_3166_1_country",
                                  "required": [
                                      "iso_3166_1_country"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "hl7_gender",
                                  "required": [
                                      "hl7_gender"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "birthdate",
                                  "required": [
                                      "birthdate"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "birth_year",
                                  "required": [
                                      "birth_year"
                                  ],
                                  "optional": []
                              },
                              {
                                  "type": "attribute",
                                  "name": "person_name",
                                  "required": [
                                      "person_name.given_name",
                                      "person_name.family_name"
                                  ],
                                  "optional": []
                              }
                          ]
                      }
                  ]
              },
              "unmapped": [
                  {
                      "expression": null,
                      "field": "hashed_email.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "mobile_id_unique_identifier.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "sha256_hashed_email.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "android_advertising_id.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "hashed_email.type",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "unique_id.type",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "apple_idfa.value",
                      "missing": [],
                      "used": []
                  },
                  {
                      "expression": null,
                      "field": "unique_id.value",
                      "missing": [],
                      "used": []
                  }
              ]
          },
          "profiles": [
              {
                  "id": "cb2cfb37-81b2-42cf-b4fd-f16b2e48a8af",
                  "name": "Narrative General",
                  "description": "Test profile"
              }
          ]
      }
  ]

  export default TTD3P