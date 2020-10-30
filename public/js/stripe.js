/* eslint-disable */
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51HhRPiCrICTmYAs3q4Zk3Sc4dEv1VRyf3ATetFnWit2UVcCfjmkulRqeh19HGJNSc547YPnzf00CwnQ2szS0j5rD00b345RVdJ'
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`
  );
  console.log(session);

  // 2) Create checkout form + charge credit card
};
