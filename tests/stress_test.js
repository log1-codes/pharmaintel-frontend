import http from 'k6/http';
import { check, sleep } from 'k6';

// ─── k6 Stress Test Configuration ───
// This test simulates ramping up traffic from 0 to 50 users, 
// holding at 50 users to stress the site, and then cooling down.
export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users
    { duration: '1m', target: 50 },  // Ramp up further to 50 users (Stress stage)
    { duration: '1m', target: 50 },  // Stay at 50 users
    { duration: '30s', target: 0 },  // Cool down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete under 500ms
    http_req_failed: ['rate<0.01'],   // Error rate must be less than 1%
  },
};

// Target Website B URL
// You can change this to http://localhost:5173 for local testing
const TARGET_URL = 'https://amith-intel-frontend.vercel.app';

export default function () {
  // 1. Stress test the main entry route
  const res = http.get(`${TARGET_URL}/`);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'page contains html': (r) => r.body.includes('<!DOCTYPE html>') || r.body.includes('<div id="root">'),
  });

  // Simulate a user browsing the site
  sleep(1);
}
