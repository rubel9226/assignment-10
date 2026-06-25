import Link from "next/link"; 
import RegisterForm from "./RegisterForm";



export default async function RegisterPage() {
    


  return (
    <main className="flex justify-center min-h-screen bg-[#051424] text-white">

        <section className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold">Create Account</h2>
                <p className="text-slate-400 mt-2">Start your journey today.</p>

                

                {/* Form */} 
                <RegisterForm />

                <p className="text-center mt-8 text-slate-400">
                    Already have an account?{" "}
                    <Link
                    href="/login"
                    className="text-indigo-400 hover:text-indigo-300"
                    >
                    Login
                    </Link>
                </p>

            </div>

        </section>

    </main>
  );
}