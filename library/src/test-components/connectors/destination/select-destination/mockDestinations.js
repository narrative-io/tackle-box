const mockDestinations = [
  {
      "index": 0,
      "name": "Narrative Download",
      "icon": "https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg",
      "selected": true
  },
  {
      "index": 1,
      "appId": 7,
      "name": "S3 Connector",
      "icon": {
          "name": "icon.svg",
          "imageType": "image/png",
          "image": "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnDSURBVHgB7Z1ZbFTnFcf/d5nFs3nHOzZmDxAgKWklIIQUShJwQemmqo3aqFIf+lLy0j70IfDavPAUKVIXIqUtqioa2rSNSlq2gAuE2vICZvGGY2OPl7E949nvTM65HrMa2yEzvvdG3086uuOZO/b1+X/3fOc7373flTAH6XS6gDY/J3uBrC5jgvkZJ2sme5/shCRJPY/bUZrtTXJ8HW1+j2nHC744R8kOzyaE/PAb5Hxu8U0Qzs8mPyZrIt8efPiDB84A2uFN2hyCIJccojPh8MwPdwXItPwjECwGb5AIuq91ATIxn8NOAQSLAXfSm7lPmOkDDkE4fzFhX3OSAynT+rshMIJCPgMOQGAUB1mA/RAYxQ4OQQGI+G8UPSxAGgLDkCEwFCGAwQgBDMayAqRTKUz2dCE5OsxDeVgVFRZkoLUF53/zNsLXr2Lnshp4n9sK70v7oZZX0tBSgpWwUBaUxvCtWzj79hG0fXACiWgU5SXF2LuqHqqWhJTngmfXy/A2fBdKYRGsgukFSITD6G9txqX3jqLjo38jPhW6+9n9AszAQri3vQjPngaoVUshqeY+yU0rAMf4wY6ruPyHd9H2jxMIj409ss9sAswgFxTBvWM3vN9ogFK6xLShyZQCpDQNp478muL8Ow+0+IeZS4AZFF8+vN9+jfqIb5pSBFNmQalEAnfa2+Z0/kLRJiegDQ/CrIhxgMEIAQxGCGAwQgCDyWmSzIMl//UOxK+3oay6Grb6VVALiyHZ7abLSDjtjQWDGO/vw+2LF7B65Ur4vrY95+OInPx2/mfutLfik2Pv4eq/PsC6onxyvBeyNx+OFavhWL8Jjqeehq2iGpLLZZgYScq2IoFR+G/cQNf5M+hqvIChjnY46HCKtzyD5CeN8H3nh7BV1uTsGHMiAA+gfvu9A4iFgtNvkABMKjiBSNMl3WSHQx8s2evqSZDNsK9YA7WsXBcpZ9CQJxqcxEhXJ3ouNaLz47MYutaO0MgIjT3ujSUcbhfSJE74/ClEW67A/cIeePe9CqWoBNkmJwJo8Ri0WHTOfVKxGFJDd5AkC19uhOL1Qa2ogn31eijLVyGVhTHADLFQiFr4Odw8dxo9FxsxREU8LnEsZAyaIsGC/zwOx9oNyLOKAJ8bClnaxLhuMQoBGiTEO3uRLZr+cgyNb70FbY4R83zHl05pyAXmzIL4H16ws+aPzVo8rpc3zIj15gMkGdE0ZSz00j82jtst17DMlYeV+W7U+jxwmrz6+TCmPVqJso4UbdkSFKpjFK8jdGZEtQRS98XuYDiCPtqeI3OoCmq9HtQX+EgML4pdTnhMLogpj44zvjVLiuF0OtAfCmM0Sh12nByfSkOWeGpG0jOa+7tQfh1NargRmMDN8Uk9thY67FjqdcPFX4I5pz1MKYBMCtTm+3RjNHJ8hPqEIIkwQWKwICMRMsqkBiZCegep0ndsZLxVyN8KiSST0wPBkH4pslmxRMBUqAV7ZBs8NhsqKEefIUH9wYddtzHgH4ZVsXQtiEOVBHPOdC0USwvwZbio0tQhiEeqSYr/sWQSMYrzkVgCU1QiCNF2kkbbdkXFs2VFWOFxIhiNI5SII0z9RDiRRJT2i2sp+n4KZsaUAmjk+Muf3kH3KI2MqfNNkiO1WZp7MeX/z1aVocJV/OjvSLF4mp4ZtQ350T44Yso8yJxnAHlqPBLFZCyGJ4U7bkVWaWygwmt3YHrEbD4JxISMwQgBDEYIYDBCAIMRAhiMEMBghAAGIwQwGCGAwQgBDEYIYDCmFUDOYp3fzHdhmbIYx4W0LTUVWFFSiGAsTlORmTIzWYRK01GyRPLeZSbs4Lg2XfmMUCmaS9a8L3+Py9RjNHGfFnPCn4/CPKduDDuYy9F8NYRG9X2u8yfY4fTZpaFRDI0F9JJ1nMrP/Dnvqzf6tFndfg9LzAlLmcl2HUVBnm36ZVKW0ewP6C3cqohO2GAseGUcTcNTy4dqg+J0oqSyEkGefoxGkUwmoFE/YKUVeMwtAIUbiS9jz3NDdnugFBRCzi/QX/N7cNixm7KlBM2cRaamEA6FEJwYxxhNQQb8Q5gYH0MoMIGp4CTiX2B2LZeYUgBuv/0JDa6qOhQvq4ezpBRq3uw3cvA7jrw83QpKpi8f5xtEkiRIZPAOQr3daG9pRnNvvykzIVMKwJcgtnX3oq+5DTa7DYXFJSivWYrq+nqUVdcgv7QEqj7PO42eJUXCSI6OID44gNSIH5gKQaKQ5CYxnGIc8GSk+L6taAyD/f0YGhhAy6WLsFPcLygsROXSWtSv34AqtwOxvl6kyPm0MyT6jpUu1bJMJ5zWc/s0ouEwBtlIlMHOm3hl9XIo8Zhlr48zZxqqUCFCtc27W0q/kWP+Gy/s3IHb5v99RmD4GcApJS8xwzfA2VethXPTFsg1tXD+6hfAfz9CNvjK93+Ar+45gL6mK7h19hS6/3ceQb8f8TBfWT1//yA78yDzrbU5ICcC2OiAfZXVCPTdnvXeKkmm9NLrhb2mDo71G+FY+zRstfWQXW4900lSTg/aJ1vw3/OVV2DdKw1Y9/I+TAXGMHi1DV0XzuHWuTMY7e5CLDT5iBiSokKtXgrvvm/BsW4jckFOBFiyag1+cuw4Ov5zEv//85+gpOOQPV6oJIpzwzNwrt8EGzlf9vrI0YscBUlgd1Exlm/boduLb/wSE/19GGgnQT4+g94rl/V16PiuTV/Dq3A/v1tf8sZS9wlzWMmvqsFzr71OLa4Bsdud8C0ph1paBonODjPBfUNRXb1uT720FxE6OwLUuZdWVMJOrV/KcQPJaR/ARTRPaaluVkCmkbebBn1si/Y3ITAUIYDBCAEMxrQCqFQFlbKRecgLG9QZhTnnhGnQs/WnP4ODUtcbp04iNDz8RDV+hbIu19adcG3/uli28kng1RMHO67h8h/fRcfJD0kI/wNCPG7ZSl45l53u2bUXSnllds6kHGGJpYt55a2B1ma0/u19tPz9+N1FXB8WgBdodW3fBfe2ndOr5srm7+Is9QSNVDKJkc5buPC7d0iIv6LI6cBeqoZyqHI9Ty1+9z6oZRWWWsDbko8w0UiIwbZWdBw/ho3LlyF/5x6oVNowc6h5HOIZMgYjxgEGIwQwGCGAwQgBDEYIYDAsQA8ERjEuBDCWZhbgDARGcYIHYvwk1QAERrBMpuE7Lyp4GoLF5ig/U14vnmQea94E8VzhxYIb/WYWQE9D+QVtDkOwWBzO+PzeOIDeOAIhwmJwOONrnUfqtxSODtLmTYhwlG047DzgfGbWAnqmTzhE9iMIssFpstdnws79zDmDkRFiP9kBsk0QZ8VC6ckYj7GOZDLNWfkMKIzyQRW7dAUAAAAASUVORK5CYII=",
          "altText": "Buyer Studio"
      },
      "profiles": [
          {
              "id": "62c17625-99c3-496b-94b2-ee72192f3122",
              "name": "Chris Test Destinations",
              "description": "TEst",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "510c426e-9e52-4f22-bbc7-dc80a02427b2",
              "name": "Chris Test Destinations 2",
              "description": "TEst",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "7d02734d-3ea3-4659-abb5-814c539bf1c6",
              "name": "Chris from Narrative 3",
              "description": "Test",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "21e80ce9-4b89-475a-bf77-d496e3cb9836",
              "name": "Nick Test",
              "description": "This is a test",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "a9209a4a-48e7-4f13-92dc-7b3de6424c73",
              "name": "Matt Test",
              "description": "Description ",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "028891cf-315f-48b5-8b74-fa8f4a6fd188",
              "name": "Test Clear Forms",
              "description": "test",
              "status": "enabled",
              "disabled": false
          },
          {
              "id": "02fca399-bd4a-44c1-a7b7-1d13d36eb9ac",
              "name": "Another test profile",
              "description": "Test",
              "status": "enabled",
              "disabled": false
          }
      ],
      "quickSettings": [
          {
              "id": "bucket_prefix",
              "display_name": "Bucket Prefix",
              "schema": {
                  "type": "string",
                  "pattern": "^([a-zA-Z0-9]+\\/)*[a-zA-Z0-9]+$"
              },
              "description": "Bucket prefix to apply to each delivery",
              "value": null
          }
      ],
      "selected": false,
      "selectedProfile": "62c17625-99c3-496b-94b2-ee72192f3122"
  }
]

export default mockDestinations