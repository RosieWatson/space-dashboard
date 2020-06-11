const functions = require('firebase-functions')

const admin = require('firebase-admin')
admin.initializeApp()

const fetch = require('node-fetch')

exports.getAstronauts = functions.https.onRequest(async (req, res) => {
  return fetch('http://api.open-notify.org/astros')
    .then(response => response.json())
    .then(body => {
      return res
        .set('Access-Control-Allow-Origin', '*')
        .status(200)
        .type('application/json')
        .json({
          message: 'success',
          data: body,
          error: null
        })
    })
    .catch(error => {
      return res.json({
        message: 'error',
        data: null,
        error
      })
    })
})
