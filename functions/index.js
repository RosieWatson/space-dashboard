const functions = require('firebase-functions')

const admin = require('firebase-admin')
admin.initializeApp()

const fetch = require('node-fetch')

exports.getAstronauts = functions.https.onRequest(async (req, res) => {
  fetch('http://api.open-notify.org/astros')
    .then(response => response.json())
    .then(body => {
      return res.send({
        message: 'success',
        data: body,
        error: null
      })
    })
    .catch(error => {
      return res.send({
        message: 'error',
        data: null,
        error
      })
    })
})
