import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true,
    },

    user: {
        additionalFields: {
            isAdmin: {
                type: "boolean",
                defaultValue: false,
            },
            balance: {
                type: "number",
                defaultValue: 0,
            },
            isPremium: {
                type: "boolean",
                defaultValue: false,
            },
            totalDeposit: {
                type: "number",
                defaultValue: 0,
            },
            totalWithdraw: {
                type: "number",
                defaultValue: 0,
            },
        },
    },

    secret: process.env.BETTER_AUTH_SECRET,

    plugins: [
        jwt({
            jwt: {
                expirationTime: "7d",
            }
        }), 
    ]
});