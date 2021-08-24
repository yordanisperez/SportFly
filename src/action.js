
const data={
    "request": {
      "ip": "13.33.86.47",
      "language": "en",
      "method": "POST",
      "geoip": {
        "cityName": "Bellevue",
        "continentCode": "NA",
        "countryCode3": "USA",
        "countryCode": "US",
        "countryName": "United States of America",
        "latitude": 47.61793,
        "longitude": -122.19584,
        "timeZone": "America/Los_Angeles"
      },
      "hostname": "dev-csgmhfrr.example.com",
      "user_agent": "curl/7.64.1"
    },
    "connection": {
      "id": "con_fpe5kj482KO1eOzQ",
      "name": "Username-Password-Authentication",
      "metadata": {},
      "strategy": "auth0"
    },
    "tenant": {
      "id": "dev-csgmhfrr"
    },
    "transaction": {
      "acr_values": [],
      "id": "",
      "locale": "",
      "requested_scopes": [],
      "ui_locales": [],
      "protocol": "oauth2-access-token",
      "redirect_uri": "http://someuri.com",
      "prompt": [
        "none"
      ],
      "login_hint": "test@test.com",
      "response_mode": "form_post",
      "response_type": [
        "id_token"
      ],
      "state": "AABBccddEEFFGGTTasrs"
    },
    "user": {
      "tenant": "dev-csgmhfrr",
      "username": "j+smith",
      "email": "j+smith@example.com",
      "phoneNumber": "123-123-1234",
      "user_id": "auth0|5f7c8ec7c33c6c004bbafe82",
      "created_at": "2021-08-23T19:56:38.589Z",
      "email_verified": true,
      "family_name": "Smith",
      "given_name": "John",
      "last_password_reset": "2021-08-23T19:56:38.589Z",
      "multifactor": [],
      "name": "John Smith",
      "nickname": "j+smith",
      "phone_number": "123-123-1234",
      "phone_verified": true,
      "picture": "http://www.gravatar.com/avatar/?d=identicon",
      "updated_at": "2021-08-23T19:56:38.589Z",
      "app_metadata": {},
      "user_metadata": {}
    }
  }

  


function setDefaultPermiso(event){
    event.user.user_metadata={
        "authorization": {
        "groups": [
          "ManagerClub",
          "Asociado"
        ],
        "roles": [
          "add_club",
          "add_member",
          "add_birgs",
          "create_fly",
          "add_release_point",
          "certifica_birg",
          "register_birgs_fly",
          "certify_award",
          "certify_coord_pigeon_house \t"
        ],
        "permissions": [
          "create:club,read:club,update:club",
          "create:bird,read:bird",
          "create:bird_register, read:bird_register, update:bird_register",
          "create:bird_certify, read:bird_certify, delete:bird_certify",
          "read:bird_certify"
        ]
      }};
    console.log(event.user);
}

setDefaultPermiso(data);
