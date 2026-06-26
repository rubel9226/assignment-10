import { NextResponse } from 'next/server'
import { headers } from 'next/headers' 
import { stripe } from '@/lib/stripte';
import { auth } from '@/lib/auth';

export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const PRICE_ID = "price_1Tma9UHbdeMCGDyNRzY7A2xm";

    const userSession = await auth.api.getSession({
      headers: await headers(),
    });

    const user = userSession?.user;
    console.log(process.env.STRIPE_SECRET_KEY);
    const prices = await stripe.prices.list({
      limit: 10,
    });
    const account = await stripe.accounts.retrieve();

    console.log(account.id); 
    // const product = await stripe.products.retrieve(
    //   "prod_Um8QIT7fsuQo0m"
    // );

    // console.log(product, 'product id'); 
    console.log(prices.data, 'price data');


    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1Tma9UHbdeMCGDyNRzY7A2xm',
          quantity: 1,
        },
      ],
      metadata: {
        priceId: 'price_1Tma9UHbdeMCGDyNRzY7A2xm',
        userId: user?.id,
        userEmail: user?.email,
      },
      mode: 'payment',
      success_url: `${origin}/dashboard/plans/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/dashboard/plans/cancel`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}