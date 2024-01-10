export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.thoughtbot.blupp.co" : "https://api.thoughtbot.blupp.co"

}
