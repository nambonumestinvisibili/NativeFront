import { DEV_DOMAIN } from "../config/devconfiguration"
import { useHttp } from "./axios"

const HOST = DEV_DOMAIN
const NATIVE_PATH = "api/"
const BASE_URL = `${HOST}${NATIVE_PATH}`

const PathPrefixes = {
  Interest: 'Interest',
  Authentication: 'Authentication',
  Profile: 'Profile',
  Venue: 'Venue'
}

const surroundWithRoot = urlPath => `${BASE_URL}${urlPath}`

const httpCall = (methodCall, url, setStateCallback, body) => 
  methodCall(surroundWithRoot(url), setStateCallback, { body })

const useApi = () => {
  const { get, post, put, patch, del } = useHttp()

  const api = {
    interestApi: {
      getAll: setStateCallback => httpCall(get, 'Interest', setStateCallback),
      
      postAllBody: (setStateCallback, stringData, dataB) => 
        httpCall(post, `Interest?stringData=${stringData}`, setStateCallback, { data: dataB })
    },

    authApi: {
      login: (setStateCallback, { email, password }) => 
        httpCall(post, `${PathPrefixes.Authentication}/login`, setStateCallback, {
           email, password
          }),

      signUp: (setStateCallback, { 
        email, 
        password,
      }) =>
        httpCall(post, `${PathPrefixes.Authentication}/signUp`, setStateCallback, {
          email, password
        }),

      registerBasics: (setStateCallback, { 
        firstname, 
        secondname,
        birthday
      }) =>
        httpCall(post, `${PathPrefixes.Authentication}/register/basics`, setStateCallback, {
          firstname, 
          secondname,
          birthday
        }),

      registerDescription: (setStateCallback, { 
        bio, info
      }) =>
        httpCall(post, `${PathPrefixes.Authentication}/register/description`, setStateCallback, {
          bio, info
        }),
        
      registerInterests: (setStateCallback, { interestGuids }) =>
        httpCall(post, `${PathPrefixes.Authentication}/register/interests`, setStateCallback, 
          interestGuids
        )
      
    },

    profileApi: {
      getCurrentUserProfile: setStateCallback => httpCall(get, Profile, setStateCallback)
    },

    venueApi: {
      getAllByLocation: (setStateCallback, area) => httpCall(post, `${PathPrefixes.Venue}/bylocation`, setStateCallback, area),
      getDetailedVenueByGuid: (setStateCallback, guid) => httpCall(get, `${PathPrefixes.Venue}/${guid}`, setStateCallback),
      visitApiAndMarkAsUnOrRecommended: (setStateCallback, { venueGuid, hasProfileUpvoted, hasProfileDownvoted }) =>
        httpCall(post,  `${PathPrefixes.Venue}/${venueGuid}/visit`, setStateCallback, { venueGuid, hasProfileUpvoted, hasProfileDownvoted })
    }
  }

  return { api }
}

export default useApi