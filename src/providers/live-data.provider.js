import {
  useState,
  useContext,
  createContext,
  useEffect,
  useReducer,
} from 'react';
import { useAsync } from './use-async.hook';
import { LiveStatsService } from './../services/live.service';

const defaultStats = {
  total: 0,
  age: {},
  major: {},
  school: {},
  gender: {},
  ethnicity: {},
  educationLevel: {},
  hackathonExperience: {},
};

const emptyArray = [];

const context = createContext({
  default: true,
  stats: defaultStats,
  registrants: [],
  query: `registered`,
  dispatch: () => {},
});

const registerUniqueValue = (uniqueValues, name, value) => {
  if (!uniqueValues[name]) {
    uniqueValues[name] = {};
  }

  if (!uniqueValues[name][value]) {
    uniqueValues[name][value] = 0;
  }

  uniqueValues[name][value]++;
};

const getAgeGroup = (age) => {
  if (age < 18) {
    return '18-';
  } else if (age < 25) {
    return `${age}`;
  } else if (age < 35) {
    return '25-34';
  } else {
    return '35+';
  }
};

export const LiveDataProvider = (props) => {
  const [stats, setStats] = useState(defaultStats);

  const [query, dispatch] = useReducer((_, q) => {
    switch (q) {
      case `registered`:
      case `confirmed`:
      case `checkedin`:
        return q;

      default:
        return `registered`;
    }
  }, `registered`);

  const { value: registrants } = useAsync(
    LiveStatsService.getRegistrants,
    emptyArray,
  );

  useEffect(() => {
    let processing = registrants;

    if (query === `confirmed`) {
      processing = processing.filter((r) => r.confirmed);
    } else if (query === `checkedin`) {
      processing = processing.filter((r) => r.checkedin);
    }

    if (!processing.length) return setStats(defaultStats);

    const _stats = { total: processing.length };

    processing.forEach((registrant) => {
      registerUniqueValue(_stats, `age`, getAgeGroup(parseInt(registrant.age)));
      registerUniqueValue(_stats, `major`, registrant.major);
      registerUniqueValue(_stats, `school`, registrant.school);
      registerUniqueValue(_stats, `gender`, registrant.gender);
      registerUniqueValue(_stats, `ethnicity`, registrant.ethnicity);
      registerUniqueValue(_stats, `educationLevel`, registrant.educationLevel);
      registerUniqueValue(
        _stats,
        `hackathonExperience`,
        registrant.hackathonExperience,
      );
    });

    setStats(_stats);
  }, [query, registrants]);

  return (
    <context.Provider value={{ stats, registrants, dispatch, query }}>
      {props.children}
    </context.Provider>
  );
};

export const useLiveData = () => {
  const data = useContext(context);
  if (data.default) {
    throw new Error('useLiveData must be used within a LiveDataProvider');
  }
  return data;
};
