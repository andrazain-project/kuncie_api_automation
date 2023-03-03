const dataCreateUser = function() {
    return {
        "name": "Herdian Chandra",
        "phone_number": "08999101010",
        "address": "Gambir, Jakarta",
        "point": 344,
        "is_registered": true,
        "vehicles": [
            {
                "name": "ADV",
                "type": "Honda"
            },
            {
                "name": "Xpander",
                "type": "Mitshubisi"
            }
        ]
    }
}

module.exports = {
    dataCreateUser
}