"use strict"

const test = require('jtf')
const typea = require('typea')
const T = require('../..')

let sample = [
   {
      id: 553,
      b: [
         {
            kk: [
               {
                  oo: {
                     dd: [{
                        ss: 666,
                     }]
                  },
               },
               {
                  ss: {
                     dd: [
                        {
                           rr: 666,
                        },
                        {
                           yy: 666,
                        }
                     ]
                  },
                  jj: 888
               }
            ],
            xx: 666,
            ss: 888
         },
         {
            jj: [
               {
                  ss: {
                     dd: [
                        {
                           ss: 666,
                        },
                        {
                           oo: 888,
                        }
                     ]
                  },
               }
            ],
            ss: 666,
            xx: 88,
         },
      ],
   },
   {
      id: 87,
      cid: 3,
      b: [{
         kk: [{
            ss: [{
               ss: 666,
            }],
         }],
         jj: 888,
         xx: 12
      }],
      oo: {
         o1: 99,
         o2: 81
      }
   },
   {
      id: 555,
      cid: 15,
      oo: {
         o1: 34,
         o2: 56
      }
   },
   {
      id: 368,
      cid: 666,
      oo: {
         o1: 485,
         o2: 66
      }
   },
]


test('精确匹配', t => {

   let result = T(sample).array({
      "and": {
         "id": 553,
         'b.0.kk.1.jj': 888,
      }
   })

   t.deepEqual([sample[0]], result)

})


test('模糊匹配', t => {

   let result = T(sample).array({
      "and": {
         "id": 553,
         'b.*.jj.*.ss.dd.*.ss': 666,
      }
   })

   let { data, error } = typea(result, [
      {
         id: 553, b: [Object, Object]
      }
   ])

   t.ok(data, error)

})