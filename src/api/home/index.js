export const homeAPI = async ( environment, WEB_KEY_STAGING, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const options = {

        headers: {

            "Authorization": "Bearer " + WEB_KEY_STAGING

        }

    }
    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home", options )
    const data_json = await network_data.json()

    const { home, case_studies, resources, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        masthead : "",
        our_services : "",
        clients : "",
        service_highlight : "",
        case_study : "",
        review_banner : "",
        workshops_and_events : "",
        our_company : "",
        resource : "",
        incubator : "",
        lets_talk : ""

    }
    home.map( ( data ) => {

        if( data.slug === "masthead" )
            home_data.masthead = data
        else if( data.slug === "our-services" )
            home_data.our_services = data
        else if ( data.slug === "clients" )
            home_data.clients = data
        else if ( data.slug === "service-highlight" )
            home_data.service_highlight = data
        else if ( data.slug === "case-studies" )
            home_data.case_study = data
        else if ( data.slug === "review-banner" )
            home_data.review_banner = data
        else if ( data.slug === "workshops-and-events" )
            home_data.workshops_and_events = data
        else if ( data.slug === "our-company" )
            home_data.our_company = data
        else if ( data.slug === "resources" )
            home_data.resource = data
        else if ( data.slug === "incubator" )
            home_data.incubator = data
        else if ( data.slug === "lets-talk" )
            home_data.lets_talk = data

    })

    return { home_data, case_studies, resources, meta_tags }

}
