// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Clock, BarChart3, Users } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image"

// export default function LandingPage() {
//   return (
//     <div className="w-full">
//       {/* Header */}
//       <header className="w-full bg-white shadow-sm">
//         <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
//            <Image src= {'/logo.png'} alt='logo' width={200} height={200} className="h-[80px] w-[300px] object-contain"/>
//    <Link href="/auth">
//   <Button variant="outline">Dashboard</Button>
// </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               AI-Powered <span className="text-blue-600">Recruitment</span> Assistant
//               for Modern Recruiters
//             </h1>
//             <p className="mt-4 text-lg text-muted-foreground">
//               Let our AI voice agent conduct candidate interviews while you
//               focus on finding the perfect match. Save time, reduce bias, and
//               improve your hiring process.
//             </p>
//           </div>

//           {/* Banner instead of video */}
//           <div className="bg-blue-100 rounded-xl flex items-center justify-center h-[280px]">
//             <span className="text-2xl font-semibold text-blue-600">
//               🚀 AI Recruitment Banner
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Streamline Your Hiring Process</h2>
//           <p className="text-muted-foreground mb-12">
//             AIcruiter helps you save time and find better candidates with our advanced AI
//             interview technology.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="p-6">
//               <CardContent className="flex flex-col items-center text-center">
//                 <Clock className="h-10 w-10 text-blue-600 mb-4" />
//                 <h3 className="font-semibold text-lg">Save Time</h3>
//                 <p className="text-muted-foreground mt-2">
//                   Automate initial screening interviews and focus on final candidates.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6">
//               <CardContent className="flex flex-col items-center text-center">
//                 <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
//                 <h3 className="font-semibold text-lg">Data-Driven Insights</h3>
//                 <p className="text-muted-foreground mt-2">
//                   Get detailed analytics and candidate comparisons based on interview responses.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6">
//               <CardContent className="flex flex-col items-center text-center">
//                 <Users className="h-10 w-10 text-blue-600 mb-4" />
//                 <h3 className="font-semibold text-lg">Reduce Bias</h3>
//                 <p className="text-muted-foreground mt-2">
//                   Standardized interviews help eliminate unconscious bias in the hiring process.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section className="bg-gray-50 py-20 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <div className="text-4xl font-bold text-blue-600">1</div>
//               <h3 className="font-semibold mt-2">Create Interview</h3>
//               <p className="text-muted-foreground mt-2">
//                 Set up your job requirements and customize interview questions.
//               </p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-600">2</div>
//               <h3 className="font-semibold mt-2">Share with Candidates</h3>
//               <p className="text-muted-foreground mt-2">
//                 Send interview links to candidates to complete at their convenience.
//               </p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-600">3</div>
//               <h3 className="font-semibold mt-2">Review Results</h3>
//               <p className="text-muted-foreground mt-2">
//                 Get AI-analyzed results, transcripts, and candidate comparisons.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Ready to Transform Your Hiring Process?
//         </h2>
//         <p className="text-muted-foreground mb-6">
//           Join hundreds of companies already using AIcruiter to find the best talent.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-4">
//             <Link href="/auth">
// <Button size="lg">Get Started for Free</Button>
// </Link>
          
          
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="h-[80px] w-[300px] object-contain"
          />
          <Link href="/auth">
            <Button variant="outline" className='cursor-pointer bg-primary text-white'>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Video on Right */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI-Powered <span className="text-blue-600">Recruitment</span>{" "}
              Assistant for Modern Recruiters
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Let our AI voice agent conduct candidate interviews while you
              focus on finding the perfect match. Save time, reduce bias, and
              improve your hiring process.
            </p>
          </div>

         
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src="/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Streamline Your Hiring Process
          </h2>
          <p className="text-muted-foreground mb-12">
            AIcruiter helps you save time and find better candidates with our
            advanced AI interview technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg">Save Time</h3>
                <p className="text-muted-foreground mt-2">
                  Automate initial screening interviews and focus on final
                  candidates.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg">Data-Driven Insights</h3>
                <p className="text-muted-foreground mt-2">
                  Get detailed analytics and candidate comparisons based on
                  interview responses.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg">Reduce Bias</h3>
                <p className="text-muted-foreground mt-2">
                  Standardized interviews help eliminate unconscious bias in the
                  hiring process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          
          <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-none">
            <video
              src="/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Experience AI-Powered Interviews
            </h2>
            <p className="text-muted-foreground">
              See how candidates engage with AI-driven interview sessions that
              provide fair, consistent, and insightful evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600">1</div>
              <h3 className="font-semibold mt-2">Create Interview</h3>
              <p className="text-muted-foreground mt-2">
                Set up your job requirements and customize interview questions.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">2</div>
              <h3 className="font-semibold mt-2">Share with Candidates</h3>
              <p className="text-muted-foreground mt-2">
                Send interview links to candidates to complete at their
                convenience.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">3</div>
              <h3 className="font-semibold mt-2">Review Results</h3>
              <p className="text-muted-foreground mt-2">
                Get AI-analyzed results, transcripts, and candidate comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-muted-foreground mb-6">
          Join hundreds of companies already using AIcruiter to find the best
          talent.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/auth">
            <Button size="lg" className='cursor-pointer'>Get Started for Free</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

