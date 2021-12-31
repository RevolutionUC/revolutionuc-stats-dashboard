import { client } from './http';

export const LiveStatsService = {
  getRegistrants: async () => {
    const res = await client.get('/registrants');
    return res.data;
  },
  getLatticeStats: async () => {
    const res = await client.get('/lattice');
    return res.data;
  },
};
