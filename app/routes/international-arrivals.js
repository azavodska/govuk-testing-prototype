const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/international-arrivals/v1/action1/travel-route', function (req, res) {
    let travelRoute = req.session.data['travel-route']
    if (travelRoute == "red") {
      res.redirect('/international-arrivals/v1/red-package-exit')
    } else {
      res.redirect('/international-arrivals/v1/personal-details')
    }
})

router.post('/international-arrivals/v1/action2/contact-details-same-person-1', function (req, res) {
  let contactDetailsSame = req.session.data['contact-details-same-person-1']
  if (contactDetailsSame == "Yes") {
    res.redirect('/international-arrivals/v1/check-your-answers-person-1')
  } else {
    res.redirect('/international-arrivals/v1/contact-details-person-1')
  }
})

router.post('/international-arrivals/v1/action3/travel-route-same-person-1', function (req, res) {
  let travelRouteSame = req.session.data['travel-route-same-person-1']
  if (travelRouteSame == "No") {
    res.redirect('/international-arrivals/v1/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v1/travel-details-same-person-1')
  }
})

router.post('/international-arrivals/v1/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v1/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v1/contact-details-same-person-1')
  }
})


// router.post('/international-arrivals/v2/action1/travel-route', function (req, res) {
//     let travelRoute = req.session.data['travel-route']
//     if (travelRoute == "red") {
//       res.redirect('/international-arrivals/v2/red-package-exit')
//     } else {
//       res.redirect('/international-arrivals/v2/personal-details')
//     }
// })

router.post('/international-arrivals/v2/action2/contact-details-same-person-1', function (req, res) {
  let contactDetailsSame = req.session.data['contact-details-same-person-1']
  if (contactDetailsSame == "Yes") {
    res.redirect('/international-arrivals/v2/check-your-answers-person-1')
  } else {
    res.redirect('/international-arrivals/v2/contact-details-person-1')
  }
})

router.post('/international-arrivals/v2/action3/travel-route-same-person-1', function (req, res) {
  let travelRouteSame = req.session.data['travel-route-same-person-1']
  if (travelRouteSame == "No") {
    res.redirect('/international-arrivals/v2/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v2/travel-details-same-person-1')
  }
})

router.post('/international-arrivals/v2/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v2/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v2/travel-route-same-person-1')
  }
})


router.post('/international-arrivals/v2/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v2/previous-infection')
  } else {
    res.redirect('/international-arrivals/v2/vaccine-date')
  }
})

// Version 2 - Registration - Ethnic group route
router.post('/international-arrivals/v2/action5/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/international-arrivals/v2/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v2/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v2/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v2/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v2/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v2/nhs-number-known')
  }

})

router.post('/international-arrivals/v2/action/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/international-arrivals/v2/previous-infection-person-1')
  } else {
    res.redirect('/international-arrivals/v2/vaccine-date-person-1')
  }
})

router.post('/international-arrivals/v2/action/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/international-arrivals/v2/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v2/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v2/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v2/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v2/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v2/nhs-number-known-person-1')
  }
})

router.post('/international-arrivals/v2/action/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes"){
    res.redirect('/international-arrivals/v2/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v2/registered-with-GP-person-1')
  }
})

router.post('/international-arrivals/v2/action9/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/international-arrivals/v2/nhs-number')
  } else {
    res.redirect('/international-arrivals/v2/registered-with-GP')
  }
})

router.post('/international-arrivals/v2/action/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v2/address-person-1')
  } else {
    res.redirect('/international-arrivals/v2/gender-person-1')
  }
})

router.post('/international-arrivals/v2/action/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v2/address')
  } else {
    res.redirect('/international-arrivals/v2/gender')
  }
})

// VERSION THREE

// International Arrivals Version Three - Travel Package Exempt
router.post('/international-arrivals/v3/action3/travel-package-exempt', function (req, res) {
  let travelPackageExempt = req.session.data['travel-package-exempt']
  if (travelPackageExempt == "Yes, I need a replacement test kit"){
    res.redirect('/international-arrivals/v3/booking-reference')
  } else if (travelPackageExempt == 'Yes, I am in financial hardship') {
    res.redirect('/international-arrivals/v3/tbc')
  } else {
    res.redirect('/international-arrivals/v3/name')
  }
})

// International Arrivals Version Three - Ethnic group
router.post('/international-arrivals/v3/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/international-arrivals/v3/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v3/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v3/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v3/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v3/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v3/nhs-number-known')
  }

})

// International Arrivals Version Three - NHS Number Known
router.post('/international-arrivals/v3/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/international-arrivals/v3/nhs-number')
  } else {
    res.redirect('/international-arrivals/v3/registered-with-GP')
  }
})

// International Arrivals Version Three - Regisered With GP
router.post('/international-arrivals/v3/action3/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v3/address')
  } else {
    res.redirect('/international-arrivals/v3/gender')
  }
})

// International Arrivals Version Three - Vaccine
router.post('/international-arrivals/v3/action3/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v3/travel-route')
  } else {
    res.redirect('/international-arrivals/v3/vaccine-date')
  }
})

// International Arrivals Version Three - Travel Details Same Person 1
router.post('/international-arrivals/v3/action3/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v3/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v3/ethnic-group-person-1')
  }
})

// International Arrivals Version Three - Ethnic Group Person 1
router.post('/international-arrivals/v3/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/international-arrivals/v3/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v3/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v3/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v3/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v3/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v3/nhs-number-known-person-1')
  }
})

// International Arrivals Version Three - NHS Number Known Person 1
router.post('/international-arrivals/v3/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes"){
    res.redirect('/international-arrivals/v3/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v3/registered-with-GP-person-1')
  }
})

// International Arrivals Version Three - Registered With GP Person 1
router.post('/international-arrivals/v3/action3/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v3/address-person-1')
  } else {
    res.redirect('/international-arrivals/v3/gender-person-1')
  }
})

// International Arrivals Version Three - Vaccine Person 1
router.post('/international-arrivals/v3/action3/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/international-arrivals/v3/travel-route-same-person-1')
  } else {
    res.redirect('/international-arrivals/v3/vaccine-date-person-1')
  }
})


// VERSION FOUR

// International Arrivals Version Four - Travel Package Exempt
router.post('/international-arrivals/v4/action4/travel-package-exempt', function (req, res) {
  let travelPackageExempt = req.session.data['travel-package-exempt']
  if (travelPackageExempt == "Yes, I need a replacement test kit"){
    res.redirect('/international-arrivals/v4/travel-package-provider')
  } else if (travelPackageExempt == 'Yes, I am in financial hardship') {
    res.redirect('/international-arrivals/v4/tbc')
  } else {
    res.redirect('/international-arrivals/v4/name')
  }
})

// International Arrivals Version Four - Ethnic group
router.post('/international-arrivals/v4/action4/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/international-arrivals/v4/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v4/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v4/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v4/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v4/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v4/nhs-number-known')
  }

})

// International Arrivals Version Four - NHS Number Known
router.post('/international-arrivals/v4/action4/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/international-arrivals/v4/nhs-number')
  } else {
    res.redirect('/international-arrivals/v4/registered-with-GP')
  }
})

// International Arrivals Version Four - Regisered With GP
router.post('/international-arrivals/v4/action4/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v4/address')
  } else {
    res.redirect('/international-arrivals/v4/gender')
  }
})

// International Arrivals Version Four - Vaccine
router.post('/international-arrivals/v4/action4/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v4/ethnic-group')
  } else {
    res.redirect('/international-arrivals/v4/vaccine-date')
  }
})

// International Arrivals Version Four - Travel Details Same Person 1
router.post('/international-arrivals/v4/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v4/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v4/name-person-1')
  }
})

// International Arrivals Version Four - Ethnic Group Person 1
router.post('/international-arrivals/v4/action4/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/international-arrivals/v4/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v4/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v4/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v4/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v4/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v4/nhs-number-known-person-1')
  }
})

// International Arrivals Version Four - NHS Number Known Person 1
router.post('/international-arrivals/v4/action4/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes"){
    res.redirect('/international-arrivals/v4/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v4/registered-with-GP-person-1')
  }
})

// International Arrivals Version Four - Registered With GP Person 1
router.post('/international-arrivals/v4/action4/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals/v4/address-person-1')
  } else {
    res.redirect('/international-arrivals/v4/gender-person-1')
  }
})

// International Arrivals Version Four - Vaccine Person 1
router.post('/international-arrivals/v4/action4/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/international-arrivals/v4/ethnic-group-person-1')
  } else {
    res.redirect('/international-arrivals/v4/vaccine-date-person-1')
  }
})

module.exports = router
