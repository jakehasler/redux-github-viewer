import immutable from 'seamless-immutable';

const defaultState = immutable({
  profiles: []
});

const SAVE = 'github-viewer/profiles/SAVE';

export default function reducer(state = defaultState, { type, ...payload  } = {}) {
  switch (type) {
    case SAVE:
      console.log('STATE', state);
      const profiles = state.profiles;
      profiles.push(payload.profile);
      return { ...state, isFetching: false, profiles };

    default: return state;
  }
}

export function save(profile) {
  console.log('Saving...', profile);
  return { type: SAVE, profile };
}

export const getProfiles = state => state.profiles;

