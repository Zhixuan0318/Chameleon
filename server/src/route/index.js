const express = require('express')
const router = express.Router()
const UserRoute = require('./user.route')
const AccountRoute = require('./account.route')
const TownhallRoute = require('./townhall.route')
const ProposalRoute = require('./proposal.route')
const AnnounceRoute = require('./announce.route')
const SearchService = require('./search.service')

router.use('/user', UserRoute)




router.use('/test', UserRoute)
router.use('/account', AccountRoute)
router.use('/townhall', TownhallRoute)
router.use('/proposal', ProposalRoute)
router.use('/announce', AnnounceRoute)







module.exports = router