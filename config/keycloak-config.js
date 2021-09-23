const session = require('express-session')
const Keycloak = require('keycloak-connect')

let _keycloak

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: 'eb18c09a-3a3f-4585-8cbb-e513582b22de'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Tryng to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }

}

function getKeycloak() {
    if (!_keycloak) {
        console.error('Keycloak has not been initialized. Please called init first. ');

    }
    return _keycloak;

}

module.exports = {
    initKeycloak,
    getKeycloak
};