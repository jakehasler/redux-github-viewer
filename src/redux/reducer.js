import immutable from 'seamless-immutable';

const defaultState = immutable({
  profiles: []
});

const SAVE = 'github-viewer/profiles/SAVE';

export default function reducer(state = defaultState, { type, ...payload  } = {}) {
  switch (type) {
    case SAVE:
      const profiles = state.profiles;
      profiles.push(payload.profile);
      return { ...state, isFetching: false, profiles };

    default: return state;
  }
}

export function save(profile) {
  return (dispatch) => {
    dispatch({ type: SAVE, profile });
  }
}

export const getProfiles = state => state.profiles;

