import Link from "next/link";
import LoginForm from "./LoginForm";

export default async function LoginPage() {

  return (
    <main className="flex justify-center bg-slate-950 text-white">
        <section className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8">
            <div className="w-full max-w-md"> 
                    <h3 className="text-3xl font-semibold">
                        Welcome back
                    </h3>

                    <p className="text-slate-400 mt-2">
                        Please enter your details to sign in.
                    </p>

                    

                    {/* login form */}
                    <LoginForm />

                    <p className="text-center mt-8 text-slate-400">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-indigo-400" >
                            Register now
                        </Link>
                    </p>
            </div>
        </section>
    </main>
  );
}