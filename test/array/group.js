"use strict"

const test = require('jtf')
const typea = require('typea')
const T = require('../../')

test('group', t => {

   let sample = [
      { id: 13, b: "name" },
      { id: 11, b: "kk" },
      { id: 88, b: "test" },
      { id: 13, b: "xxx" },
      { id: 23, b: "age" },
      { id: 11, b: "name" },
      {
         id: 553,
         b: {
            xx: {
               jj: {
                  ss: { vv: 888 }
               }
            },
            xxx: {
               jj: {
                  ss: {
                     vv: 666,
                     vvv: 888,
                  }
               }
            },
            s: 666
         }
      },
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
         id: 555,
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
         id: 555,
         cid: 666,
         oo: {
            o1: 485,
            o2: 66
         },
         b: 777
      },
      {
         id: 323,
         cid: 88787,
         oo: {
            o1: 485,
            o2: 66
         }
      },
   ]

   let result = T(sample).array({ "group": 'oo.o1' })

   let { data, error } = typea(result, {
      '34': [{ id: 555, cid: 15, oo: Object }],
      '99': [{ id: 555, cid: 3, b: Array, oo: Object }],
      '485': [
         { id: 555, cid: 666, oo: Object, b: 777 },
         { id: 323, cid: 88787, oo: Object }
      ]
   })

   t.ok(data, error)

})
